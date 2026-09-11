# CrewCall - Documentación Técnica

## Resumen del proyecto

CrewCall es una aplicación móvil Expo diseñada para generar y reproducir anuncios de embarque en tres idiomas (español, inglés y portugués). El proyecto usa React Native con navegación de pila y control de audio a través de `expo-speech`.

## Tecnología principal

- `expo` 55.0.10-canary
- `react-native` 0.83.4
- `react` 19.2.0
- `expo-speech` 55.0.10-canary
- `@react-navigation/native` 7.2.2
- `@react-navigation/stack` 7.8.9
- `@react-native-picker/picker` 2.11.4
- `expo-status-bar` 55.0.5-canary
- `react-native-safe-area-context` ~5.6.2
- `react-native-screens` ~4.23.0

## Estructura del proyecto

El proyecto tiene una única entrada principal en `App.js`.

### Componentes clave

- `HomeScreen`: pantalla principal donde el usuario ingresa número de vuelo, destino y puerta.
- `AnnouncementScreenBase`: componente reutilizable que muestra botones de idioma para cada anuncio, el estado del vuelo y reproduce audio.
- `PreEmbarqueScreen`, `LlamadosEmbarqueScreen`, `FinalEmbarqueScreen`: pantallas de flujo que usan `AnnouncementScreenBase` con distintos conjuntos de anuncios.

## Flujo de navegación

1. `HomeScreen` captura:
   - `flightNumber`
   - `destination`
   - `gate`
   - `horario` calculado con la hora local actual en formato `HH:mm`
2. Cuando el usuario presiona `Siguiente`, se navega a `PreEmbarque` con parámetros.
3. `PreEmbarque` muestra anuncios 1 y 2.
4. `LlamadosEmbarque` muestra anuncios 3, 4, 5 y 6.
5. `FinalEmbarque` muestra anuncios 7 y 8.

## Lógica de anuncios

Las frases se definen en tres objetos:

- `anuncios_es`
- `anuncios_en`
- `anuncios_pt`

Cada objeto contiene anuncios numerados del 1 al 8.

### Anuncio 1

- El anuncio 1 de cada idioma requiere el valor `horario` además de `vuelo`, `destino` y `puerta`.
- La lógica selecciona:
  - `Buenos días` / `Good morning` / `Bom dia` para horas de `06:00` a `11:59`
  - `Buenas tardes` / `Good afternoon` / `Boa tarde` para horas de `12:00` a `19:59`
  - `Buenas noches` / `Good evening` / `Boa noite` para el resto.

### Anuncios 2-8

- Requieren únicamente `vuelo`, `destino` y `puerta`.
- Incluyen mensajes de verificación de equipaje, priorización de grupos y llamado final.

## Funciones de ayuda

### `getFrase(lang, id, vuelo, destino, puerta, horario)`

- Selecciona el objeto de idioma correspondiente.
- Si el anuncio tiene 4 parámetros, pasa `horario` primero.
- Si el anuncio tiene 3 parámetros, omite `horario`.

### `speak(lang, id, vuelo, destino, puerta, horario)`

- Construye el texto usando `getFrase`
- Configura `voiceConfig` según el idioma:
  - `es`: `es-MX`
  - `en`: `en-RU`
  - `pt`: `pt-BR`
- Reproduce el texto con `Speech.speak` y detiene cualquier reproducción previa con `Speech.stop()`.

## UI y estilos

- El estilo base usa un contenedor central con tarjeta blanca y fondo morado.
- El `HomeScreen` ahora incluye un footer fija en la parte inferior derecha de la pantalla.
- El footer usa:
  - `position: absolute`
  - `right: 0`
  - `bottom: 0`
  - fondo semitransparente `rgba(103, 30, 117, 0.85)`
  - texto blanco de `fontSize: 14`

## Dependencias y configuración

- `package.json` define scripts:
  - `npm start` → `expo start`
  - `npm run android` → `expo run:android`
  - `npm run ios` → `expo run:ios`
  - `npm run web` → `expo start --web`

## Consideraciones de desarrollo

- La aplicación actualmente no usa un archivo de configuración separada; toda la lógica está contenida en `App.js`.
- `horario` se calcula una sola vez en el `HomeScreen` y se transmite a las pantallas de anuncio.
- La navegación se implementa con `createStackNavigator`.

## Posibles mejoras futuras

- Separar lógica de anuncios y datos en archivos independientes.
- Agregar validación de destino y puerta más estricta.
- Manejar configuraciones de voz y ajustes de accesibilidad.
- Agregar pruebas unitarias para `getFrase` y el flujo de navegación.
- Extender los anuncios para incluir otros idiomas o variaciones dinámicas.

## Notas de despliegue

- El proyecto ya se ha usado con `eas build -p android --profile preview`.
- Para cargas a producción se recomienda revisar versiones estables de Expo en lugar de canary.
