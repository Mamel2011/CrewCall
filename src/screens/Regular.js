import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../utils/styles';
import { getFrase, announcementTitles } from '../constants/announcements';

const destinations = [
  { label: "Seleccionar destino", value: "" },
  { label: "ARICA", value: "ARICA" },
  { label: "ANTOFAGASTA", value: "ANTOFAGASTA" },
  { label: "CALAMA", value: "CALAMA" },
  { label: "IQUIQUE", value: "ikique" },
  { label: "COPIAPÓ", value: "COPIAPÓ" },
  { label: "LA SERENA", value: "LA SERENA" },
  { label: "SANTIAGO", value: "SANTIAGO" },
  { label: "SANTIAGO VIA PUERTO MONTT", value: "SANTIAGO VIA PUERTO MONT" },
  { label: "SANTIAGO VIA LA SERENA", value: "SANTIAGO VIA LA SERENA" },
  { label: "CONCEPCIÓN", value: "CONCEPCIÓN" },
  { label: "TEMUCO", value: "TEMUCO" },
  { label: "VALDIVIA", value: "VALDIVIA" },
  { label: "OSORNO", value: "OSORNO" },
  { label: "PUERTO MONTT", value: "PUERTO MONT" },
  { label: "CASTRO", value: "CASTRO" },
  { label: "BALMACEDA", value: "BALMACEDA" },
  { label: "PUERTO NATALES", value: "PUERTO NATALES" },
  { label: "PUNTA ARENAS", value: "PUNTA ARENAS" },
  { label: "AEROPARQUE", value: "AEROPARQUE" },
  { label: "EZEIZA", value: "EZEIZA" },
  { label: "BARILOCHE", value: "bariloche" },
  { label: "MENDOZA", value: "MENDOZA" },
  { label: "EL CALAFATE", value: "EL CALAFATE" },
  { label: "SALVADOR DE BAHIA", value: "SALVADOR DE BAHIA" },
  { label: "LIMA", value: "LIMA" },
  { label: "RIO DE JANEIRO", value: "RIO DE JANEIRO" },
  { label: "MONTEVIDEO", value: "MONTEVIDEO" },
  { label: "SAO PAULO", value: "SAO PAULO" },
  { label: "BELLO HORIZONTE", value: "BELO HORIZONTE" },
  { label: "PORTO ALEGRE", value: "PORTO ALEGRE" },
  { label: "FLORIANOPOLIS", value: "florianopolis" },
  { label: "LIMA VIA AEROPARQUE", value: "LIMA VIA AEROPARQUE" },
  { label: "LIMA VIA MONTEVIDEO", value: "LIMA VIA MONTEVIDEO" },
  { label: "LIMA VIA EZEIZA", value: "LIMA VIA EZEIZA" },
  { label: "SALVADOR DE BAHIA VIA EZEIZA", value: "SALVADOR DE BAHIA VIA EZEIZA" },
  { label: "SALVADOR DE BAHIA VIA MONTEVIDEO", value: "SALVADOR DE BAHIA VIA MONTEVIDEO" },
  { label: "RIO DE JANEIRO VIA MONTEVIDEO", value: "RIO DE JANEIRO VIA MONTEVIDEO" },
  { label: "BALMACEDA VIA PUERTO MONTT", value: "BALMACEDA VIA PUERTO MONT" },
  { label: "PUERTO NATALES VIA PUERTO MONTT", value: "PUERTO NATALES VIA PUERTO MONT" },
  { label: "PUNTA ARENAS VIA PUERTO MONTT", value: "PUNTA ARENAS VIA PUERTO MONT" },
  { label: "CALAMA VIA LA SERENA", value: "CALAMA VIA LA SERENA" },
  { label: "IQUIQUE VIA LA SERENA", value: "IQUIQUE VIA LA SERENA" },
  { label: "ANTOFAGASTA VIA LA SERENA", value: "ANTOFAGASTA VIA LA SERENA" },
];

