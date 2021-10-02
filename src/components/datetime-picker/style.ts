import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  container: ViewStyle;
  iconContainer: ViewStyle;
  label: TextStyle;
  errorTxt: TextStyle;
  errorColor: TextStyle;
  placeholder: TextStyle;
  errorBorder: ViewStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    container: {
      flexDirection: 'row',
      paddingHorizontal: theme.spacing[1],
      alignItems: 'center',
      paddingVertical: theme.spacing[1],
      justifyContent: 'space-between',
      backgroundColor: theme.color.background.primary,
      borderRadius: 4,
      marginTop: theme.spacing[2],
      marginBottom: theme.spacing[3],
    },
    placeholder: {
      color: theme.color.alert.error,
      fontSize: 13,
      marginLeft: theme.spacing[2],
    },
    iconContainer: {
      height: 34,
      width: 34,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      textTransform: 'uppercase',
      fontSize: 12,
      color: theme.color.alert.error,
      letterSpacing: 0.2,
      marginBottom: theme.spacing[1],
    },
    errorTxt: {
      marginTop: -theme.spacing[1],
      marginBottom: theme.spacing[4],
    },
    errorColor: {
      color: theme.color.alert.error,
    },
    errorBorder: {
      borderColor: theme.color.alert.error,
      borderWidth: 1,
    },
  });

export { createStyles };
