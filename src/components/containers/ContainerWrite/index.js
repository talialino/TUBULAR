import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import styles from './styles';

export function ContainerWrite({
  scrollEnabled = true,
  colorBar = '#F8F8F8',
  styleBar = 'dark-content',
  customStyle,
  children,
}) {
  return (
    <>
      <StatusBar backgroundColor={colorBar} barStyle={styleBar} />

      <ScrollView
        scrollEnabled={scrollEnabled}
        style={[customStyle, styles.Container]}
      >
        {children}
      </ScrollView>
    </>
  );
}