function AnnouncementScreenBase({ title, ids, route, navigation, nextRoute, buttonText = "Siguiente" }) {
  const { flightNumber = '', destination = '', gate = '', horario = '' } = route?.params || {};
  const [speakingState, setSpeakingState] = useState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 });

  const getLanguageLabel = (lang) => {
    if (lang === 'es') return 'ES';
    if (lang === 'en') return 'EN';
    return 'PT';
  };

  const supportsPauseResume = Platform.OS !== 'android' && typeof Speech.pause === 'function' && typeof Speech.resume === 'function';

  const speakSegment = (lang, id, text, startIndex) => {
    const voiceConfig = { pitch: 1.0, rate: 1.0 };
    /*. ***** IOS ****
    if (lang === 'es') voiceConfig.language = 'es-MX';
    if (lang === 'en') voiceConfig.language = 'en-RU';
    if (lang === 'pt') voiceConfig.language = 'pt-BR';
    /*. ***** ANDROID *****/
    if (lang === 'es') voiceConfig.language = 'es-LA';
    if (lang === 'en') voiceConfig.language = 'en-US';
    if (lang === 'pt') voiceConfig.language = 'pt-BR';
    const segment = text.slice(startIndex);
    Speech.speak(segment, {
      ...voiceConfig,
      onBoundary: ({ charIndex }) => {
        setSpeakingState((prevState) => {
          if (prevState.lang !== lang || prevState.id !== id) return prevState;
          return { ...prevState, charIndex: startIndex + charIndex };
        });
      },
      onDone: () => setSpeakingState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 }),
      onError: () => setSpeakingState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 }),
    });
  };

  const handleToggleSpeak = async (lang, id) => {
    const isActive = speakingState.active && speakingState.lang === lang && speakingState.id === id;
    const text = getFrase(lang, id, flightNumber, destination, gate, horario);
    if (!text) return;

    if (isActive) {
      if (speakingState.paused) {
        if (supportsPauseResume) {
          await Speech.resume();
          setSpeakingState((prevState) => ({ ...prevState, paused: false }));
        } else {
          speakSegment(lang, id, speakingState.text, speakingState.charIndex || 0);
          setSpeakingState((prevState) => ({ ...prevState, paused: false, active: true }));
        }
      } else {
        if (supportsPauseResume) {
          await Speech.pause();
          setSpeakingState((prevState) => ({ ...prevState, paused: true }));
        } else {
          Speech.stop();
          setSpeakingState((prevState) => ({ ...prevState, paused: true }));
        }
      }
      return;
    }

    Speech.stop();
    setSpeakingState({ lang, id, paused: false, active: true, text, charIndex: 0 });
    if (supportsPauseResume) {
      const voiceConfig = { pitch: 1.0, rate: 0.7 };
       /*. ***** IOS ****
    if (lang === 'es') voiceConfig.language = 'es-MX';
    if (lang === 'en') voiceConfig.language = 'en-RU';
    if (lang === 'pt') voiceConfig.language = 'pt-BR';
    /*. ***** ANDROID *****/
    if (lang === 'es') voiceConfig.language = 'es-LA';
    if (lang === 'en') voiceConfig.language = 'en-US';
    if (lang === 'pt') voiceConfig.language = 'pt-BR';
    
      Speech.speak(text, {
        ...voiceConfig,
        onBoundary: ({ charIndex }) => {
          setSpeakingState((prevState) => {
            if (prevState.lang !== lang || prevState.id !== id) return prevState;
            return { ...prevState, charIndex };
          });
        },
        onDone: () => setSpeakingState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 }),
        onError: () => setSpeakingState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 }),
      });
    } else {
      speakSegment(lang, id, text, 0);
    }
  };

  const handleStop = () => {
    Speech.stop();
    setSpeakingState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        {ids.map((id) => (
          <View key={id} style={styles.announcementBlock}>
            <Text style={styles.announcementTitle}>Anuncio {id}: {announcementTitles[id]}</Text>
            <View style={styles.buttonRow}>
              {['es', 'en'].map((lang) => {
                const active = speakingState.active && speakingState.lang === lang && speakingState.id === id;
                const label = getLanguageLabel(lang);
                const displayLabel = active ? `${label} ${speakingState.paused ? '(▶)' : '(||)'}` : label;
                const langStyle = lang === 'es' ? styles.buttonEs : styles.buttonEn;
                return (
                  <TouchableOpacity
                    key={lang}
                    style={[styles.button, langStyle, active ? styles.buttonActive : null]}
                    onPress={() => handleToggleSpeak(lang, id)}
                  >
                    <Text style={styles.buttonText}>{displayLabel}</Text>
                  </TouchableOpacity>
                );
              })}
              {/*
                Opción PT comentada intencionalmente — mantener para referencia.
                <TouchableOpacity
                  key={'pt'}
                  style={[styles.button, styles.buttonPt]}
                  onPress={() => handleToggleSpeak('pt', id)}
                >
                  <Text style={styles.buttonText}>{getLanguageLabel('pt')}</Text>
                </TouchableOpacity>
              */}
            </View>
            {/*
            <View style={styles.stopRow}>
              <TouchableOpacity style={[styles.button, styles.buttonStop]} onPress={handleStop}>
                <Text style={styles.buttonText}>STOP</Text>
              </TouchableOpacity>
            </View>
            */}
          </View>
        ))}
        {nextRoute ? (
          <TouchableOpacity 
            style={[styles.nextButton, styles.nextButtonSecondary]} 
            onPress={() => navigation.navigate(nextRoute, { flightNumber, destination, gate, horario })}
          >
            <Text style={styles.nextButtonText}>{buttonText}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function PreEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Demo Seguridad" ids={[1,2]} nextRoute="Demo Seguridad 2" />;
}

function LlamadosEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Demo Seguridad 2" ids={[3,4,5,6]} nextRoute="Demo Seguridad 3" />;
}

function FinalEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Demo Seguridad 3" ids={[7,8,9,10]} nextRoute="Demo Seguridad" buttonText="Finalizar" />;
}

function HeaderNavButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 12 }}>
      <Text style={{ color: '#007AFF', fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
}

function EntryHeaderButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    const parentNavigation = navigation?.getParent?.();
    if (parentNavigation && typeof parentNavigation.navigate === 'function') {
      parentNavigation.navigate('Entry');
    } else if (navigation && typeof navigation.navigate === 'function') {
      navigation.navigate('DemoSeguridadHome');
    }
  };

  return <HeaderNavButton label="Inicio" onPress={handlePress} />;
}

function PreEmbarqueHeaderButton() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route?.params || {};
  const handlePress = () => {
    const parentNavigation = navigation?.getParent?.();
    if (parentNavigation && typeof parentNavigation.navigate === 'function') {
      parentNavigation.navigate('Entry', params);
    } else if (navigation && typeof navigation.navigate === 'function') {
      navigation.navigate('Entry', params);
    }
  };

  return <HeaderNavButton label="Home" onPress={handlePress} />;
}

function LlamadosEmbarqueHeaderButton() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route?.params || {};
  return <HeaderNavButton label="Demo Seguridad" onPress={() => navigation.navigate('Demo Seguridad', params)} />;
}

function FinalEmbarqueHeaderButton() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route?.params || {};
  return <HeaderNavButton label="Demo Seguridad 2" onPress={() => navigation.navigate('Demo Seguridad 2', params)} />;
}

export function DemoSeguridadNavigation() {
  const Stack = require('@react-navigation/stack').createStackNavigator();
  
  return (
    <Stack.Navigator initialRouteName="Demo Seguridad">
      <Stack.Screen
        name="Demo Seguridad"
        component={PreEmbarqueScreen}
        options={{
          title: 'Demo Seguridad',
          headerLeft: () => <PreEmbarqueHeaderButton />,
        }}
      />
      <Stack.Screen
        name="Demo Seguridad 2"
        component={LlamadosEmbarqueScreen}
        options={{
          title: 'Demo Seguridad 2',
          headerLeft: () => <LlamadosEmbarqueHeaderButton />,
        }}
      />
      <Stack.Screen
        name="Demo Seguridad 3"
        component={FinalEmbarqueScreen}
        options={{
          title: 'Demo Seguridad 3',
          headerLeft: () => <FinalEmbarqueHeaderButton />,
        }}
      />
    </Stack.Navigator>
  );
}
