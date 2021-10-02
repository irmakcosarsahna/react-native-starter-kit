import * as React from 'react';
import { memo } from 'react';
import { Pressable, Text as ReactNativeText } from 'react-native';
import _ from 'lodash';
import { TextProps } from './text.props';
import { useTranslate } from '@hooks';
import { createStyles, stylesProps } from './style';
import { useTheme } from '@theme';
import { mergeStyle } from '@utils';

const Text: React.FC<TextProps> = memo((props) => {
  // Props
  const {
    type = 'default',
    text,
    children,
    size,
    lineHeight,
    style: styleOverride,
    onPress,
    txtBtnStyle,
    color,
    align,
    ...rest
  } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // Translations
  const i18nText = !_.isFunction(text) ? useTranslate(text) : text;

  // Content
  const content = i18nText || children;

  // Style
  const style = mergeStyle(
    styles[type] || styles.default,
    styleOverride,
    color && { color },
    size && { fontSize: size },
    lineHeight && { lineHeight },
    align && { textAlign: align },
  );

  // On press
  if (onPress) {
    return (
      <Pressable style={txtBtnStyle} onPress={onPress}>
        <ReactNativeText {...rest} style={style}>
          {content}
        </ReactNativeText>
      </Pressable>
    );
  }

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
});

export { Text };
