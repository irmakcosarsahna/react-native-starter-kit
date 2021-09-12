import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
};

export interface TextFieldProps extends TextInputProps {
  placeholder?: string;
  label?: string;
  error?: string;
  style?: ViewStyle | ViewStyle[];
  inputContainerStyle?: ViewStyle | ViewStyle[];
  leftIcon?: React.ReactNode;
  inputStyle?: TextStyle | TextStyle[];
  labelStyle?: TextStyle | TextStyle[];
  errorInputStyle?: ViewStyle | ViewStyle[];
  errorLabelStyle?: TextStyle | TextStyle[];
  infoLabelStyle?: TextStyle | TextStyle[];
  focusInputStyle?: ViewStyle | ViewStyle[];
  preset?: keyof typeof PRESETS;
  forwardedRef?: any;
  isFocusStyle?: boolean;
  isValid?: boolean;
  children?: React.ReactNode;
}
