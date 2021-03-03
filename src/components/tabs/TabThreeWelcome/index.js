import React from 'react';
import { View, Image, Text } from 'react-native';
import { ContainerWrite } from '../../containers';

import logo from '../../../assets/images/fig3.png';

import styles from './styles';

export function TabThreeWelcome() {
  return (
    <>
      <ContainerWrite scrollEnabled={false}>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.textBody}>
            Veja também dicas para a reutilização das nossas algas e o impacto
            ecológico que elas podem proporcionar.
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
