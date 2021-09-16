import { Platform } from 'react-native';
import { typographyProps } from './theme.props';

const typography: typographyProps = {
  primary: Platform.select({ ios: 'Arial', android: 'sans-serif' }),
  primaryBold: Platform.select({ ios: 'Montserrat-Bold', android: 'Montserrat-Bold' }),
  primarySemibold: Platform.select({ ios: 'Montserrat-SemiBold', android: 'Montserrat-SemiBold' }),
  primaryMedium: Platform.select({ ios: 'Montserrat-Medium', android: 'Montserrat-Medium' }),
  primaryThin: Platform.select({ ios: 'Montserrat-Thin', android: 'Montserrat-Thin' }),
  primaryLight: Platform.select({ ios: 'Montserrat-Light', android: 'Montserrat-Light' }),
  button: Platform.select({ ios: 'Montserrat-SemiBold', android: 'Montserrat-SemiBold' }),
  secondary: Platform.select({ ios: 'Arial', android: 'sans-serif' }),
  code: Platform.select({ ios: 'Courier', android: 'monospace' }),
};

export { typography };
