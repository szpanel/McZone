import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import {PropsWithChildren} from 'react';
import {theme} from './themeOptions';

export const AppThemeProvider = ({children}: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
