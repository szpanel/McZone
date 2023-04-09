import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabParamList, RootStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const HomeBottomTabNavigatorStack =
  createBottomTabNavigator<HomeTabParamList>();
