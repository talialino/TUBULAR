import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export function ButtonPrimary({ text, custom, onPress }) {
  return (
    <TouchableOpacity style={[styles.Container, custom]} onPress={onPress}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}
