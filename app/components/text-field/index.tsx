import React, { useState } from 'react';
import { Pressable, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { color } from '@theme';
import { Icon } from '@icons';
import { TextInputMask } from 'react-native-masked-text';
import TextFieldProps from './text-field.props';
import styles from './style';
import { Text } from '../text';
import { useTranslate } from '../../hooks';
import { colors } from '../../theme';
import _ from 'lodash';

const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
};

const enhance = (style, styleOverride) => _.merge(_.flatten([style, styleOverride]));

export const TextField = (props: TextFieldProps) => {
  const [isFocus, onFocusChange] = useState(false);
  const [toggle, setToggle] = useState(true);

  const {
    placeholder,
    label,
    error = '',
    type = 'default',
    leftIcon,
    secureTextEntry = false,
    keyboardType = 'default',
    preset = 'default',
    style: styleOverride,
    inputContainerStyle: inputContainerStyleOverride,
    inputStyle: inputStyleOverride,
    errorInputStyle: errorInputStyleOverride,
    errorLabelStyle: errorLabelStyleOverride,
    infoLabelStyle: infoLabelStyleOverride,
    focusInputStyle: focusInputStyleOverride,
    isFocusStyle = true,
    isValid = false,
    children,
    value,
    ...rest
  } = props;

  let containerStyle: ViewStyle = { ...styles.container, ...PRESETS[preset] };
  containerStyle = enhance(containerStyle, styleOverride);

  let inputContainerStyle: ViewStyle = styles.inputContainer;
  inputContainerStyle = enhance(inputContainerStyle, inputContainerStyleOverride);

  let inputStyle: TextStyle = styles.input;
  inputStyle = enhance(inputStyle, inputStyleOverride);

  let errorInputStyle: ViewStyle = { ...styles.inputContainer, ...styles.errorInput };
  errorInputStyle = enhance(errorInputStyle, errorInputStyleOverride);

  let focusInputStyle: ViewStyle = { ...styles.inputContainer, ...styles.focusInput };
  focusInputStyle = enhance(focusInputStyle, focusInputStyleOverride);

  let errorLabelStyle: TextStyle = { ...styles.label, ...styles.errorLabel };
  errorLabelStyle = enhance(errorLabelStyle, errorLabelStyleOverride);

  const labelStyle: TextStyle = styles.label;

  let infoLabelStyle: TextStyle = styles.infoLabel;
  infoLabelStyle = enhance(infoLabelStyle, infoLabelStyleOverride);

  const actualPlaceholder = useTranslate(placeholder);

  return (
    <View style={containerStyle}>
      <Text
        preset="fieldLabel"
        text={label}
        style={error && isFocusStyle ? errorLabelStyle : labelStyle}
      />
      <View
        style={[
          error && isFocusStyle ? errorInputStyle : inputContainerStyle,
          isFocus && isFocusStyle ? focusInputStyle : inputContainerStyle,
        ]}
      >
        {leftIcon}
        {type === 'default' ? (
          <TextInput
            secureTextEntry={secureTextEntry && toggle}
            placeholder={actualPlaceholder}
            placeholderTextColor={colors.default.alert.error}
            underlineColorAndroid={color.transparent}
            keyboardType={keyboardType}
            value={value}
            {...rest}
            onFocus={() => onFocusChange(true)}
            onBlur={() => onFocusChange(false)}
            style={inputStyle}
          />
        ) : (
          <TextInputMask
            type={type}
            placeholder={actualPlaceholder}
            placeholderTextColor={colors.default.alert.error}
            underlineColorAndroid={color.transparent}
            value={value}
            {...rest}
            onFocus={() => onFocusChange(true)}
            onBlur={() => onFocusChange(false)}
            style={inputStyle}
            keyboardType={keyboardType}
          />
        )}
        {secureTextEntry && (
          <Pressable onPress={() => setToggle(!toggle)}>
            <Icon name={toggle ? 'EyeOn' : 'EyeOff'} fill={colors.default.alert.error} />
          </Pressable>
        )}
        {isValid && <Icon name="Check" stroke={colors.default.alert.error} fill="none" />}
        {children}
      </View>
      {error ? <Text style={infoLabelStyle} text={error}/> : null}
    </View>
  );
};
