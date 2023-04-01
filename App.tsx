import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppThemeProvider} from './src/theme/AppThemeProvider';
import {StyleSheet, View} from 'react-native';
import {Button} from '@minecraft-components/Button';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <View style={styles.container}>
          <Button title={'Button'} />
        </View>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default App;
