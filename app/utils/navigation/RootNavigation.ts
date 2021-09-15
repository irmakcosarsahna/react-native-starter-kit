import * as React from 'react';
import { CommonActions,
  StackActions } from '@react-navigation/native';

// Router Name Ref
const routeNameRef = React.createRef();
// Navigation rEF
const navigationRef = React.createRef();

// Navigate
const navigate = (
  name, params = {}) => {
  navigationRef.current?.navigate(name, params);
};

// Replace
const replace = (name, params = {}) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

// Reset
const reset = (name) => {
  navigationRef.current?.dispatch(CommonActions.reset(name));
};

export { replace, reset, navigate, navigationRef, routeNameRef };
