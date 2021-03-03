import React from 'react';
import { View, Image, Text } from 'react-native';
import { ContainerWrite } from '../../containers';

import logo from '../../../assets/images/fig4.png';

import styles from './styles';

export function TabFourWelcome() {
  return (
    <>
      <ContainerWrite scrollEnabled={false}>
        <View style={styles.container}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.textBody}>
            Nós da Tubular nos orgulhamos em ter sua parceiria para tornar do
            futuro um lugar mais sustentável e melhor! :)
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
