import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

import {
  StackedBarChart,
  StackedAreaChart,
  Grid,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import { ContainerWrite } from '../../components';

import styles from './styles';

export default function QualidadeAgua() {
  const data = new Date();
  const dia = data.getDate();
  // const mes = data.getMonth();
  const ano = data.getFullYear();

  const dataBar = [
    {
      month: new Date(2015, 0, 1),
      apples: 5040,
      bananas: 1920,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 4000,
      bananas: 2950,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 4700,
      bananas: 2250,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 6900,
      bananas: 100,
    },
    {
      month: new Date(2015, 4, 1),
      apples: 5320,
      bananas: 1700,
    },
  ];

  const colorBar = ['#69CD64c7', '#9BD47Fc7'];
  const keyBar = ['apples', 'bananas'];

  const dataOndas = [
    {
      month: new Date(2015, 0, 1),
      apples: 5040,
      bananas: 1920,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 4000,
      bananas: 2950,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 4700,
      bananas: 2250,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 6900,
      bananas: 100,
    },
    {
      month: new Date(2015, 4, 1),
      apples: 5320,
      bananas: 1700,
    },
  ];

  const colorOndas = ['#69CD64c7', '#9BD47Fc7'];
  const keyOndas = ['apples', 'bananas'];

  return (
    <>
      <ContainerWrite scrollEnabled>
        <View style={styles.container}>
          <View style={styles.data}>
            <Text style={styles.day}>{dia} | </Text>
            <View style={styles.dayYars}>
              <Text style={styles.mouth}>Fev</Text>
              <Text style={styles.yars}>{ano}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconOut}>
            <IconSimple name="arrow-left" size={25} color="#2DB3BACC" />
          </TouchableOpacity>

          <View style={styles.viewTopo} />

          <View style={styles.viewGraphycPie}>
            <StackedBarChart
              style={styles.graphycPier}
              horizontal
              keys={keyBar}
              colors={colorBar}
              data={dataBar}
              showGrid={false}
              contentInset={{ top: 30, bottom: 10 }}
            />
            <View style={styles.mouths}>
              <Text style={styles.textMouths}>Turbidez</Text>
              <Text style={styles.textMouths}>PHP</Text>
              <Text style={styles.textMouths}>Oxigênio</Text>
              <Text style={styles.textMouths}>DBO</Text>
              <Text style={styles.textMouths}>Carbono</Text>
            </View>

            <View style={styles.viewLegend1}>
              <Text style={styles.textLegendPie}>
                Qualidade normativa da água
              </Text>
            </View>
            <View style={styles.viewLegend2}>
              <Text style={styles.textLegendPie}>
                Qualidade de água tratada
              </Text>
            </View>
          </View>

          <View style={styles.viewGraphycBar}>
            <StackedAreaChart
              style={styles.graphycBar}
              data={dataOndas}
              keys={keyOndas}
              colors={colorOndas}
              curve={shape.curveNatural}
            >
              <Grid />
            </StackedAreaChart>
            <Text style={styles.textKit}>75%</Text>
            <Text style={styles.textKit1}>62%</Text>
            <Text style={styles.textKit2}>74%</Text>
            <Text style={styles.textKit3}>99%</Text>
            <Text style={styles.textKit4}>81%</Text>
          </View>
        </View>
      </ContainerWrite>
    </>
  );
}
