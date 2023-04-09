import React from 'react';
import {RootStack} from './stacks';
import {HomeScreen, LoginScreen} from '../screens';
import {defaultStackScreenOptions} from './stackOptions';

const MainStack = () => {
  return (
    <RootStack.Navigator screenOptions={defaultStackScreenOptions}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default MainStack;
