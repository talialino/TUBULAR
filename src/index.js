import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";

export default function src() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
