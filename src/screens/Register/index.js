import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import rodape from '../../assets/images/ondaFraca.png';

import { ContainerBlue, ButtonPrimary, InputPrimary } from '../../components';

import styles from './styles';

export default function Register() {
  const navigation = useNavigation();

  function handleWelcome() {
    navigation.navigate('Welcome');
  }

  return (
    <>
      <ContainerBlue>
        <Text style={styles.title}>DADOS DE ACESSO</Text>
        <View style={styles.inputHeader}>
          <InputPrimary
            inputPlaceholder="Nome"
            custom={styles.input}
            TextColor="#FFFFFF"
          />
          <InputPrimary
            inputPlaceholder="Email"
            TextColor="#FFFFFF"
            custom={styles.input}
          />
          <InputPrimary
            secure
            inputPlaceholder="Senha"
            TextColor="#FFFFFF"
            custom={styles.input}
          />
          <InputPrimary
            secure
            inputPlaceholder="Repetir senha"
            TextColor="#FFFFFF"
            custom={styles.input}
          />
        </View>
        <ButtonPrimary
          text="CADASTRO"
          custom={styles.button}
          onPress={handleWelcome}
        />
      </ContainerBlue>
      <Image source={rodape} style={styles.rodape} />
    </>
  );
}
