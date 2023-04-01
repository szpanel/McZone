import React from 'react';
import {Input as EInput} from '@rneui/themed';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface McInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
}

export const Input = ({label, style}: McInputProps) => {
  return (
    <EInput
      label={label}
      selectionColor="white"
      containerStyle={[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});
