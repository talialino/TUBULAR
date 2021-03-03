import React from "react";
import { ScrollView, StatusBar } from "react-native";

import styles from "./styles";

export function ContainerBlue({
  scrollEnabled = true,
  colorBar = "#54CDD1",
  styleBar = "light-content",
  customStyle,
  children,
}) {
  return (
    <>
      <StatusBar backgroundColor={colorBar} barStyle={styleBar} />

      <ScrollView
        scrollEnabled={scrollEnabled}
        style={[customStyle, styles.Container]}
      >
        {children}
      </ScrollView>
    </>
  );
}
