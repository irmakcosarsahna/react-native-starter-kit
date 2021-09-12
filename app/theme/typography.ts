import {Platform} from 'react-native';

export const typography = {
  primary: Platform.select({ ios: 'Arial', android: 'sans-serif' }),
  primaryBold: Platform.select({ ios: 'Montserrat-Bold', android: 'Montserrat-Bold' }),
  primarySemibold: Platform.select({ ios: 'Montserrat-SemiBold', android: 'Montserrat-SemiBold' }),
  primaryMedium: Platform.select({ ios: 'Montserrat-Medium', android: 'Montserrat-Medium' }),
  button: Platform.select({ ios: 'Montserrat-SemiBold', android: 'Montserrat-SemiBold' }),
  primaryThin: Platform.select({ ios: 'Montserrat-Thin', android: 'Montserrat-Thin' }),
  primaryLight: Platform.select({ ios: 'Montserrat-Light', android: 'Montserrat-Light' }),
  secondary: Platform.select({ ios: 'Arial', android: 'sans-serif' }),
  code: Platform.select({ ios: 'Courier', android: 'monospace' }),
};
