import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {isAndroid} from '../utils/platform';
import {PropsWithChildren} from 'react';

const KeyboardAvoidingViewContainer = ({children}: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isAndroid() ? 'height' : 'padding'}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingViewContainer;
