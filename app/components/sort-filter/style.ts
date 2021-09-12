import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing } from '@theme';
import { colors } from '../../theme';

type styles = {
  iconContainer: ViewStyle;
  iconTxt: TextStyle;
  line: ViewStyle;
  buttonsContainer: ViewStyle;
  greyButtonContainer: ViewStyle;
};

export default StyleSheet.create<styles>({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  },
  iconTxt: {
    fontSize: 11,
    marginLeft: spacing[1],
  },
  line: {
    width: 1,
    height: 12,
    backgroundColor: colors.default.background.primary,
  },
  greyButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.default.background.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.11,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.default.background.primary,
    borderRadius: 6,
  },
});
