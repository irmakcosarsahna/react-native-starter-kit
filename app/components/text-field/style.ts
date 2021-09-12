import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography } from '@theme';
import { colors } from '../../theme';

type styles = {
  container: ViewStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  errorInput: ViewStyle;
  focusInput: ViewStyle;
  label: TextStyle;
  errorLabel: TextStyle;
  infoLabel: TextStyle;
};

export default StyleSheet.create<styles>({
  container: {},
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: colors.default.background.primary,
    borderRadius: 4,
    paddingHorizontal: spacing[2],
  },
  input: {
    flex: 1,
    fontFamily: typography.primary,
    color: colors.default.alert.error,
    fontSize: 12,
    fontWeight: '300',
    height: 40,
  },
  errorInput: {
    borderColor: colors.default.alert.error,
    borderWidth: 1,
  },
  focusInput: {
    borderColor: colors.default.alert.error,
    borderWidth: 1,
  },
  label: {
    fontSize: 12,
    color: colors.default.alert.error,
    marginBottom: spacing[2],
  },
  errorLabel: {
    color: colors.default.alert.error,
    marginBottom: spacing[3],
  },
  infoLabel: {
    color: colors.default.alert.error,
    fontSize: 9,
    marginTop: spacing[2],
  },
});
