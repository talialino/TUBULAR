import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import auth from "./Authenticated";

import unauth from "./Unauthenticated";

const Stack = createStackNavigator();

export default function routes() {
  return (
    // <Stack.Navigator headerMode="none">
    //   {signed ? (
    //     <Stack.Screen name="comLogin" component={auth} />
    //   ) : (
    //     <Stack.Screen name="semLogin" component={Unauth} />
    //   )}
    // </Stack.Navigator>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="semLogin" component={unauth} />
      <Stack.Screen name="comLogin" component={auth} />
    </Stack.Navigator>
  );
}
