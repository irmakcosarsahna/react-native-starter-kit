import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ScreenProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  subtitle?: string;
  scroll?: boolean;
  innerStyle?: StyleProp<ViewStyle>;
  badge?: number;
  bottomTab?: boolean;
  subtitleColor?: string;
  subtitleContainerStyle?: StyleProp<ViewStyle>;
  scrollViewStyle?: StyleProp<ViewStyle>;
}
