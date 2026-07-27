import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EntryScreen } from './src/screens/Entry';
import { RegularNavigation } from './src/screens/Regular';
import { PlaceholderScreen } from './src/screens/Placeholder';
import { CharterScreen } from './src/screens/Charter';
import { ArriboScreen } from './src/screens/Arribo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={EntryScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Regular" component={RegularNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Charters" component={CharterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contingencia" component={PlaceholderScreen} options={{ title: 'Contingencia' }} />
        <Stack.Screen name="Arribo" component={ArriboScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}