import React from 'react';
import { View, Image, Text } from 'react-native';
import { ContainerWrite } from '../../containers';

import logo from '../../../assets/images/fig2.png';

import styles from './styles';

export function TabTwoWelcome() {
  return (
    <>
      <ContainerWrite scrollEnabled={false}>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.textBody}>
            Analise graficamente a eficiência do sistema instalado em seu
            estabelecimento, desde a qualidade da água tratada até o impacto
            ambiental resultante.
          </Text>
        </View>
        <View style={styles.circules}>
          <View style={styles.circule0} />
          <View style={styles.circule1} />
          <View style={styles.circule2} />
          <View style={styles.circule3} />
        </View>
      </ContainerWrite>
    </>
  );
}
