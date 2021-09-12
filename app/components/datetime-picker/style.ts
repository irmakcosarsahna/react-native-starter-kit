import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, spacing} from "../../theme";

type styles = {
  container: ViewStyle;
  iconContainer: ViewStyle;
  label: TextStyle;
  errorTxt: TextStyle;
  placeholder: TextStyle;
};


export default StyleSheet.create<styles>({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing[1],
    alignItems: 'center',
    paddingVertical: spacing[1],
    justifyContent: 'space-between',
    backgroundColor: colors.default.background.primary,
    borderRadius: 4,
    marginTop: spacing[2],
    marginBottom: spacing[3],
  },
  placeholder: {
    color: colors.default.alert.error,
    fontSize: 13,
    marginLeft: spacing[2],
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
    color: colors.default.alert.error,
    letterSpacing: 0.2,
    marginBottom: spacing[1],
  },
  errorTxt: {
    marginTop: -spacing[1],
    marginBottom: spacing[4],
  },
});
