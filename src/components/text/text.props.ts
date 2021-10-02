import { TextProps as TextProperties, TextStyle, ViewStyle } from 'react-native';
import { StyleKeyProps } from './style';
import React from 'react';

export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  error?: boolean;
  text?: string | any;
  color?: string;
  style?: TextStyle | TextStyle[];
  type?: StyleKeyProps;
  size?: number;
  lineHeight?: number;
  onPress?(): void;
  txtBtnStyle?: ViewStyle;
  align?: string;
}
