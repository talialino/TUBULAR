import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PersonaScreen from "../screens/Persona";

const Stack = createStackNavigator();

export default function routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Persona" component={PersonaScreen} />
    </Stack.Navigator>
  );
}
