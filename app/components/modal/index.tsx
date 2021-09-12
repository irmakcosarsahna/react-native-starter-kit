import React, { useCallback } from 'react';
import { Modal as ModalComponent, Pressable, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from '@icons';
import { Button, Text } from '@components';
import { color } from '@theme';
import { useDispatch, useSelector } from 'react-redux';
import { actionClearModal } from '@state/modal';
import _ from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import { colors } from '../../theme';

export const Modal = (_props) => {
  // Selector
  const props = useSelector(({modal}: any) => modal);

  const insets = useSafeAreaInsets();

  // Dispatch
  const dispatch = useDispatch();

  const {
    isVisible = false,
    closeFn,
    headerText,
    modalStyle,
    modalAlign = 'center',
    children,
    innerStyle,
    type,
    text,
    secondButton,
    buttonText = 'common.iAgree',
    closeIcon = true,
    onPressButton,
  } = props?.isVisible ? props : _props;

  const getIconName = useCallback(() => {
    switch (type) {
      case 'error':
        return { iconName: 'Error' };
      case 'success':
        return { iconName: 'Success' };
      default:
        return { iconName: 'ModalInfo' };
    }
  }, [type]);

  const helper = getIconName();

  const align = modalAlign === 'top' ? 'flex-start' : modalAlign === 'bottom' ? 'flex-end' : 'center';
  const bottomSpace = modalAlign === 'bottom' ? insets.bottom : modalAlign === 'top' ? insets.top : null;

  // Close Function
  const _closeFn = () => {
    dispatch(actionClearModal());
    _.isFunction(closeFn) && closeFn();
  };

  // On Press Button
  const _onPressButton = () => {
    dispatch(actionClearModal());
    _.isFunction(onPressButton) && onPressButton();
  };

  // On Second Press
  const _onSecondPress = () => {
    dispatch(actionClearModal());
    _.isFunction(secondButton?.onPress) && secondButton?.onPress();
  };

  return (
      <ModalComponent
          animationType="fade"
          onRequestClose={_closeFn}
          transparent
          statusBarTranslucent
          visible={isVisible}
      >
        <View style={{height: '100%', justifyContent: align, alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={_closeFn}>
            <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: colors.default.background.primary,
                  height: '100%',
                  width: '100%',
                }}
            />
          </TouchableWithoutFeedback>
          <View style={[styles.modal, modalStyle, {bottom: bottomSpace}]}>
            {
              headerText
                  ? (
                      <View style={styles.modalHeader}>
                        <Text text={headerText}/>
                        <TouchableHighlight underlayColor="transparent" onPress={_closeFn}>
                          <Icon name="Close" width={10} height={10} fill={color.line}/>
                        </TouchableHighlight>
                      </View>
                  ) : null
            }
            <View style={{...styles.modalInner, ...innerStyle}}>
              {children || (
                  <>
                    {closeIcon && (
                        <Pressable style={styles.closeIcon} onPress={_closeFn}>
                          <Icon name="Close" width={10} heigth={10} fill={colors.default.alert.error}/>
                        </Pressable>
                    )}
                    <Icon name={helper?.iconName} width={40} height={40}/>
                    <Text text={text} size={11} style={styles.modalTxt}/>
                <View style={styles.buttonContainer}>
                  {secondButton && (
                    <Button
                      style={styles.secondaryButton}
                      text={secondButton?.text}
                      onPress={_onSecondPress}
                    />
                  )}
                  <Button
                    text={buttonText}
                    onPress={_onPressButton}
                    style={[styles.primaryButton, secondButton && { width: '50%' }]}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </ModalComponent>
  );
};
