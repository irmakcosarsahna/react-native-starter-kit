import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from '../stacks';
import {color, colors} from '../../theme';

export type PrimaryParamList = {
  homeStack: undefined;
  menu1Stack: undefined;
  menu2Stack: undefined;
  menu3Stack: undefined;
  menu4Stack: undefined;
};

const BottomTab = createBottomTabNavigator<PrimaryParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="homeStack"
      // tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        options={{
          tabBarLabel: 'anasayfa',
          headerStyle: {
            backgroundColor: colors.default.background.primary,
          },
          headerTintColor: color.background,
          headerTitle: 'Ana Sayfa',
        }}
        name="homeStack"
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Menü 1',
        }}
        name="menu1Stack"
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Menü 2',
        }}
        name="menu2Stack"
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Menü 3',
        }}
        name="menu3Stack"
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Menu 4',
        }}
        name="menu4Stack"
        component={HomeStack}
      />
    </BottomTab.Navigator>
  );
}
