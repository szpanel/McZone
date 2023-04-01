import {ImageBackground, StyleSheet, View} from 'react-native';
import {Button} from '@minecraft-components/Button';
import React from 'react';
// @ts-ignore
import dirtBackground from '@assets/backgrounds/dirt.png';
import {Input} from '@minecraft-components/Input';

const ExampleEntryScreen = () => {
  return (
    <ImageBackground style={styles.imageBackground} source={dirtBackground}>
      <View style={styles.container}>
        <Input label="Login" />
        <Input label="Password" />
        <Button title={'Log in'} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 16,
  },
});

export default ExampleEntryScreen;
