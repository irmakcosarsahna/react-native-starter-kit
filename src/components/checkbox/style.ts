import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

const DIMENSIONS = {
  width: 16,
  height: 16,
};

export type stylesProps = {
  root: ViewStyle;
  outline: ViewStyle;
  fill: ViewStyle;
  container: ViewStyle;
  label: TextStyle;
  infoLabel: TextStyle;
  errorLabel: TextStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    root: {
      flexDirection: 'row',
      paddingVertical: theme.spacing[1],
      alignSelf: 'flex-start',
      justifyContent: 'center',
    },
    container: {
      ...DIMENSIONS,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 4,
    },
    outline: {
      borderColor: theme.color.border.primary,
    },
    fill: {
      borderColor: theme.color.icon.color,
      backgroundColor: theme.color.icon.color,
    },
    label: {
      paddingLeft: theme.spacing[2],
      fontSize: 14,
      color: theme.color.text.secondary,
    },
    infoLabel: {
      color: theme.color.error,
      fontSize: 9,
      marginTop: theme.spacing[2],
    },
    errorLabel: {
      color: theme.color.error,
    },
  });

export { createStyles };
