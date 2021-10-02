import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './main-navigator';
// Root Navigation
import { navigationRef, routeNameRef } from '../utils/navigation';
import { ROOT_NAVIGATOR } from '@constants';

// state Change
const onStateChange = async () => {
  const previousRouteName = routeNameRef.current;
  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

  // Firebase Config

  // if (previousRouteName !== currentRouteName) {
  //   await analytics().logScreenView({
  //     screen_name: currentRouteName,
  //     screen_class: currentRouteName,
  //   });
  // }

  // Save the current route name for later comparison
  routeNameRef.current = currentRouteName;
};

const onReady = () => {
  routeNameRef.current = navigationRef.current.getCurrentRoute().name;
};

export const RootNavigator = (props) => (
  <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange} {...props}>
    <MainNavigator />
  </NavigationContainer>
);

RootNavigator.displayName = ROOT_NAVIGATOR;
