import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

type stylesProps = {
  container: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  errorInput: ViewStyle;
  focusInput: ViewStyle;
  label: TextStyle;
  errorLabel: TextStyle;
  infoLabel: TextStyle;
  activeLabel: TextStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    container: {
      marginBottom: 5,
      marginTop: 15,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 30,
      borderColor: theme.color.border.input,
      borderWidth: 0.5,
      paddingHorizontal: 23,
    },
    input: {
      flex: 1,
      fontFamily: theme.typography.primary,
      color: theme.color.opacText,
      fontSize: 16,
      fontWeight: '300',
      height: 50,
    },
    errorInput: {
      borderBottomColor: theme.color.primaryDarker,
      borderBottomWidth: 1,
    },
    focusInput: {
      borderColor: theme.color.default.primary,
    },
    label: {
      fontSize: 14,
      color: '#1a1a1a',
    },
    activeLabel: {
      fontFamily: theme.typography.primaryBold,
      fontSize: 12,
      color: '#666666',
      backgroundColor: '#fafafa',
      paddingHorizontal: 4,
    },
    errorLabel: {
      color: theme.color.error,
      marginBottom: theme.spacing[3],
    },
    infoLabel: {
      color: theme.color.error,
      fontSize: 9,
      marginTop: theme.spacing[2],
    },
  });

export { createStyles };
