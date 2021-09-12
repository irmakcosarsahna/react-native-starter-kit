import {TextStyle} from 'react-native';
import {colors, typography} from '../../theme';

const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: colors.default.alert.error,
  fontSize: 15,
};

export const presets = {
  default: BASE,
  bold: { ...BASE, fontFamily: typography.primaryBold } as TextStyle,
  medium: { ...BASE, fontFamily: typography.primaryMedium } as TextStyle,
  thin: { ...BASE, fontFamily: typography.primaryThin } as TextStyle,
  semiBold: { ...BASE, fontFamily: typography.primarySemibold } as TextStyle,
  light: { ...BASE, fontFamily: typography.primaryLight } as TextStyle,
  header: { ...BASE, fontSize: 24, fontWeight: 'bold' } as TextStyle,
  fieldLabel: { ...BASE, fontSize: 13, color: colors.default.alert.error } as TextStyle,
  secondary: { ...BASE, fontSize: 9, color: colors.default.alert.error } as TextStyle,
};

export type TextPresets = keyof typeof presets;
