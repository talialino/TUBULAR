import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LoginScreen from '../screens/Login';
import PersonaScreen from '../screens/Persona';
import PersonaFisicaScreen from '../screens/PersonaFisica';
import PersonaJuridicaScreen from '../screens/PersonaJuridica';
import RegisterScreen from '../screens/Register';
import CapturaCo2Screen from '../screens/CapturaCo2';
import QualidadeAguaDadosScreen from '../screens/QualidadeAguaDados';
import QualidadeAguaScreen from '../screens/QualidadeAgua';
import QuantidadeAguaScreen from '../screens/QuantidadeAgua';

import {
  TabOneWelcome,
  TabTwoWelcome,
  TabThreeWelcome,
  TabFourWelcome,
} from '../components';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function WelcomeTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      backBehavior="none"
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: '#F8F8F8' },
        tabStyle: { backgroundColor: '#F8F8F8' },
        labelStyle: { backgroundColor: '#F8F8F8' },
      }}
    >
      <Tab.Screen name="WelcomeOne" component={TabOneWelcome} />
      <Tab.Screen name="WelcomeTwo" component={TabTwoWelcome} />
      <Tab.Screen name="WelcomeThree" component={TabThreeWelcome} />
      <Tab.Screen name="WelcomeFour" component={TabFourWelcome} />
      <Tab.Screen name="C02" component={CapturaCo2Screen} />
    </Tab.Navigator>
  );
}

export default function routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Persona" component={PersonaScreen} />
      <Stack.Screen name="PersonaFisica" component={PersonaFisicaScreen} />
      <Stack.Screen name="Juridica" component={PersonaJuridicaScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Welcome" component={WelcomeTabs} />
      <Stack.Screen name="QualidadeAgua" component={QualidadeAguaDadosScreen} />
      <Stack.Screen
        name="QualidadeAguaGrafico"
        component={QualidadeAguaScreen}
      />
      <Stack.Screen name="QuantidadeAgua" component={QuantidadeAguaScreen} />
    </Stack.Navigator>
  );
}
