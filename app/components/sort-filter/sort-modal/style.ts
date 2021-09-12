import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type styles = {
  modal?: ViewStyle;
  itemContainer?: ViewStyle;
  itemTxt?: TextStyle;
  modalInner?: ViewStyle;
  pressAble?: ViewStyle;
  activeItemTxt?: TextStyle;
  cancelTxt?: TextStyle;
};

const createStyles = (theme: any) => (
  StyleSheet.create<styles>({
    modal: {
      borderRadius: 8,
      marginTop: theme.spacing[5],
      marginBottom: 5,
    },
    itemContainer: {
      borderBottomColor: theme.color.background.primary,
      borderBottomWidth: 0.3,
      paddingHorizontal: theme.spacing[4],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pressAble: {
      flex: 1,
      paddingVertical: theme.spacing[3],
    },
    itemTxt: {
      fontSize: 13,
      fontFamily: theme.typography.primaryLight,
      width: '100%',
    },
    activeItemTxt: {
      color: theme.color.alert.error,
      fontSize: 13,
      fontFamily: theme.typography.primaryLight,
    },
    modalInner: {
      paddingTop: -theme.spacing[4],
      paddingHorizontal: theme.spacing[0],
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    cancelTxt: {
      fontSize: 13,
      marginLeft: theme.spacing[4],
      marginTop: theme.spacing[2],
      marginBottom: -theme.spacing[3],
    },
  })
);


export {createStyles}
