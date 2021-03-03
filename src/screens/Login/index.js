import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/logo.png';
import rodape from '../../assets/images/ondaForte.png';

import { ContainerWrite, InputPrimary, ButtonPrimary } from '../../components';

import styles from './styles';

export default function Login() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('Welcome');
  }
  return (
    <>
      <ContainerWrite>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          <View style={styles.inputHeader}>
            <InputPrimary inputPlaceholder="Usuário" />
            <InputPrimary
              inputPlaceholder="Senha"
              secure
              custom={styles.input}
            />
            <Text style={styles.text}>Esqueceu a senha?</Text>
          </View>

          <ButtonPrimary
            text="Entrar"
            custom={styles.button}
            onPress={handleHome}
          />
          <Text style={styles.text}>Cadastre-se</Text>
        </View>
      </ContainerWrite>
      <Image source={rodape} style={styles.rodape} />
    </>
  );
}
