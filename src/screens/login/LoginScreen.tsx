import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import {Button} from '@minecraft-components/Button';
import React from 'react';
// @ts-ignore
import dirtBackground from '@assets/backgrounds/dirt.png';
import {Input} from '@minecraft-components/Input';
import {useLoginHandler} from './useLoginHandler';
import {Text} from '@minecraft-components/Text';
import {Logo} from './Logo';
import {isAndroid} from '../../utils/platform';

const LoginScreen = () => {
  const {login, password, logIn, actions, loginError} = useLoginHandler();
  const behaviour = isAndroid() ? 'height' : 'padding';
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={behaviour}>
      <ImageBackground style={styles.imageBackground} source={dirtBackground}>
        <View style={styles.container}>
          <Logo reduceSizeWhenKeyboardOpened />
          <Input
            label="Login"
            value={login}
            onChangeText={actions.onLoginChange}
          />
          <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={actions.onPasswordChange}
          />
          {loginError ? (
            <View style={styles.loginErrorContainer}>
              <Text style={styles.loginErrorText}>{loginError}</Text>
            </View>
          ) : null}
          <Button disabled={!!loginError} title={'Log in'} onPress={logIn} />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 16,
  },
  loginErrorContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  loginErrorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default LoginScreen;
