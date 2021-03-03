import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import DropDownPicker from 'react-native-dropdown-picker';

import { AreaChart, Grid, PieChart } from 'react-native-svg-charts';
import { Circle, Path } from 'react-native-svg';

import { ContainerWrite } from '../../components';

import styles from './styles';

export default function QuantidadeAgua() {
  const [visible, setVisible] = useState(false);
  const [itemMes, setItemMes] = useState({ mes: 'Mês' });
  const [itemAno, setItemAno] = useState({ ano: 'Ano' });

  const data = new Date();
  const dia = data.getDate();
  // const mes = data.getMonth();
  const ano = data.getFullYear();

  const dataPie = [
    {
      key: 1,
      value: 30,
      svg: { fill: '#9BD47FE6' },
      arc: { outerRadius: '130%', cornerRadius: 10 },
      onPress: () => setVisible(!visible),
    },
    {
      key: 2,
      value: 70,
      svg: { fill: '#FFC8B6E6' },
    },
  ];

  const dataBar = [10, 20, 30, 40, 50];

  const Decorator = ({ x, y, data }) =>
    data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke="#9BD47F"
        fill="white"
      />
    ));

  const Line = ({ line }) => <Path d={line} stroke="#9BD47F" fill="none" />;

  return (
    <>
      <ContainerWrite scrollEnabled>
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

        <View style={styles.viewBox}>
          <DropDownPicker
            items={[
              {
                label: 'Mês',
                value: 'Mês',
                icon: () => (
                  <IconMaterial name="chevron-down" size={18} color="#900" />
                ),
                hidden: true,
              },
              {
                label: 'Mês',
                value: 'Mês',
                icon: () => (
                  <IconMaterial name="chevron-down" size={18} color="#900" />
                ),
              },
              {
                label: 'Ano',
                value: 'Ano',
                icon: () => (
                  <IconMaterial name="chevron-down" size={18} color="#900" />
                ),
              },
            ]}
            defaultValue={itemMes.mes}
            style={styles.boxList}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#Fd6', width: 70 }}
            onChangeItem={(item) =>
              setItemMes({
                mes: item.value,
              })
            }
          />

          <DropDownPicker
            items={[
              {
                label: 'Mês',
                value: 'Mês',
                icon: () => (
                  <IconMaterial name="chevron-down" size={18} color="#900" />
                ),
                hidden: true,
              },
              {
                label: 'Mês',
                value: 'Mês',
                icon: () => (
                  <IconMaterial name="chevron-down" size={18} color="#900" />
                ),
              },
              {
                label: 'Ano',
                value: 'Ano',
                icon: () => (
                  <IconMaterial name="chevron-down" size={18} color="#900" />
                ),
              },
            ]}
            defaultValue={itemAno.ano}
            style={styles.boxList}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#Fd6', width: 70 }}
            onChangeItem={(item) =>
              setItemAno({
                ano: item.value,
              })
            }
          />
        </View>

        <View style={styles.viewTopo} />

        <View style={styles.viewGraphycPie}>
          <PieChart
            style={styles.graphycPier}
            outerRadius="78%"
            innerRadius={10}
            data={dataPie}
          />
          {visible ? (
            <TouchableOpacity>
              <Text style={styles.titleGraphyc}>30%</Text>
            </TouchableOpacity>
          ) : null}

          <View style={styles.viewLegend1}>
            <Text style={styles.textLegendPie}>Eficiência da reutilização</Text>
          </View>
          <View style={styles.viewLegend2}>
            <Text style={styles.textLegendPie}>Capacidade total instalada</Text>
          </View>
        </View>

        <Text style={styles.textLegendBar}>
          Evolução na qualidade do módulo 360
        </Text>

        <View style={styles.viewGraphycBar}>
          <AreaChart
            style={styles.graphycBar}
            data={dataBar}
            svg={{ fill: '#9BD47F4D' }}
            contentInset={{ top: 50, bottom: 20, width: 200 }}
          >
            <Line />
            <Decorator />
          </AreaChart>
          <View style={styles.kits}>
            <Text style={styles.textKit}>Kit 5</Text>
            <Text style={styles.textKit}>Kit 4</Text>
            <Text style={styles.textKit}>Kit 3</Text>
            <Text style={styles.textKit}>Kit 2</Text>
            <Text style={styles.textKit}>Kit 1</Text>
          </View>

          <View style={styles.mouths}>
            <Text style={styles.textMouths}>Out</Text>
            <Text style={styles.textMouths}>Nov</Text>
            <Text style={styles.textMouths}>Dez</Text>
            <Text style={styles.textMouths}>Jan</Text>
            <Text style={styles.textMouths}>Fev</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Contatar novo módulo</Text>
            <IconMaterial
              name="chevron-right"
              size={25}
              color="#FFFFFF"
              style={styles.flowButton}
            />
          </TouchableOpacity>
        </View>
      </ContainerWrite>
    </>
  );
}
