import {AppThemeProvider} from '@theme/AppThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

const ProviderManager = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
};

export default ProviderManager;
