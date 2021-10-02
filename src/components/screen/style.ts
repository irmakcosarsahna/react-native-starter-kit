import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  container: ViewStyle;
  subtitle: TextStyle;
  subtitleHeader: ViewStyle;
  badge: ViewStyle;
};

const createStyles = (theme: themeProps) =>
  StyleSheet.create<stylesProps>({
    container: {
      flex: 1,
      paddingHorizontal: 19,
      paddingBottom: 30,
      padding: 5,
    },
    subtitle: {
      fontSize: 28,
      fontFamily: theme.typography.primarySemibold,
    },
    subtitleHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    badge: {
      width: 21,
      height: 21,
      borderRadius: 11.5,
      backgroundColor: theme.color.background.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: theme.spacing[2],
    },
  });

export { createStyles };
