import { TextProps as TextProperties, TextStyle, ViewStyle } from 'react-native';
import { TextPresets } from './text.presets';

export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  error?: boolean;
  text?: string | any;
  color?: string;
  style?: TextStyle | TextStyle[];
  type?: TextPresets;
  size?: number;
  lineHeight?: number;
  onPress?(): void;
  txtBtnStyle?: ViewStyle;
  align?: string;
}
