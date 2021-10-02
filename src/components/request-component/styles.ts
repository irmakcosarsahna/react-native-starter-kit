import { StyleSheet, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  container: ViewStyle;
  overlay: ViewStyle;
  gif: ViewStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
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
      backgroundColor: theme.color.background.primary,
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
