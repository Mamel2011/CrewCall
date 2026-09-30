import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../utils/styles';

export function EntryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Logo Sky.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.versionText}>CrewCall V1.1</Text>
      <View style={styles.card}>
        <Text style={styles.title}>CrewCall</Text>
        <Text style={styles.subTitle}>Seleccione una opción</Text>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('DemoSeguridad')}>
          <Text style={styles.menuButtonText}>Demo Seguridad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Charters')}>
          <Text style={styles.menuButtonText}>Después del Despegue</Text>
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
