import { PressableProps, TextStyle, ViewStyle } from 'react-native';
import { ButtonPresetNames } from './button.presets';

export interface ButtonProps extends PressableProps {
  text?: string;

  style?: ViewStyle | ViewStyle[];

  textStyle?: TextStyle | TextStyle[];

  preset?: ButtonPresetNames;

  children?: React.ReactNode;

  textColor?: string;

  disable?: boolean;
}
