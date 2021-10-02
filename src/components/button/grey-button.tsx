import React, { PropsWithChildren } from 'react';
// Components
import { Button, Text } from '@components';
import { Icon } from '../../assets/svg';
import { colors } from '../../theme';
import { mergeStyle } from '../../utils';
import { ButtonProps } from './button.props';
// Icon

const GreyButton: React.FC<PropsWithChildren<ButtonProps>> = ({ text, style, disabled, onPress }) => {
  const customStyle = disabled
    ? mergeStyle(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 18,
          paddingLeft: 15,
          backgroundColor: colors.default.button.disable,
        },
        style,
      )
    : mergeStyle(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 18,
          paddingVertical: 15,
        },
        style,
      );

  return (
    <Button disabled={disabled} onPress={onPress} style={customStyle}>
      <Text style={{ fontSize: 14, color: '#fff' }} text={text} />
      <Icon width={25} height={25} name="ArrowLeft" fill="transparent" stroke={'#fff'} />
    </Button>
  );
};

export { GreyButton };
