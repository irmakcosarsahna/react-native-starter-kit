import * as React from 'react';
import { Pressable } from 'react-native';
import { flatten, mergeAll } from 'ramda';
import { Text } from '../text';
import { textPresets, viewPresets } from './button.presets';
import { ButtonProps } from './button.props';

export const Button = (props: ButtonProps) => {
  const {
    preset = 'primary',
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    textColor,
    children,
    disable = false,
    ...rest
  } = props;

  const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride]));
  const textStyle = mergeAll(flatten([textPresets[preset] || textPresets.primary, textStyleOverride]));

  const content = children || <Text text={text} style={textStyle} color={textColor}/>;

  return (
    <Pressable disabled={disable}
               style={[viewStyle, disable && { opacity: 0.5 }]} {...rest}>
      {content}
    </Pressable>
  );
};
