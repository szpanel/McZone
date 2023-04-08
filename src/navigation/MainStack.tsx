import React from 'react';
import {RootStack} from './stacks';
import LoginScreen from '../screens/login/LoginScreen';

const MainStack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default MainStack;
