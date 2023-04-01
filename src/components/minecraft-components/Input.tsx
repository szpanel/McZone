import React, {useMemo, useState} from 'react';
import {Input as EInput} from '@rneui/themed';
import {StyleProp, StyleSheet, TextInputProps, ViewStyle} from 'react-native';

const DEFAULT_INPUT_BORDER_COLOR = '#AAAAAA';
const FOCUSED_INPUT_BORDER_COLOR = 'white';

type McInputProps = {
  label?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  onChangeText?: (text: string) => void;
} & Partial<TextInputProps>;

export const Input = (props: McInputProps) => {
  const {label, style, value, onChangeText, ...rest} = props;
  const [borderColor, setBorderColor] = useState<string>(
    DEFAULT_INPUT_BORDER_COLOR,
  );

  const borderColorStyles = useMemo(() => ({borderColor}), [borderColor]);

  const handleFocus = (isFocused: boolean) => {
    const newBorderColor = isFocused
      ? FOCUSED_INPUT_BORDER_COLOR
      : DEFAULT_INPUT_BORDER_COLOR;
    setBorderColor(newBorderColor);
  };

  return (
    <EInput
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      onChangeText={onChangeText}
      value={value}
      label={label}
      selectionColor="white"
      containerStyle={[styles.container, style, borderColorStyles]}
      inputStyle={borderColorStyles}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});
