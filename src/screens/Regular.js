import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../utils/styles';
import { speakTextInChunks } from '../utils/speech';
import { getFrase, announcementTitles } from '../constants/announcements';

const DEMO_SEGURIDAD_SEQUENCE = [
  { lang: 'es', id: 1 },
  { lang: 'en', id: 1 },
  { lang: 'es', id: 2 },
  { lang: 'en', id: 2 },
  { lang: 'es', id: 3 },
  { lang: 'en', id: 3 },
  { lang: 'es', id: 5 },
  { lang: 'en', id: 5 },
  { lang: 'es', id: 6 },
  { lang: 'es', id: 7 },
  { lang: 'en', id: 7 },
];

const DEMO_SEGURIDAD_SEQUENCE_2 = [
  { lang: 'es', id: 1 },
  { lang: 'en', id: 1 },
  { lang: 'es', id: 2 },
  { lang: 'en', id: 2 },
  { lang: 'es', id: 4 },
  { lang: 'en', id: 4 },
  { lang: 'es', id: 5 },
  { lang: 'en', id: 5 },
  { lang: 'es', id: 6 },
  { lang: 'es', id: 7 },
  { lang: 'en', id: 7 },
];

const CABINA_LIBRE_SEQUENCE = [
  { lang: 'es', id: 8 },
  { lang: 'en', id: 8 },
];

const CABINA_OSCURA_SEQUENCE = [
  { lang: 'es', id: 10 },
  { lang: 'en', id: 10 },
];

const getDemoSequence = (sequenceKey) => {
  if (sequenceKey === 'demo2') return DEMO_SEGURIDAD_SEQUENCE_2;
  if (sequenceKey === 'cabinaLibre') return CABINA_LIBRE_SEQUENCE;
  if (sequenceKey === 'cabinaOscura') return CABINA_OSCURA_SEQUENCE;
  return DEMO_SEGURIDAD_SEQUENCE;
};

