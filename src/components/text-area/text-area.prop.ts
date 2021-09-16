import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface TextAreaProps extends TextInputProps {
  label?: string;
  labelTx?: string;
  value?: string;
  labelStyle?: TextStyle;
  txOptions?: I18n.TranslateOptions;
  focusInputStyle?: ViewStyle;
  style?: ViewStyle;
  onChangeText?(): void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  error?: string;
}
