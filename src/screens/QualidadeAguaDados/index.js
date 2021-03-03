import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import topo from '../../assets/images/ondaTopo.png';

import { ContainerWrite, InputPrimary, ButtonPrimary } from '../../components';

import styles from './styles';

export default function QualidadeAguaDados() {
  const navigation = useNavigation();

  function handleQualidadeAgua() {
    navigation.navigate('QualidadeAguaGrafico');
  }

  return (
    <>
      <ContainerWrite colorBar="#3EE0E84D">
        <View style={styles.container}>
          <View style={styles.viewTopo}>
            <Image source={topo} style={styles.imageToo} />
          </View>
          <TouchableOpacity style={styles.iconOut}>
            <Icon name="arrow-left" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.viewBottom}>
            <View style={styles.viewMiddle}>
              <Text style={styles.text}>Dados capturados</Text>
            </View>
            <View style={styles.inputAlign}>
              <InputPrimary inputPlaceholder="Turbidez" custom={styles.input} />
              <InputPrimary inputPlaceholder="PH" custom={styles.input} />
              <InputPrimary
                inputPlaceholder="Oxigênio dissolvido"
                custom={styles.input}
              />
              <InputPrimary inputPlaceholder="DBO" custom={styles.input} />
              <InputPrimary inputPlaceholder="Carbono" custom={styles.input} />
            </View>

            <ButtonPrimary
              custom={styles.button}
              text="GERAR"
              onPress={handleQualidadeAgua}
            />
          </View>
        </View>
      </ContainerWrite>
    </>
  );
}
