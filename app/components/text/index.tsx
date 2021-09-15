import * as React from 'react';
import { useState } from 'react';
import { Pressable, Text as ReactNativeText } from 'react-native';
import _ from 'lodash';
import { presets } from './text.presets';
import { TextProps } from './text.props';
import { useTranslate } from '../../hooks';

const Text = (props: TextProps) => {
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

  // Translations
  const i18nText = !_.isFunction(text) ? useTranslate(text) : text;

  const content = i18nText || children;

  const [a, b] = useState();
  // Style
  const style = _.merge(
    _.flatten([
      presets[type] || presets.default,
      styleOverride,
      color && { color },
      size && { fontSize: size },
      lineHeight && { lineHeight },
      align && { textAlign: align },
    ]),
  );

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
};

export { Text };
