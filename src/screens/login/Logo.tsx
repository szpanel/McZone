import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image, Text} from '@rneui/themed';
// @ts-ignore
import logoImg from '@assets/icons/logo.png';

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />
      <Text style={styles.title}>HELLO !</Text>
      <Text style={styles.description}>
        {'Log in to access server and your account data.\nYour account data should be provided by server admin.'.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    height: 170,
    width: 170,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 10,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 16,
  },
});
