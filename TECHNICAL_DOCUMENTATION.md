# CrewCall - Documentación Técnica

## Resumen

CrewCall es una aplicación móvil Expo/React Native para seleccionar flujos de anuncios de cabina y reproducirlos mediante síntesis de voz. La interfaz está en español; los anuncios disponibles dependen del módulo y del idioma.

## Tecnología

- Expo `55.0.10-canary-20260328-2049187`
- React Native `0.83.4`, React `19.2.0`
- Expo Speech `55.0.10-canary-20260328-2049187`
- React Navigation Native y Stack 7
- React Native Picker `2.11.4`
- Expo Status Bar `55.0.5-canary-20260328-2049187`
- Safe Area Context `~5.6.2`, Screens `~4.23.0`

## Estructura

- `App.js`: contenedor de navegación y registro de las rutas principales.
- `src/screens/Entry.js`: menú inicial con accesos a Demo Seguridad y Después del Despegue.
- `src/screens/Regular.js`: flujo de demostración de seguridad y controles de reproducción.
- `src/screens/Charter.js`: módulo Después del Despegue.
- `src/screens/Arribo.js`: captura de datos y anuncios de llegada/equipaje.
- `src/screens/Placeholder.js`: pantalla vacía de Contingencia.
- `src/constants/announcements.js`: textos de seguridad.
- `src/constants/annCharters.js`: textos posteriores al despegue.
- `src/constants/annArribo.js`: textos de arribo.
- `src/utils/speech.js`: división y reproducción de textos largos.
- `src/utils/styles.js`: estilos compartidos.
- `assets/icon.png`: icono principal de la aplicación; contiene el megáfono.

## Navegación y módulos

La ruta inicial es `Entry`. Desde el menú se puede abrir `DemoSeguridad` o `Charters`. `App.js` también registra `Arribo` y `Contingencia`, pero Arribo no tiene un botón en el menú inicial y Contingencia solo muestra una pantalla vacía.

### Demo Seguridad

El formulario de seguridad recoge número de vuelo, destino, puerta y la hora local (`HH:mm`). Valida que vuelo, destino y puerta estén informados antes de navegar. Los valores se pasan por parámetros de navegación.

El flujo de anuncios se divide en tres pantallas:

- Demo Seguridad: anuncios 1 y 2, con modo de reproducción de demostración.
- Demo Seguridad 2: anuncios 3 a 6.
- Demo Seguridad 3: anuncios 7 a 10.

El primer grupo incluye secuencias automáticas para dos variantes de demostración, Cabina Libre y Cabina Oscura. La pantalla permite reproducir por idioma, detener el audio y avanzar entre grupos.

### Después del Despegue

El módulo utiliza cuatro anuncios (1-4) sobre uso de dispositivos, cinturones, cruce de la Cordillera y declaración SAG. `Charter.js` contiene un formulario de datos de vuelo, pero el navegador interno actualmente inicia directamente en la pantalla de anuncios; revisar esta navegación si se espera capturar datos antes de reproducir.

### Arribo

El formulario recoge número de vuelo, procedencia, aeropuerto de arribo, número de cinta y hora local. Incluye dos anuncios: aviso de llegada y retiro de equipaje. La pantalla de anuncios muestra controles de idioma y navegación para finalizar o volver al formulario.

## Textos y soporte de idiomas

Cada módulo exporta `getFrase(lang, id, ...)` y `announcementTitles` desde su archivo de constantes. `getFrase` devuelve una cadena vacía si el idioma o el identificador no tienen texto.

- Seguridad: anuncios 1-10 en español e inglés. La tabla portuguesa está vacía.
- Después del Despegue: anuncios 1-4 en español e inglés. La tabla portuguesa está vacía.
- Arribo: dos anuncios en español, inglés y portugués.

Los anuncios de arribo usan la hora para elegir el saludo de mañana, tarde o noche. El umbral es `06:00` a `11:59`, `12:00` a `19:59` y el resto del día para la noche.

## Síntesis de voz

`src/utils/speech.js` exporta `splitSpeechText` y `speakTextInChunks`. El texto se normaliza a una sola línea; si excede `MAX_SPEECH_CHARS` (4000), se divide preferentemente en espacios y se reproduce secuencialmente. Los callbacks de límite de palabra ajustan el índice de caracteres al texto completo.

Las pantallas detienen la reproducción anterior antes de iniciar otro anuncio. Las voces configuradas para Android son `es-LA`, `en-US` y `pt-BR`. La pausa y reanudación nativas se usan cuando están disponibles; en Android, la reanudación continúa desde el índice de caracteres guardado.

## Identidad visual y configuración Expo

`app.json` configura `assets/icon.png` como icono general, imagen de inicio, favicon web e imagen foreground del icono adaptable de Android. El fondo adaptable Android es `#671e75`. El icono `icon.png` es cuadrado, de 1024 x 1024 píxeles, y contiene el megáfono sobre un círculo claro.

Los recursos Android nativos se generan con `npx expo prebuild --platform android --no-install`; las variantes del launcher se guardan como WebP bajo `android/app/src/main/res/mipmap-*` y la pantalla de inicio bajo `drawable-*`.

El catálogo de iconos iOS está en `ios/CrewCall/Images.xcassets`. En el estado actual, Expo no logra terminar el prebuild iOS porque el parser encuentra sintaxis inválida en `ios/CrewCall.xcodeproj/project.pbxproj`; reparar ese proyecto antes de regenerar o compilar iOS.

## Comandos y builds

Scripts de `package.json`:

- `npm start`: iniciar Expo.
- `npm run android`: prebuild/compilar Android localmente.
- `npm run ios`: ejecutar iOS localmente.
- `npm run web`: iniciar Expo para web.

Perfiles EAS definidos en `eas.json`:

- `development`: cliente de desarrollo, distribución interna.
- `preview`: APK Android y simulador iOS; distribución interna.
- `production`: perfil de producción sin opciones adicionales.

Build Android de preview: `eas build -p android --profile preview`. Los cambios en iconos nativos requieren un build nuevo; una actualización OTA no modifica el icono de la app instalada.

## Estado conocido

- Los anuncios de seguridad y charter todavía no tienen textos en portugués, aunque la interfaz ofrece el control PT.
- Arribo está registrado en navegación, pero no aparece como opción en el menú inicial.
- Contingencia aún no está implementado.
- No hay archivos de pruebas detectados en el repositorio.
- La compilación local Android necesita un SDK configurado. La sincronización iOS está bloqueada por la sintaxis del proyecto Xcode indicada arriba.
