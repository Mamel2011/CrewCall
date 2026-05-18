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
  const horario = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  

  const handleNext = () => {
    if (!flightNumber.trim() || !destination.trim() || !gate.trim()) {
      Alert.alert('Faltan datos', 'Por favor ingrese número de vuelo, destino y puerta.');
      return;
    }
    navigation.navigate('PreEmbarque', { flightNumber: flightNumber.trim(), destination: destination.trim(), gate: gate.trim(), horario: horario });
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
          keyboardType="numeric" />

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
            <Picker.Item label="LIMA VIA EZEIZA" value="LIMA VIA EZEIZA" />
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
          keyboardType="default" />

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Gerencia de Aeropuertos</Text>
        <Text style={styles.footerText}>B. Montecinos - C.Campos</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const anuncios_es = {
  1: (horario, vuelo, destino, puerta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Buenos días, les damos la bienvenida a nuestros pasajeros SKY del vuelo ${vuelo} con destino a ${destino}. Nuestro equipo ya se encuentra disponible en la puerta ${puerta} para apoyarlos y atender cualquier requerimiento antes del inicio del embarque. Les solicitamos amablemente permanecer sentados hasta el comienzo del proceso, el cual está programado para iniciar en aproximadamente 20 minutos. Muchas gracias por su atención y preferencia.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Buenas tardes, les damos la bienvenida a nuestros pasajeros SKY del vuelo ${vuelo} con destino a ${destino}. Nuestro equipo ya se encuentra disponible en la puerta ${puerta} para apoyarlos y atender cualquier requerimiento antes del inicio del embarque. Les solicitamos amablemente permanecer sentados hasta el comienzo del proceso, el cual está programado para iniciar en aproximadamente 20 minutos. Muchas gracias por su atención y preferencia.`;
      }
     else {
      return `Buenas noches, les damos la bienvenida a nuestros pasajeros SKY del vuelo ${vuelo} con destino a ${destino}. Nuestro equipo ya se encuentra disponible en la puerta ${puerta} para apoyarlos y atender cualquier requerimiento antes del inicio del embarque. Les solicitamos amablemente permanecer sentados hasta el comienzo del proceso, el cual está programado para iniciar en aproximadamente 20 minutos. Muchas gracias por su atención y preferencia.`;
    }
  },
  2: (vuelo, destino, puerta) => `Su atención por favor, pasajeros del vuelo SKY ${vuelo} con destino a ${destino}. Invitamos a los pasajeros de los grupos 3 y 4 a acercarse a la puerta ${puerta} únicamente para la medición de equipaje. Les recordamos que su tarifa incluye un bolso de mano, como mochila o cartera, el cual debe ubicarse bajo el asiento delantero durante el vuelo. Cualquier equipaje adicional o que exceda las medidas permitidas deberá ser etiquetado y enviado a la bodega del avión, aplicándose el cobro correspondiente en puerta. Agradecemos su comprensión y colaboración para mantener un proceso de embarque ágil y ordenado. Muchas gracias por su atención.`,
  3: (vuelo, destino, puerta) => `SKY les da la bienvenida al embarque de nuestro vuelo SKY ${vuelo} con destino a la ciudad de ${destino} por la puerta de embarque ${puerta}. En este momento, invitamos exclusivamente a acercarse a aquellos pasajeros que requieran asistencia especial durante el vuelo, así como a quienes viajan con niños de hasta 6 años de edad. Nuestro equipo se encuentra disponible para apoyarlos y acompañarlos durante el proceso de embarque. Muchas gracias por su atención y preferencia.`,
  4: (vuelo, destino, puerta) => `Continuaremos nuestro embarque de vuelo SKY ${vuelo} con destino a ${destino} por la puerta número ${puerta}, invitamos a embarcar a los pasajeros preferentes del GRUPO NÚMERO 1, sky plus oro y platino, Tarifa max, max flex.`,
  5: (vuelo, destino, puerta) => `Continuando con el embarque del vuelo SKY ${vuelo} con destino a ${destino} por puerta ${puerta}, invitamos ahora a embarcar pasajeros del GRUPO NÚMERO 2. Si usted no se encuentra en este grupo por favor permanezca en su lugar hasta que este sea anunciado.`,
  6: (vuelo, destino, puerta) => `Continuando el embarque del vuelo SKY ${vuelo} con destino a ${destino} por la puerta número ${puerta}, invitamos ahora pasajeros del GRUPO NÚMERO 3. Les recordamos que los equipajes de mano incluidos en su tarifa y que no cumpla con las medidas en tamaño o cantidad de piezas incluidos en su tarifa deberán ser pagados como servicio adicional.`,
  7: (vuelo, destino, puerta) => `Finalizando los procesos de embarque del vuelo SKY ${vuelo} con destino a ${destino} invitamos ahora pasajeros del GRUPO NÚMERO 4 por puerta número ${puerta}.`,
  8: (vuelo, destino, puerta) => `Llamado final de embarque para pasajeros del vuelo SKY ${vuelo} con destino la ciudad de ${destino}, los invitamos a embarcar en este momento por la puerta número ${puerta}. Avión listo a partir.`,
};

const anuncios_en = {
  1: (horario, vuelo, destino, puerta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Good morning, we would like to welcome our SKY passengers traveling on flight ${vuelo} to ${destino}. Our team is already available at gate ${puerta} to assist you with anything you may need before boarding begins. We kindly ask passengers to remain seated until the boarding process starts, which is scheduled to begin in approximately 20 minutes. Thank you very much for your attention and preference.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Good afternoon, we would like to welcome our SKY passengers traveling on flight ${vuelo} to ${destino}. Our team is already available at gate ${puerta} to assist you with anything you may need before boarding begins. We kindly ask passengers to remain seated until the boarding process starts, which is scheduled to begin in approximately 20 minutes. Thank you very much for your attention and preference.`;
    } else {
      return `Good evening, we would like to welcome our SKY passengers traveling on flight ${vuelo} to ${destino}. Our team is already available at gate ${puerta} to assist you with anything you may need before boarding begins. We kindly ask passengers to remain seated until the boarding process starts, which is scheduled to begin in approximately 20 minutes. Thank you very much for your attention and preference.`;
    }
  },
  2: (vuelo, destino, puerta) => `May we have your attention please, passengers traveling on SKY flight ${vuelo} to ${destino}. We invite passengers from groups 3 and 4 to approach gate ${puerta} only for baggage size verification. We kindly remind you that your fare includes one personal item, such as a backpack or handbag, which must be placed under the seat in front of you during the flight. Any additional baggage or baggage exceeding the permitted dimensions must be tagged and checked into the aircraft hold, and the corresponding fee will be charged at the gate. We appreciate your understanding and cooperation in helping us maintain an orderly and efficient boarding process. Thank you very much for your attention.`,
  3: (vuelo, destino, puerta) => `SKY welcomes you to the boarding of flight SKY ${vuelo} to the city of ${destino} at boarding gate ${puerta}. At this time, we would like to invite only those passengers requiring special assistance during the flight, as well as passengers traveling with children up to 6 years old. Our team is available to assist and support you throughout the boarding process. Thank you very much for your attention and preference.`,
  4: (vuelo, destino, puerta) => `We will continue boarding SKY flight ${vuelo} to ${destino} through gate number ${puerta}. At this time, we invite our priority passengers from Group 1, sky plus gold and platinum, max fare, max flex.`,
  5: (vuelo, destino, puerta) => `Continuing with the boarding process for SKY flight ${vuelo} to ${destino} through gate number ${puerta}. we now invite passengers in Group Number 2 to board. If you do not belong to this group, we kindly ask you to remain seated until your group is announced.`,
  6: (vuelo, destino, puerta) => `Continuing with the boarding process for SKY flight ${vuelo} to ${destino} through gate number ${puerta}. we now invite passengers in Group Number 3 to board. We remind you that the carry-on baggage included in your fare must comply with the permitted size and number of items. Any baggage exceeding these conditions must be paid for as an additional service before boarding.`,
  7: (vuelo, destino, puerta) => `Finalizing the boarding process for SKY flight ${vuelo} to ${destino} through gate number ${puerta}. we now invite passengers in Group Number 4 to board. Thank you for your attention and cooperation.`,
  8: (vuelo, destino, puerta) => `Final boarding call for passengers traveling on SKY flight ${vuelo} to the city of ${destino}. We invite our last remaining passengers to board the aircraft at this time through gate ${puerta}. Aircraft ready for departure.`,
};

