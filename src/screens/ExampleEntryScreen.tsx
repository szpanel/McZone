import {ImageBackground, StyleSheet, View} from 'react-native';
import {Button} from '@minecraft-components/Button';
import React from 'react';
// @ts-ignore
import dirtBackground from '@assets/backgrounds/dirt.png';

const ExampleEntryScreen = () => {
  return (
    <ImageBackground style={styles.imageBackground} source={dirtBackground}>
      <View style={styles.container}>
        <Button title={'Button'} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    margin: 16,
  },
});

export default ExampleEntryScreen;
