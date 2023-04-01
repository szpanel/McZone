import React from 'react';
import {Button as EButton} from '@rneui/themed';
import {StyleProp, ViewStyle} from 'react-native';

interface McButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = ({title, style, onPress}: McButtonProps) => {
  return <EButton onPress={onPress} title={title} buttonStyle={style} />;
};
