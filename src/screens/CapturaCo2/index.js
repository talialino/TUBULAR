import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { ProgressCircle } from 'react-native-svg-charts';

import topo from '../../assets/images/ondaTopo.png';

import { ContainerWrite } from '../../components';

import styles from './styles';

export default function CapturaCo2() {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();

  const navigation = useNavigation(); 

  function handleQualidadeAgua() {
    navigation.navigate('QualidadeAgua');
  }
  function handleQuantidadeAgua() {
    navigation.navigate('QuantidadeAgua');
  }

  return (
    <>
      <ContainerWrite colorBar="#3EE0E84D">
        <View style={styles.container}>
          <View style={styles.viewTopo}>
            <Image source={topo} style={styles.imageToo} />
            <View style={styles.data}>
              <Text style={styles.day}>{dia} | </Text>
              <View style={styles.dayYars}>
                <Text style={styles.mouth}>Fev</Text>
                <Text style={styles.yars}>{ano}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.iconOut}>
              <IconSimple name="logout" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.viewGraphyc}>
            <ProgressCircle
              style={styles.graphyc}
              progress={0.8}
              progressColor="#FEB197"
            >
              <Text style={styles.titleGraphyc}>80%</Text>
            </ProgressCircle>
            <View style={styles.viewLegend}>
              <IconMaterial name="chart-donut" size={20} />
              <Text style={styles.textLegend}>Sequestro de gás carbono</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={handleQuantidadeAgua}
              style={styles.button}
            >
              <Text style={styles.textButton}>Quantidade de água tratada</Text>
              <IconMaterial
                name="chevron-right"
                size={25}
                color="#FFFFFF"
                style={styles.flowButton}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleQualidadeAgua}
              style={styles.button}
            >
              <Text style={styles.textButton}>Qualidade da água tratada</Text>
              <IconMaterial
                name="chevron-right"
                size={25}
                color="#FFFFFF"
                style={styles.flowButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ContainerWrite>
    </>
  );
}
