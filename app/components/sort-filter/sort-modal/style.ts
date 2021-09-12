import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {spacing, typography} from '@theme';
import {colors} from "../../../theme";

type styles = {
  modal?: ViewStyle;
  itemContainer?: ViewStyle;
  itemTxt?: TextStyle;
  modalInner?: ViewStyle;
  pressAble?: ViewStyle;
  activeItemTxt?: TextStyle;
  cancelTxt?: TextStyle;
};

export default StyleSheet.create<styles>({
  modal: {
    borderRadius: 8,
    marginTop: spacing[5],
    marginBottom: 5,
  },
  itemContainer: {
    borderBottomColor: colors.default.background.primary,
    borderBottomWidth: 0.3,
    paddingHorizontal: spacing[4],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressAble: {
    flex: 1,
    paddingVertical: spacing[3],
  },
  itemTxt: {
    fontSize: 13,
    fontFamily: typography.primaryLight,
    width: '100%',
  },
  activeItemTxt: {
    color: colors.default.alert.error,
    fontSize: 13,
    fontFamily: typography.primaryLight,
  },
  modalInner: {
    paddingTop: -spacing[4],
    paddingHorizontal: spacing[0],
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cancelTxt: {
    fontSize: 13,
    marginLeft: spacing[4],
    marginTop: spacing[2],
    marginBottom: -spacing[3],
  },
});
