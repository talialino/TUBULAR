import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import rodape from '../../assets/images/ondaForte.png';

import { ContainerWrite, InputPrimary } from '../../components';

import styles from './styles';

export default function PersonaFisica() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('Register');
  }
  return (
    <>
      <ContainerWrite>
        <Text style={styles.title}>DADOS DO USUÁRIO</Text>
        <View style={styles.inputHeader}>
          <InputPrimary
            inputPlaceholder="Nome da empresa"
            custom={styles.input}
          />
          <InputPrimary inputPlaceholder="CNPJ" custom={styles.input} />
          <InputPrimary inputPlaceholder="Razão Social" custom={styles.input} />
          <InputPrimary inputPlaceholder="Endereço" custom={styles.input} />
          <InputPrimary inputPlaceholder="Telefone" custom={styles.input} />
        </View>
        <TouchableOpacity onPress={handleRegister}>
          <Icon
            size={36}
            name="arrow-forward"
            color="#1F9FA2"
            style={styles.button}
          />
        </TouchableOpacity>
      </ContainerWrite>
      <Image source={rodape} style={styles.rodape} />
    </>
  );
}
