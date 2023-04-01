import React from 'react';
import {Input as EInput} from '@rneui/themed';
import {StyleProp, StyleSheet, TextInputProps, ViewStyle} from 'react-native';

type McInputProps = {
  label?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  onChangeText?: (text: string) => void;
} & Partial<TextInputProps>;

export const Input = (props: McInputProps) => {
  const {label, style, value, onChangeText, ...rest} = props;
  return (
    <EInput
      onChangeText={onChangeText}
      value={value}
      label={label}
      selectionColor="white"
      containerStyle={[styles.container, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});
