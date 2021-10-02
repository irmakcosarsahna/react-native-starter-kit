import * as React from 'react';
import { Pressable } from 'react-native';
import { Text } from '../text';
import { ButtonProps } from './button.props';
import { useTheme } from '@theme';
import { createStyles, stylesProps } from './button.presets';
import { mergeStyle } from '@utils';

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  // Props
  const {
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    textColor,
    children,
    disable = false,
    ...rest
  } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // View Style
  const viewStyle = mergeStyle(styles.view, styleOverride);

  // Text Style
  const textStyle = mergeStyle(styles.text, textStyleOverride);

  // Content
  const content = children || <Text text={text} style={textStyle} color={textColor} />;

  return (
    <Pressable disabled={disable} style={[viewStyle, disable && { opacity: 0.5 }]} {...rest}>
      {content}
    </Pressable>
  );
};

export { Button };
