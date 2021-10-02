import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  input: ViewStyle;
  inputFocus: ViewStyle;
  label: TextStyle;
  errorInput: ViewStyle;
  errorLabel: TextStyle;
  errorText: TextStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    input: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.color.background.primary,
      borderRadius: 4,
      padding: theme.spacing[2],
      textAlignVertical: 'top',
      fontSize: 12,
      color: theme.color.alert.error,
      marginBottom: theme.spacing[3],
      height: 75,
    },
    errorInput: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.color.background.primary,
      borderRadius: 4,
      borderColor: theme.color.alert.error,
      borderWidth: 1,
      padding: theme.spacing[2],
      textAlignVertical: 'top',
      fontSize: 12,
      color: theme.color.alert.error,
      marginBottom: theme.spacing[3],
      height: 75,
    },
    inputFocus: {
      borderColor: theme.color.alert.error,
      borderWidth: 1,
    },
    label: {
      fontSize: 12,
      color: theme.color.alert.error,
      marginBottom: theme.spacing[3],
    },
    errorLabel: {
      fontSize: 12,
      color: theme.color.alert.error,
      marginBottom: theme.spacing[3],
    },
    errorText: {
      color: theme.color.alert.error,
    },
  });

export { createStyles };
