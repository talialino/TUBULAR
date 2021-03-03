import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import rodape from "../../assets/images/ondaFraca.png";

import { ContainerBlue, ButtonPrimary, ContainerWrite } from "../../components";

import styles from "./styles";

export default function Persona() {
  const navigation = useNavigation();

  function handleFisica() {
    navigation.navigate("PersonaFisica");
  }

  function handleJuridica() {
    navigation.navigate("Juridica");
  }

  return (
    <>
      <ContainerBlue>
        <View style={styles.header}>
          <Text style={styles.text}>OLÁ,</Text>
          <Text style={styles.text}>ESCOLHA COMO DESEJA SE CADASTRAR</Text>
        </View>
        <View style={styles.buttons}>
          <ButtonPrimary
            text="PESSOA FISICA"
            custom={styles.button}
            onPress={handleFisica}
          />
          <ButtonPrimary
            text="PESSOA JURIDICA"
            custom={styles.button}
            onPress={handleJuridica}
          />
        </View>
      </ContainerBlue>
      <Image source={rodape} style={styles.rodape} />
    </>
  );
}
