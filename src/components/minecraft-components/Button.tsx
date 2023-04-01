import React from 'react';
import {Button as EButton} from '@rneui/themed';
import {StyleProp, ViewStyle} from 'react-native';

interface McButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({title, style}: McButtonProps) => {
  return <EButton title={title} buttonStyle={style} />;
};
