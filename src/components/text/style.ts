import { themeProps } from '@theme';
import { StyleSheet, TextStyle } from 'react-native';

export type stylesProps = {
  default: TextStyle;
  bold: TextStyle;
  medium: TextStyle;
  thin: TextStyle;
  semiBold: TextStyle;
  light: TextStyle;
  header: TextStyle;
  fieldLabel: TextStyle;
  secondary: TextStyle;
};

export type StyleKeyProps = keyof stylesProps;

const createStyles = (theme: themeProps) => {
  const BASE: TextStyle = {
    fontFamily: theme.typography.primary,
    color: theme.color.text.primary,
    fontSize: 15,
  };

  return StyleSheet.create<stylesProps>({
    default: BASE,
    bold: { ...BASE, fontFamily: theme.typography.primaryBold },
    medium: { ...BASE, fontFamily: theme.typography.primaryMedium },
    thin: { ...BASE, fontFamily: theme.typography.primaryThin },
    semiBold: { ...BASE, fontFamily: theme.typography.primarySemibold },
    light: { ...BASE, fontFamily: theme.typography.primaryLight },
    header: { ...BASE, fontSize: 24, fontWeight: 'bold' },
    fieldLabel: { ...BASE, fontSize: 13, color: theme.color.alert.error },
    secondary: { ...BASE, fontSize: 9, color: theme.color.alert.error },
  });
};

export { createStyles };
