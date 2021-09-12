import React, {useState} from 'react';
import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from '@components';
import {flatten, mergeAll} from 'ramda';
import {TextAreaProps} from './text-area.prop';
import styles from './style';
import {colors} from '../../theme';

const enhance = (style, styleOverride) => mergeAll(flatten([style, styleOverride]));

export const TextArea = (props: TextAreaProps) => {

  const [isFocus, onFocusChange] = useState(false);
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

  let inputStyle: TextStyle = styles.input;
  inputStyle = enhance(inputStyle, inputStyleOverride);

  let focusInputStyle: ViewStyle = { ...styles.input, ...styles.inputFocus };
  focusInputStyle = enhance(focusInputStyle, focusInputStyleOverride);

  return (
    <View style={containerStyle}>
      <Text
          style={error ? {...styles.label, ...labelStyle, ...styles.errorLabel} : {...styles.label, ...labelStyle}}
          text={label}
      />
      <TextInput
          multiline
          onChangeText={onChangeText}
          placeholder={placeholder}
          numberOfLines={10}
          style={
            isFocus ? {...inputStyle, ...focusInputStyle} : error ? {...inputStyle, ...styles.errorInput} : inputStyle
          }
          onFocus={() => onFocusChange(true)}
          onBlur={() => onFocusChange(false)}
        value={value}
      />
      {error && (
          <Text color={colors.default.alert.error} size={10} text={error}/>
      )}
    </View>
  );
};
