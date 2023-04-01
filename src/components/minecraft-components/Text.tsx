import React from 'react';
import {Text as EText} from '@rneui/themed';
import {PropsWithChildren} from 'react';
import {StyleProp, TextStyle} from 'react-native';

type McTextProps = PropsWithChildren & {
  style?: StyleProp<TextStyle>;
};

export const Text = ({style, children}: McTextProps) => {
  return <EText style={style}>{children}</EText>;
};
