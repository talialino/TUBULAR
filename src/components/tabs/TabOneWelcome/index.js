import React from 'react';
import { View, Image, Text } from 'react-native';
import { ContainerWrite } from '../../containers';

import logo from '../../../assets/images/fig1.png';

import styles from './styles';

export function TabOneWelcome() {
  return (
    <>
      <ContainerWrite scrollEnabled={false}>
        <View style={styles.container}>
          <Text style={styles.title}>BEM VINDA, TALIA!</Text>
          <Image source={logo} style={styles.image} />
          <Text style={styles.textBody}>
            Este espaço foi criado especialmente para você. Aqui você terá
            acesso a todo o nosso serviço, bem na palma da sua mão!
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
