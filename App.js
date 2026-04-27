import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [flightNumber, setFlightNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [gate, setGate] = useState('');

  const handleNext = () => {
    if (!flightNumber.trim() || !destination.trim() || !gate.trim()) {
      Alert.alert('Faltan datos', 'Por favor ingrese número de vuelo, destino y puerta.');
      return;
    }
    navigation.navigate('PreEmbarque', { flightNumber: flightNumber.trim(), destination: destination.trim(), gate: gate.trim() });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>SkyAnuncios</Text>

        <Text style={styles.label}>Número de vuelo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese número de vuelo"
          onChangeText={setFlightNumber}
          type="number"
          value={flightNumber}
          autoCapitalize="characters"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Destino</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={destination}
            onValueChange={(itemValue) => setDestination(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Seleccionar destino" value="" />
            <Picker.Item label="ARICA" value="ARICA" />
            <Picker.Item label="ANTOFAGASTA" value="ANTOFAGASTA" />
            <Picker.Item label="CALAMA" value="CALAMA" />
            <Picker.Item label="IQUIQUE" value="IQUIQUE" />
            <Picker.Item label="COPIAPÓ" value="COPIAPÓ" />
            <Picker.Item label="LA SERENA" value="LA SERENA" />
            <Picker.Item label="SANTIAGO" value="SANTIAGO" />
            <Picker.Item label="CONCEPCIÓN" value="CONCEPCIÓN" />
            <Picker.Item label="TEMUCO" value="TEMUCO" />
            <Picker.Item label="VALDIVIA" value="VALDIVIA" />
            <Picker.Item label="OSORNO" value="OSORNO" />
            <Picker.Item label="PUERTO MONTT" value="PUERTO MONT" />
            <Picker.Item label="CASTRO" value="CASTRO" />
            <Picker.Item label="BALMACEDA" value="BALMACEDA" />
            <Picker.Item label="PUERTO NATALES" value="PUERTO NATALES" />
            <Picker.Item label="PUNTA ARENAS" value="PUNTA ARENAS" />
            <Picker.Item label="AEROPARQUE" value="AEROPARQUE" />
            <Picker.Item label="EZEIZA" value="EZEIZA" />
            <Picker.Item label="BARILOCHE" value="BARILOCHE" />
            <Picker.Item label="MENDOZA" value="MENDOZA" />
            <Picker.Item label="EL CALAFATE" value="EL CALAFATE" />
            <Picker.Item label="SALVADOR DE BAHIA" value="SALVADOR DE BAHIA" />
            <Picker.Item label="LIMA" value="LIMA" />
            <Picker.Item label="RIO DE JANEIRO" value="RIO DE JANEIRO" />
            <Picker.Item label="MONTEVIDEO" value="MONTEVIDEO" />
            <Picker.Item label="SAO PAULO" value="SAO PAULO" />
            <Picker.Item label="FLORIANOPOLIS" value="FLORIANOPOLIS" />
            <Picker.Item label="LIMA VIA AEROPARQUE" value="LIMA VIA AEROPARQUE" />
            <Picker.Item label="SALVADOR DE BAHIA VIA EZEIZA" value="SALVADOR DE BAHIA VIA EZEIZA" />
            <Picker.Item label="RIO DE JANEIRO VIA MONTEVIDEO" value="RIO DE JANEIRO VIA MONTEVIDEO" />
            <Picker.Item label="BALMACEDA VIA PUERTO MONTT" value="BALMACEDA VIA PUERTO MONT" />
            <Picker.Item label="PUERTO NATALES VIA PUERTO MONTT" value="PUERTO NATALES VIA PUERTO MONT" />
            <Picker.Item label="PUNTA ARENAS VIA PUERTO MONTT" value="PUNTA ARENAS VIA PUERTO MONT" />
            <Picker.Item label="CALAMA VIA LA SERENA" value="CALAMA VIA LA SERENA" />
            <Picker.Item label="IQUIQUE VIA LA SERENA" value="IQUIQUE VIA LA SERENA" />
            <Picker.Item label="ANTOFAGASTA VIA LA SERENA" value="ANTOFAGASTA VIA LA SERENA" />
          </Picker>
        </View>

        <Text style={styles.label}>Número de Puerta</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese número de puerta"
          onChangeText={setGate}
          value={gate}
          autoCapitalize="characters"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const anuncios_es = {
  1: (vuelo, destino, puerta) => `Buenos días, le damos la bienvenida a nuestros pasajeros SKY del vuelo ${vuelo} con destino a ${destino}. Nuestro equipo ya se encuentra en la puerta ${puerta} para atenderlos en lo que requieran antes de comenzar el embarque. Solicitamos a nuestros pasajeros permanecer sentados hasta que comience el embarque en los próximos 20 minutos`,
  2: (vuelo, destino, puerta) => `Su atención por favor, pasajeros del vuelo SKY ${vuelo} con destino a ${destino}. Invitamos a los pasajeros del grupo 3 y 4 a acercarse a la puerta ${puerta} únicamente para medición de equipaje. Les recordamos que tienen permitido solo un bolso de mano como mochila o cartera, el cual debe ser ubicado bajo el asiento delantero y todo equipaje adicional será cobrado en puerta y etiquetado a la bodega del avión sin excepciones. Por su atención muchas gracias.`,
  3: (vuelo, destino, puerta) => `Sky les da la bienvenida al embarque de nuestro vuelo SKY ${vuelo} con destino a la ciudad de ${destino} por la puerta de embarque ${puerta}. En este momento invitamos exclusivamente a aquellos pasajeros que requieran asistencia especial durante el vuelo y aquellos que estén viajando con niños de hasta 6 años.`,
  4: (vuelo, destino, puerta) => `Continuaremos nuestro embarque de vuelo SKY ${vuelo} con destino a ${destino}, invitamos a embarcar a los pasajeros preferentes del GRUPO NÚMERO 1, sky plus oro y platino, Tarifa max, max flex.`,
  5: (vuelo, destino, puerta) => `Continuando con nuestro proceso invitamos ahora a embarcar pasajeros del GRUPO NÚMERO 2. Si usted no se encuentra en este grupo por favor permanezca en su lugar hasta que este sea anunciado.`,
  6: (vuelo, destino, puerta) => `Continuando con nuestro embarque invitamos ahora pasajeros del GRUPO NÚMERO 3. Les recordamos que los equipajes de mano incluidos en su tarifa y que no cumpla con las medias en tamaño o cantidad de piezas incluidos en su tarifa deberán ser pagados como servicio adicional.`,
  7: (vuelo, destino, puerta) => `Finalizando los procesos de embarque invitamos ahora pasajeros del GRUPO NÚMERO 4.`,
  8: (vuelo, destino, puerta) => `Llamado final de embarque para pasajeros del vuelo SKY ${vuelo} con destino la ciudad de ${destino}, los invitamos a embarcar en este momento por la puerta número ${puerta}. avión listo a partir.`,
};

const anuncios_en = {
  1: (vuelo, destino, puerta) => `Good morning, we welcome our SKY passengers on flight ${vuelo} to ${destino}. Our team is already at gate ${puerta} to assist you with any needs before boarding begins. We ask our passengers to remain seated until boarding begins in the next 20 minutes.`,
  2: (vuelo, destino, puerta) => `Your attention please, passengers on SKY flight ${vuelo} to ${destino}. We invite passengers from groups 3 and 4 to approach gate ${puerta} only for baggage measurement. We remind you that you are allowed only one carry-on bag such as a backpack or purse, which must be placed under the seat in front of you, and any additional baggage will be charged at the gate and tagged to the aircraft hold without exceptions. Thank you for your attention.`,
  3: (vuelo, destino, puerta) => `Sky welcomes you to the boarding of our SKY flight ${vuelo} to the city of ${destino} through boarding gate ${puerta}. At this moment we invite exclusively those passengers who require special assistance during the flight and those traveling with children up to 6 years old.`,
  4: (vuelo, destino, puerta) => `We will continue our boarding of SKY flight ${vuelo} to ${destino}, we invite preferred passengers to board: GROUP NUMBER 1, sky plus gold and platinum, max fare, max flex.`,
  5: (vuelo, destino, puerta) => `Continuing with our process we now invite passengers from GROUP NUMBER 2 to board. If you are not in this group, please remain in your place until it is announced.`,
  6: (vuelo, destino, puerta) => `Continuing with our boarding we now invite passengers from GROUP NUMBER 3. We remind you that carry-on baggage included in your fare that does not comply with the size or number of pieces included in your fare will be charged as an additional service.`,
  7: (vuelo, destino, puerta) => `Finalizing the boarding processes we now invite passengers from GROUP NUMBER 4.`,
  8: (vuelo, destino, puerta) => `Final boarding call for passengers on SKY flight ${vuelo} to the city of ${destino}, we invite you to board at this moment through gate number ${puerta} aircraft ready to depart.`,
};

const anuncios_pt = {
  1: (vuelo, destino, puerta) => `Bom dia, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já está no portão ${puerta} para atendê-los no que precisarem antes do início do embarque. Solicitamos aos nossos passageiros que permaneçam sentados até que o embarque comece nos próximos 20 minutos.`,
  2: (vuelo, destino, puerta) => `Sua atenção por favor, passageiros do voo SKY ${vuelo} com destino a ${destino}. Convidamos os passageiros dos grupos 3 e 4 a se aproximarem do portão ${puerta} apenas para medição de bagagem. Lembramos que é permitido apenas uma bolsa de mão como mochila ou carteira, que deve ser colocada sob o assento dianteiro, e qualquer bagagem adicional será cobrada no portão e etiquetada para o porão do avião sem exceções. Obrigado pela atenção.`,
  3: (vuelo, destino, puerta) => `Sky dá as boas-vindas ao embarque do nosso voo SKY ${vuelo} com destino à cidade de ${destino} pelo portão de embarque ${puerta}. Neste momento convidamos exclusivamente aqueles passageiros que necessitam de assistência especial durante o voo e aqueles que estão viajando com crianças de até 6 anos.`,
  4: (vuelo, destino, puerta) => `Continuaremos nosso embarque do voo SKY ${vuelo} com destino a ${destino}, convidamos a embarcar os passageiros preferenciais do GRUPO NÚMERO 1, sky plus ouro e platina, Tarifa max, max flex.`,
  5: (vuelo, destino, puerta) => `Continuando com nosso processo convidamos agora a embarcar passageiros do GRUPO NÚMERO 2. Se você não estiver neste grupo, por favor permaneça em seu lugar até que seja anunciado.`,
  6: (vuelo, destino, puerta) => `Continuando com nosso embarque convidamos agora passageiros do GRUPO NÚMERO 3. Lembramos que as bagagens de mão incluídas em sua tarifa e que não cumpram com as medidas de tamanho ou quantidade de peças incluídas em sua tarifa deverão ser pagas como serviço adicional.`,
  7: (vuelo, destino, puerta) => `Finalizando os processos de embarque convidamos agora passageiros do GRUPO NÚMERO 4.`,
  8: (vuelo, destino, puerta) => `Chamado final de embarque para passageiros do voo SKY ${vuelo} com destino à cidade de ${destino}, convidamos a embarcar neste momento pelo portão número ${puerta} avião pronto para partir.`,
};

const announcementTitles = {
  1: 'Bienvenida',
  2: 'Revisión Bag',
  3: 'Inicio embarque',
  4: 'Grupo 1',
  5: 'Grupo 2',
  6: 'Grupo 3',
  7: 'Grupo 4',
  8: 'Llamado final',
};

function getFrase(lang, id, vuelo, destino, puerta) {
  const anuncios = { es: anuncios_es, en: anuncios_en, pt: anuncios_pt };
  if (!anuncios[lang] || !anuncios[lang][id]) return '';
  return anuncios[lang][id](vuelo, destino, puerta);
}

function speak(lang, id, vuelo, destino, puerta) {
  const text = getFrase(lang, id, vuelo, destino, puerta);
  if (!text) return;

  let voiceConfig = { pitch: 1.0, rate: 1.0 };
  
  if (lang === 'es') voiceConfig.language = 'es-MX';
  if (lang === 'en') voiceConfig.language = 'en-RU';
  if (lang === 'pt') voiceConfig.language = 'pt-BR';

  Speech.stop();
  Speech.speak(text, voiceConfig);
}

function AnnouncementScreenBase({ title, ids, route, navigation, nextRoute, buttonText = "Siguiente" }) {
  const { flightNumber, destination, gate } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Vuelo: {flightNumber} - Destino: {destination} - Puerta: {gate}</Text>

        {ids.map((id) => (
          <View key={id} style={styles.announcementBlock}>
            <Text style={styles.announcementTitle}>Anuncio {id}: {announcementTitles[id]}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, styles.buttonEs]} onPress={() => speak('es', id, flightNumber, destination, gate)}>
                <Text style={styles.buttonText}>ES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonEn]} onPress={() => speak('en', id, flightNumber, destination, gate)}>
                <Text style={styles.buttonText}>EN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonPt]} onPress={() => speak('pt', id, flightNumber, destination, gate)}>
                <Text style={styles.buttonText}>PT</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {nextRoute ? (
          <TouchableOpacity style={[styles.nextButton, styles.nextButtonSecondary]} onPress={() => navigation.navigate(nextRoute, { flightNumber, destination, gate })}>
            <Text style={styles.nextButtonText}>{buttonText}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function PreEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Pre embarque" ids={[1,2]} nextRoute="LlamadosEmbarque" />;
}

function LlamadosEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Llamados embarque" ids={[3,4,5,6]} nextRoute="FinalEmbarque" />;
}

function FinalEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Final embarque" ids={[7,8]} nextRoute="Home" buttonText="Finalizar" />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SkyAnuncios' }} />
        <Stack.Screen name="PreEmbarque" component={PreEmbarqueScreen} options={{ title: 'Pre embarque' }} />
        <Stack.Screen name="LlamadosEmbarque" component={LlamadosEmbarqueScreen} options={{ title: 'Llamados embarque' }} />
        <Stack.Screen name="FinalEmbarque" component={FinalEmbarqueScreen} options={{ title: 'Final embarque' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#671e75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1a3d7c',
    textAlign: 'center',
  },
  label: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#c4cddf',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafbff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#c4cddf',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fafbff',
    marginTop: 6,
    /* marginBottom: 15,
    height: 150,
    justifyContent: 'center',
    width: '100%',*/


  },
  picker: {
    height: 50,
    width: '100%',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#1a3d7c',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  nextButtonSecondary: {
    marginTop: 16,
    backgroundColor: '#2f5d99',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subTitle: {
    marginTop: 18,
    fontSize: 17,
    fontWeight: '600',
    color: '#1a3d7c',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEs: {
    backgroundColor: '#d63f49',
  },
  buttonEn: {
    backgroundColor: '#3f78d6',
  },
  buttonPt: {
    backgroundColor: '#3fbf6d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  announcementBlock: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f5e8ff',
    borderRadius: 10,
  },
  announcementTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    color: '#5d2f89',
  },
});
