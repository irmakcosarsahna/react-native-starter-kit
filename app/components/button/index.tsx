import * as React from 'react';
import { Pressable } from 'react-native';
import { Text } from '../text';
import { textPresets, viewPresets } from './button.presets';
import { ButtonProps } from './button.props';
import _ from 'lodash';

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

  const viewStyle = _.merge(_.flatten([viewPresets[preset] || viewPresets.primary, styleOverride]));
  const textStyle = _.merge(_.flatten([textPresets[preset] || textPresets.primary, textStyleOverride]));

  const content = children || <Text text={text} style={textStyle} color={textColor} />;

  return (
    <Pressable disabled={disable} style={[viewStyle, disable && { opacity: 0.5 }]} {...rest}>
      {content}
    </Pressable>
  );
};
