import React from 'react';
import {PropsWithChildren} from 'react';
// @ts-ignore
import dirtBackground from '@assets/backgrounds/dirt.png';
import {ImageBackground, StyleSheet} from 'react-native';
import KeyboardAvoidingViewContainer from './KeyboardAvoidingViewContainer';

type Props = PropsWithChildren & {
  keyboardAvoidingView?: boolean;
};

const MinecraftContainer = ({
  children,
  keyboardAvoidingView = false,
}: Props) => {
  return (
    <ImageBackground style={styles.imageBackground} source={dirtBackground}>
      {keyboardAvoidingView ? (
        <KeyboardAvoidingViewContainer>
          {children}
        </KeyboardAvoidingViewContainer>
      ) : (
        children
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});

export default MinecraftContainer;
