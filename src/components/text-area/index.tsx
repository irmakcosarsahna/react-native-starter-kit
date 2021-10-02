import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '@components';
import { TextAreaProps } from './text-area.prop';
import { createStyles, stylesProps } from './style';
import { useTheme } from '@theme';
import { mergeStyle } from '@utils';

interface StateProps {
  isFocus: boolean;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  // Props
  const {
    error,
    label,
    labelStyle,
    focusInputStyle: focusInputStyleOverride,
    style: inputStyleOverride,
    onChangeText,
    value,
    placeholder,
    containerStyle,
  } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // State
  const [state, setState] = useState<StateProps>({
    isFocus: false,
  });
  // State Functions
  const onFocusChange = (isFocus: boolean) => setState((c) => ({ ...c, isFocus }));

  // Input Style
  const inputStyle = mergeStyle(styles.input, inputStyleOverride);

  // Focus Input Style
  const focusInputStyle = mergeStyle(styles.input, styles.inputFocus, focusInputStyleOverride);

  // Text Style
  const textStyle = mergeStyle(styles.label, labelStyle, error && styles.errorLabel);

  // Text Input
  const textInput = mergeStyle(inputStyle, state.isFocus && focusInputStyle, error && styles.errorInput);

  // On Focus
  const onFocus = () => onFocusChange(true);

  // On Blur
  const onBlur = () => onFocusChange(false);

  return (
    <View style={containerStyle}>
      <Text style={textStyle} text={label} />
      <TextInput
        multiline
        onChangeText={onChangeText}
        placeholder={placeholder}
        numberOfLines={10}
        style={textInput}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
      />
      {!!error && <Text style={styles.errorText} size={10} text={error} />}
    </View>
  );
};

export { TextArea };
