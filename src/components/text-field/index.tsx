import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, TextInput, View } from 'react-native';
import { Icon } from '@icons';
import { TextInputMask } from 'react-native-masked-text';
import { createStyles, stylesProps } from './style';
import { Text } from '../text';
import { colors, useTheme } from '@theme';
import { useTranslation } from 'react-i18next';
import { mergeStyle } from '@utils';
import { TextFieldProps } from './text-field.props';

interface StateProps {
  isActive: boolean;
  toggle: boolean;
  isFocus: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  // Translation
  const { t } = useTranslation();

  // Props
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
    require,
    ...rest
  } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // Container Style
  const containerStyle = mergeStyle(styles.container, styleOverride);

  // Input Container Style
  const inputContainerStyle = mergeStyle(styles.inputContainer, inputContainerStyleOverride);

  // Input Style
  const inputStyle = mergeStyle(styles.input, inputStyleOverride);

  // Error Input Style
  const errorInputStyle = mergeStyle(styles.inputContainer, styles.errorInput, errorInputStyleOverride);

  // Focus Input Style
  const focusInputStyle = mergeStyle(styles.inputContainer, styles.focusInput, focusInputStyleOverride);

  // Info Label Style
  const infoLabelStyle = mergeStyle(styles.infoLabel, infoLabelStyleOverride);

  // Actual Placeholder
  const actualPlaceholder = placeholder ? t(placeholder) : '';

  // Translate
  const translateY = useRef(new Animated.Value(2)).current;

  // State
  const [state, setState] = useState<StateProps>({
    isActive: false,
    toggle: false,
    isFocus: false,
  });

  // State Functions
  const setIsActive = (isActive: boolean) => setState((c) => ({ ...c, isActive }));
  const onFocusChange = (isFocus: boolean) => setState((c) => ({ ...c, isFocus }));
  const setToggle = (toggle: boolean) => setState((c) => ({ ...c, toggle }));

  // Ref
  const inputElementRef = useRef();

  // Use Effect
  useEffect(() => {
    if (value) {
      onFocus();
    }

    inputElementRef?.current?.setNativeProps({});
  }, [value]);

  // On Focus
  const onFocus = () => {
    setIsActive(true);
    onFocusChange(true);
    slideIn();
  };

  // On blur
  const onBlur = () => {
    setIsActive(false);
    onFocusChange(false);
    !value && slideOut();
  };

  // Slide Out
  const slideOut = () => {
    Animated.timing(translateY, {
      toValue: 2,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  // Slide In
  const slideIn = () => {
    Animated.timing(translateY, {
      toValue: -20,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={containerStyle}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 17,
          top: 13,
          bottom: 0,
          zIndex: 1,
          transform: [
            {
              translateY: translateY,
            },
          ],
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text text={placeholder} style={state.isActive ? styles.activeLabel : styles.label} />
          {require && <Text text="*" style={state.isActive ? styles.activeLabel : styles.label} />}
        </View>
      </Animated.View>
      <View
        style={[
          error && isFocusStyle ? errorInputStyle : inputContainerStyle,
          state.isFocus && isFocusStyle ? focusInputStyle : inputContainerStyle,
        ]}
      >
        {leftIcon}
        {type === 'default' ? (
          <TextInput
            ref={inputElementRef}
            secureTextEntry={secureTextEntry && state.toggle}
            placeholderTextColor={colors.default.alert.error}
            underlineColorAndroid={'transparent'}
            keyboardType={keyboardType}
            value={value}
            {...rest}
            onFocus={onFocus}
            onBlur={onBlur}
            style={inputStyle}
          />
        ) : (
          <TextInputMask
            type={type}
            placeholder={actualPlaceholder}
            placeholderTextColor={colors.default.alert.error}
            underlineColorAndroid={'transparent'}
            value={value}
            {...rest}
            onFocus={() => onFocusChange(true)}
            onBlur={() => onFocusChange(false)}
            style={inputStyle}
            keyboardType={keyboardType}
          />
        )}
        {secureTextEntry && (
          <Pressable onPress={() => setToggle(!state.toggle)}>
            <Icon name={state.toggle ? 'EyeOn' : 'EyeOff'} fill={colors.default.alert.error} width={24} height={24} />
          </Pressable>
        )}
        {isValid && <Icon name="Check" stroke={colors.default.alert.error} fill="none" />}
        {children}
      </View>
      {!!error && <Text style={infoLabelStyle} text={error} />}
    </View>
  );
};

export { TextField };
