import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  iconContainer: ViewStyle;
  iconTxt: TextStyle;
  line: ViewStyle;
  buttonsContainer: ViewStyle;
  greyButtonContainer: ViewStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
    },
    iconTxt: {
      fontSize: 11,
      marginLeft: theme.spacing[1],
    },
    line: {
      width: 1,
      height: 12,
      backgroundColor: theme.color.background.primary,
    },
    greyButtonContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.11,
      shadowRadius: 5,
      elevation: 4,
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.color.background.primary,
      borderRadius: 6,
    },
  });

export { createStyles };
