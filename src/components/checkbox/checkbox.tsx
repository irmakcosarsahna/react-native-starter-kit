import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components';
import { CheckboxProps } from './checkbox.props';
import { createStyles, stylesProps } from './style';
import { Icon } from '@icons';
import { useTheme } from '@theme';
import { mergeStyle } from '@utils';

const Checkbox: React.FC<CheckboxProps> = (props) => {
  // Props
  const {
    multiline,
    onToggle,
    style,
    text,
    value,
    outlineStyle: _outlineStyle,
    fillStyle: _fillStyle,
    textStyle: _textStyle,
  } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // Mutli Line
  const numberOfLines = multiline ? 0 : 1;

  // Root Style
  const rootStyle = mergeStyle(styles.root, style);

  // Outline Style
  const outlineStyle = mergeStyle(styles.container, styles.outline, _outlineStyle);

  // Fill Style
  const fillStyle = mergeStyle(styles.container, styles.fill, _fillStyle);

  // Text Style
  const textStyle = mergeStyle(styles.label, _textStyle);

  // On Press
  const onPress = onToggle ? () => onToggle && onToggle(!value) : null;

  // Check True
  const isTrue = !!value;

  return (
    <Pressable disabled={!onToggle} onPress={onPress} style={rootStyle}>
      <View style={isTrue ? fillStyle : outlineStyle}>
        {isTrue && <Icon name="Check" fill="none" stroke="#fff" width={8} height={6} />}
      </View>
      <Text text={text} numberOfLines={numberOfLines} style={textStyle} />
    </Pressable>
  );
};

export { Checkbox };