function AnnouncementScreenBase({ title, ids, route, navigation, nextRoute, buttonText = "Siguiente", singleDemoMode = false }) {
  const { flightNumber = '', destination = '', gate = '', horario = '' } = route?.params || {};
  const [speakingState, setSpeakingState] = useState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 });
  const [demoSequenceState, setDemoSequenceState] = useState({ active: false, paused: false, index: 0, charIndex: 0, sequenceKey: null });
  const demoSequenceTimeoutRef = useRef(null);
  const demoSequenceRef = useRef(demoSequenceState);

  React.useEffect(() => {
    demoSequenceRef.current = demoSequenceState;
  }, [demoSequenceState]);

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
    speakTextInChunks({
      text: segment,
      voiceConfig,
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
    
      speakTextInChunks({
        text,
        voiceConfig,
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

  const stopDemoSequence = (sequenceKey = demoSequenceState.sequenceKey) => {
    if (demoSequenceTimeoutRef.current) {
      clearTimeout(demoSequenceTimeoutRef.current);
      demoSequenceTimeoutRef.current = null;
    }
    Speech.stop();
    const nextState = { active: false, paused: false, index: 0, charIndex: 0, sequenceKey: null };
    demoSequenceRef.current = nextState;
    setDemoSequenceState(nextState);
    setSpeakingState({ lang: null, id: null, paused: false, active: false, text: '', charIndex: 0 });
  };

  const playDemoSequence = (sequenceKey = 'demo1', startIndex = 0, resumeFromChar = 0) => {
    if (demoSequenceTimeoutRef.current) {
      clearTimeout(demoSequenceTimeoutRef.current);
      demoSequenceTimeoutRef.current = null;
    }

    const sequence = getDemoSequence(sequenceKey);
    let index = startIndex;
    let resumeChar = resumeFromChar;

    const playNext = () => {
      if (index >= sequence.length) {
        stopDemoSequence(sequenceKey);
        return;
      }

      const item = sequence[index];
      const { lang, id } = item;
      const text = getFrase(lang, id, flightNumber, destination, gate, horario);

      if (!text) {
        index += 1;
        resumeChar = 0;
        playNext();
        return;
      }

      const textToSpeak = resumeChar > 0 ? text.slice(resumeChar) : text;
      const voiceConfig = { pitch: 1.0, rate: 1.0 };
      if (lang === 'es') voiceConfig.language = 'es-LA';
      if (lang === 'en') voiceConfig.language = 'en-US';

      setDemoSequenceState({ active: true, paused: false, index, charIndex: resumeChar, sequenceKey });
      setSpeakingState({ lang, id, paused: false, active: true, text, charIndex: resumeChar });

      speakTextInChunks({
        text: textToSpeak,
        voiceConfig,
        onBoundary: ({ charIndex }) => {
          const absoluteCharIndex = resumeChar + charIndex;
          setDemoSequenceState((prevState) => ({ ...prevState, charIndex: absoluteCharIndex }));
          setSpeakingState((prevState) => {
            if (prevState.lang !== lang || prevState.id !== id) return prevState;
            return { ...prevState, charIndex: absoluteCharIndex };
          });
        },
        onDone: () => {
          const currentState = demoSequenceRef.current;
          if (!currentState.active || currentState.sequenceKey !== sequenceKey) return;
          demoSequenceTimeoutRef.current = setTimeout(() => {
            index += 1;
            resumeChar = 0;
            playNext();
          }, 2000);
        },
        onError: () => {
          const currentState = demoSequenceRef.current;
          if (!currentState.active || currentState.sequenceKey !== sequenceKey) return;
          demoSequenceTimeoutRef.current = setTimeout(() => {
            index += 1;
            resumeChar = 0;
            playNext();
          }, 2000);
        },
      });
    };

    playNext();
  };

  const toggleDemoPlayback = async (sequenceKey = 'demo1') => {
    if (!demoSequenceState.active || demoSequenceState.sequenceKey !== sequenceKey) {
      playDemoSequence(sequenceKey, 0, 0);
      return;
    }

    if (demoSequenceState.paused) {
      if (supportsPauseResume) {
        await Speech.resume();
      } else {
        playDemoSequence(sequenceKey, demoSequenceState.index, demoSequenceState.charIndex || 0);
        return;
      }
      setDemoSequenceState((prevState) => ({ ...prevState, paused: false }));
      setSpeakingState((prevState) => ({ ...prevState, paused: false }));
      return;
    }

    if (supportsPauseResume) {
      await Speech.pause();
      setDemoSequenceState((prevState) => ({ ...prevState, paused: true, charIndex: speakingState.charIndex || prevState.charIndex }));
      setSpeakingState((prevState) => ({ ...prevState, paused: true, charIndex: prevState.charIndex }));
      return;
    }

    Speech.stop();
    setDemoSequenceState((prevState) => ({ ...prevState, paused: true, charIndex: speakingState.charIndex || prevState.charIndex }));
    setSpeakingState((prevState) => ({ ...prevState, paused: true, charIndex: prevState.charIndex }));
  };

  if (singleDemoMode) {
    const demoLabel = (sequenceKey) => {
      const active = demoSequenceState.active && demoSequenceState.sequenceKey === sequenceKey;
      const labelMap = {
        demo1: 'Demo A320',
        demo2: 'Demo A321',
        cabinaLibre: 'Cabina Libre',
        cabinaOscura: 'Cabina Oscura',
      };
      const label = labelMap[sequenceKey] || 'Demo';
      return active ? `${label} ${demoSequenceState.paused ? '(▶)' : '(||)'}` : label;
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ gap: 12 }}>
            <TouchableOpacity
              style={[styles.nextButton, styles.nextButtonSecondary, demoSequenceState.active && demoSequenceState.sequenceKey === 'demo1' ? styles.buttonActive : null]}
              onPress={() => toggleDemoPlayback('demo1')}
            >
              <Text style={styles.nextButtonText}>{demoLabel('demo1')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton, styles.nextButtonSecondary, demoSequenceState.active && demoSequenceState.sequenceKey === 'demo2' ? styles.buttonActive : null]}
              onPress={() => toggleDemoPlayback('demo2')}
            >
              <Text style={styles.nextButtonText}>{demoLabel('demo2')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton, styles.nextButtonSecondary, demoSequenceState.active && demoSequenceState.sequenceKey === 'cabinaLibre' ? styles.buttonActive : null]}
              onPress={() => toggleDemoPlayback('cabinaLibre')}
            >
              <Text style={styles.nextButtonText}>{demoLabel('cabinaLibre')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton, styles.nextButtonSecondary, demoSequenceState.active && demoSequenceState.sequenceKey === 'cabinaOscura' ? styles.buttonActive : null]}
              onPress={() => toggleDemoPlayback('cabinaOscura')}
            >
              <Text style={styles.nextButtonText}>{demoLabel('cabinaOscura')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

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
        <TouchableOpacity
          style={[styles.nextButton, styles.nextButtonSecondary]}
          onPress={() => {
            Speech.stop();
            stopDemoSequence();
            navigation.navigate('Entry');
          }}
        >
          <Text style={styles.nextButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function PreEmbarqueScreen(props) {
  return <AnnouncementScreenBase {...props} title="Demo Seguridad" ids={[1,2]} nextRoute={null} singleDemoMode />;
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
