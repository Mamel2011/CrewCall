import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../utils/styles';

export function PlaceholderScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
