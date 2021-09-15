import { StyleSheet } from 'react-native';

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      zIndex: 9999,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: theme.colors.background.primary,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    gif: {
      zIndex: 3,
      width: 100,
      height: 100,
    },
  });

export { createStyles };
