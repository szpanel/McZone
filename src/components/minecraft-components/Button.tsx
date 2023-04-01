import React from 'react';
import {Button as EButton} from '@rneui/themed';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {ButtonProps} from '@rneui/base';

type McButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
} & Partial<ButtonProps>;

export const Button = ({title, style, onPress, ...rest}: McButtonProps) => {
  return (
    <EButton
      onPress={onPress}
      title={title}
      buttonStyle={[styles.buttonStyle, style]}
      titleStyle={styles.titleStyle}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: '#0006',
    shadowRadius: -2,
  },
  titleStyle: {
    fontSize: 18,
    textShadowColor: '#000A',
    shadowRadius: 2,
    fontFamily: 'minecraft',
    color: 'white',
    shadowColor: '#000A',
  },
});
