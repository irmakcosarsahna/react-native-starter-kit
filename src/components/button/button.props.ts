import { PressableProps, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

export interface ButtonProps extends PressableProps {
  text?: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  textColor?: string;
  disable?: boolean;
}
