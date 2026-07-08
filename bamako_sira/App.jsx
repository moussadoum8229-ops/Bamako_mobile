import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import Acceuil from './src/Acceuil';

// Création du gestionnaire de navigation Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Configuration du navigateur avec l'écran d'accueil par défaut */}
      <Stack.Navigator initialRouteName="Acceuil">
        {/* Écran d'accueil principal */}
        <Stack.Screen 
          name="Acceuil" 
          component={Acceuil} 
          options={{ headerShown: false }} 
        />
        {/* Écran de connexion */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        {/* Écran d'inscription */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
