import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  container: ViewStyle;
  modal: ViewStyle;
  modalHeader: ViewStyle;
  modalInner: ViewStyle;
  buttonContainer: ViewStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  modalTxt: TextStyle;
  closeIcon: ViewStyle;
  background: ViewStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    container: {
      height: '100%',
      alignItems: 'center',
    },
    modal: {
      width: '90%',
      backgroundColor: theme.color.background.primary,
      borderRadius: 10,
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalHeader: {
      backgroundColor: theme.color.background.primary,
      width: '100%',
      borderTopLeftRadius: theme.spacing[4],
      borderTopRightRadius: theme.spacing[4],
      paddingVertical: theme.spacing[4],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing[4],
    },
    modalInner: {
      paddingHorizontal: theme.spacing[4],
      borderTopLeftRadius: theme.spacing[4],
      paddingVertical: theme.spacing[5],
      width: '100%',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing[5],
    },
    primaryButton: {
      marginHorizontal: theme.spacing[2],
      paddingHorizontal: theme.spacing[2],
    },
    secondaryButton: {
      width: '45%',
      marginHorizontal: theme.spacing[2],
      backgroundColor: theme.color.background.primary,
    },
    modalTxt: {
      marginTop: theme.spacing[4],
    },
    closeIcon: {
      position: 'absolute',
      right: 20,
      top: 10,
    },
    background: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.color.background.primary,
      height: '100%',
      width: '100%',
    },
  });

export { createStyles };
