import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {spacing} from '@theme';
import {colors} from "../../theme";

type styles = {
  input: ViewStyle;
  inputFocus: ViewStyle;
  label: TextStyle;
  errorInput: ViewStyle;
  errorLabel: TextStyle;
};

export default StyleSheet.create<styles>({
  input: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.default.background.primary,
    borderRadius: 4,
    padding: spacing[2],
    textAlignVertical: 'top',
    fontSize: 12,
    color: colors.default.alert.error,
    marginBottom: spacing[3],
    height: 75,
  },
  errorInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.default.background.primary,
    borderRadius: 4,
    borderColor: colors.default.alert.error,
    borderWidth: 1,
    padding: spacing[2],
    textAlignVertical: 'top',
    fontSize: 12,
    color: colors.default.alert.error,
    marginBottom: spacing[3],
    height: 75,
  },
  inputFocus: {
    borderColor: colors.default.alert.error,
    borderWidth: 1,
  },
  label: {
    fontSize: 12,
    color: colors.default.alert.error,
    marginBottom: spacing[3],
  },
  errorLabel: {
    fontSize: 12,
    color: colors.default.alert.error,
    marginBottom: spacing[3],
  },
});
