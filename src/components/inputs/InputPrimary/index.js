import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export function InputPrimary({
  custom,
  correct,
  secure,
  capitalize,
  inputRef,
  type,
  keyType,
  inputPlaceholder,
  onSubmitEditing,
  onChangeText,
  TextColor = '#1F9FA2',
}) {
  return (
    <TextInput
      secureTextEntry={secure}
      ref={inputRef}
      autoCapitalize={capitalize}
      autoCorrect={correct}
      keyboardType={type}
      returnKeyType={keyType}
      placeholder={inputPlaceholder}
      placeholderTextColor={TextColor}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      style={[styles.input, custom]}
    />
  );
}
