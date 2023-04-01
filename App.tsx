import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppThemeProvider} from '@theme/AppThemeProvider';
import ExampleEntryScreen from './src/screens/ExampleEntryScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <ExampleEntryScreen />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
