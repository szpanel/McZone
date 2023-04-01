import React from 'react';
import {MainStackNavigator} from './stacks';
import LoginScreen from '../screens/login/LoginScreen';

export const MAIN_STACK_SCREEN_NAMES = {
  LOGIN: 'Login',
};

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <MainStackNavigator.Screen
        name={MAIN_STACK_SCREEN_NAMES.LOGIN}
        component={LoginScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
