import React from 'react';
import {HomeBottomTabNavigatorStack} from '../../navigation/stacks';
import {ChatScreen} from '../index';
import {defaultStackScreenOptions} from '../../navigation/stackOptions';
import {useUnreadMessages} from '../../hooks/useUnreadMessages';

const HomeScreen = () => {
  const unreadMessages = useUnreadMessages();

  return (
    <HomeBottomTabNavigatorStack.Navigator
      screenOptions={defaultStackScreenOptions}>
      <HomeBottomTabNavigatorStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarBadge: unreadMessages !== 0 ? unreadMessages : undefined,
        }}
      />
    </HomeBottomTabNavigatorStack.Navigator>
  );
};

export default HomeScreen;
