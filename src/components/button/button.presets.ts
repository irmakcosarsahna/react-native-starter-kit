import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { themeProps } from '@theme';

export type stylesProps = {
  text: TextStyle;
  view: ViewStyle;
};

const createStyles = (theme: themeProps) => {
  const BASE_VIEW: ViewStyle = {
    paddingVertical: theme.spacing[3],
    paddingHorizontal: theme.spacing[3],
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.button.background,
  };

  const BASE_TEXT: TextStyle = {
    paddingHorizontal: theme.spacing[3],
    fontSize: 12,
    letterSpacing: 0.2,
  };

  return StyleSheet.create<stylesProps>({
    text: {
      ...BASE_TEXT,
      fontSize: 12,
      color: theme.color.alert.error,
      textTransform: 'uppercase',
      fontFamily: theme.typography.button,
    },
    view: {
      ...BASE_VIEW,
      backgroundColor: theme.color.button.background,
    },
  });
};

export { createStyles };
