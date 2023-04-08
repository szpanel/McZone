import React, {useCallback, useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Keyboard} from 'react-native';
import {Text} from '@rneui/themed';
// @ts-ignore
import logoImg from '@assets/icons/logo.png';

const DEFAULT_LOGO_SIZE = 170;
const REDUCED_LOGO_SIZE = 50;
const LOGO_SIZE_REDUCTION_TIME = 130;

interface LogoProps {
  logoSize?: number;
  reduceSizeWhenKeyboardOpened?: boolean;
}

export const Logo = ({
  logoSize = DEFAULT_LOGO_SIZE,
  reduceSizeWhenKeyboardOpened = false,
}: LogoProps) => {
  const imageSize = useRef(new Animated.Value(logoSize)).current;

  const keyboardWillShow = useCallback(() => {
    Animated.timing(imageSize, {
      duration: LOGO_SIZE_REDUCTION_TIME,
      toValue: REDUCED_LOGO_SIZE,
      useNativeDriver: false,
    }).start();
  }, [imageSize]);

  const keyboardWillHide = useCallback(() => {
    Animated.timing(imageSize, {
      duration: LOGO_SIZE_REDUCTION_TIME,
      toValue: DEFAULT_LOGO_SIZE,
      useNativeDriver: false,
    }).start();
  }, [imageSize]);

  useEffect(() => {
    if (reduceSizeWhenKeyboardOpened) {
      const subs = [
        Keyboard.addListener('keyboardDidShow', keyboardWillShow),
        Keyboard.addListener('keyboardDidHide', keyboardWillHide),
      ];
      return () => {
        subs.forEach(sub => sub.remove());
      };
    }
  }, [reduceSizeWhenKeyboardOpened, keyboardWillShow, keyboardWillHide]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logoImg}
        style={{width: imageSize, height: imageSize}}
      />
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
