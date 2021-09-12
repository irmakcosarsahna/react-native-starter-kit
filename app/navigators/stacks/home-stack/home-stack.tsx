import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../screens';

export type PrimaryParamList = {
  homeScreen: undefined;
};

const Stack = createStackNavigator<PrimaryParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