const anuncios_pt = {
  1: (horario, vuelo, destino, puerta) => {
    if(horario >= "06:00" && horario < "12:00") {
      return `Bom dia, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já se encontra disponível no portão ${puerta} para apoiá-los e atender qualquer necessidade antes do início do embarque. Pedimos gentilmente que permaneçam sentados até o início do processo, que está programado para começar em aproximadamente 20 minutos. Muito obrigado pela atenção e preferência.`;
    } else if(horario >= "12:00" && horario < "20:00") {
      return `Boa tarde, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já se encontra disponível no portão ${puerta} para apoiá-los e atender qualquer necessidade antes do início do embarque. Pedimos gentilmente que permaneçam sentados até o início do processo, que está programado para começar em aproximadamente 20 minutos. Muito obrigado pela atenção e preferência.`;
    } else {
      return `Boa noite, damos as boas-vindas aos nossos passageiros SKY do voo ${vuelo} com destino a ${destino}. Nossa equipe já se encontra disponível no portão ${puerta} para apoiá-los e atender qualquer necessidade antes do início do embarque. Pedimos gentilmente que permaneçam sentados até o início do processo, que está programado para começar em aproximadamente 20 minutos. Muito obrigado pela atenção e preferência.`;
    }
  },
  2: (vuelo, destino, puerta) => `Atenção, por favor, passageiros do voo SKY ${vuelo} com destino a ${destino}. Convidamos os passageiros dos grupos 3 e 4 a se dirigirem ao portão ${puerta} exclusivamente para a medição de bagagem. Lembramos que sua tarifa inclui um item pessoal, como mochila ou bolsa, que deverá ser acomodado sob o assento da frente durante o voo. Qualquer bagagem adicional ou que exceda as medidas permitidas deverá ser etiquetada e enviada ao porão da aeronave, sendo aplicada a cobrança correspondente no portão de embarque. Agradecemos sua compreensão e colaboração para mantermos um processo de embarque ágil e organizado. Muito obrigado pela atenção.`,
  3: (vuelo, destino, puerta) => `A SKY dá as boas-vindas ao embarque do nosso voo SKY ${vuelo} com destino à cidade de ${destino} pelo portão de embarque ${puerta}. Neste momento, convidamos exclusivamente os passageiros que necessitam de assistência especial durante o voo, assim como aqueles que viajam com crianças de até 6 anos de idade. Nossa equipe está disponível para apoiá-los e acompanhá-los durante o processo de embarque. Muito obrigado pela atenção e preferência.`,
  4: (vuelo, destino, puerta) => `Continuaremos nosso embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}. Neste momento, convidamos para embarque os nossos passageiros preferenciais do Grupo 1, sky plus ouro e platina, Tarifa max, max flex.`,
  5: (vuelo, destino, puerta) => `Dando continuidade ao embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}. Convidamos agora os passageiros do Grupo Número 2 para embarcar. Se você não pertence a este grupo, solicitamos gentilmente que permaneça em seu lugar até que seu grupo seja anunciado.`,
  6: (vuelo, destino, puerta) => `Dando continuidade ao embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}. Convidamos agora os passageiros do Grupo Número 3 para embarcar. Lembramos que a bagagem de mão incluída em sua tarifa deve cumprir as medidas e a quantidade de peças permitidas. Toda bagagem que exceder essas condições deverá ser paga como serviço adicional antes do embarque.`,
  7: (vuelo, destino, puerta) => `Finalizando o processo de embarque do voo SKY ${vuelo} com destino a ${destino} pelo portão número ${puerta}, convidamos agora os passageiros do Grupo Número 4 para embarcar. Muito obrigado pela sua atenção e colaboração.`,
  8: (vuelo, destino, puerta) => `Última chamada de embarque para os passageiros do voo SKY ${vuelo} com destino à cidade de ${destino}. Convidamos os nossos últimos passageiros para embarcar neste momento pelo portão número ${puerta}. Aeronave pronta para partida.`,
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

function getFrase(lang, id, vuelo, destino, puerta, horario) {
  const anuncios = { es: anuncios_es, en: anuncios_en, pt: anuncios_pt };
  if (!anuncios[lang] || !anuncios[lang][id]) return '';
  const anuncio = anuncios[lang][id];
  if (anuncio.length === 4) {
    return anuncio(horario, vuelo, destino, puerta);
  }
  return anuncio(vuelo, destino, puerta);
}

function speak(lang, id, vuelo, destino, puerta, horario) {
  const text = getFrase(lang, id, vuelo, destino, puerta, horario);
  if (!text) return;

  let voiceConfig = { pitch: 1.0, rate: 1.0 };
  
  if (lang === 'es') voiceConfig.language = 'es-MX';
  if (lang === 'en') voiceConfig.language = 'en-RU';
  if (lang === 'pt') voiceConfig.language = 'pt-BR';

  Speech.stop();
  Speech.speak(text, voiceConfig);
}

function AnnouncementScreenBase({ title, ids, route, navigation, nextRoute, buttonText = "Siguiente" }) {
  const { flightNumber, destination, gate, horario } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Vuelo: {flightNumber} - Destino: {destination} - Puerta: {gate}</Text>

        {ids.map((id) => (
          <View key={id} style={styles.announcementBlock}>
            <Text style={styles.announcementTitle}>Anuncio {id}: {announcementTitles[id]}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, styles.buttonEs]} onPress={() => speak('es', id, flightNumber, destination, gate, horario)}>
                <Text style={styles.buttonText}>ES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonEn]} onPress={() => speak('en', id, flightNumber, destination, gate, horario)}>
                <Text style={styles.buttonText}>EN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonPt]} onPress={() => speak('pt', id, flightNumber, destination, gate, horario)}>
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
    //color: '#1a3d7c',
    color: '#671e75',
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
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: 'rgba(103, 30, 117, 0.85)',
    //alignItems: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
