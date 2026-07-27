import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../utils/styles';

export function EntryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.versionText}>SkyAnuncios V1.4</Text>
      <View style={styles.card}>
        <Text style={styles.title}>SkyAnuncios</Text>
        <Text style={styles.subTitle}>Seleccione una opción</Text>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Regular')}>
          <Text style={styles.menuButtonText}>Regular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Charters')}>
          <Text style={styles.menuButtonText}>Charter</Text>
        </TouchableOpacity>
        {/*}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Contingencia')}>
          <Text style={styles.menuButtonText}>Contingencia</Text>
        </TouchableOpacity>
        */}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Arribo')}>
          <Text style={styles.menuButtonText}>Arribo</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>Gerencia de Aeropuertos</Text>
        <Text style={styles.footerText}>B. Montecinos - C.Campos</Text>
      {/*
      <View style={styles.footer}>
        <Text style={styles.footerText}>Gerencia de Aeropuertos</Text>
        <Text style={styles.footerText}>B. Montecinos - C.Campos</Text>
      </View>
      */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
