import React, { useCallback } from 'react';
import { Modal as ModalComponent, Pressable, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from '@icons';
import { Button, Text } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { actionClearModal } from '@state/modal';
import _ from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@theme';
import { mergeStyle } from '@utils';
import { ModalProps } from './modal.props';
import { createStyles, stylesProps } from './style';

const Modal: React.FC<ModalProps> = (_props) => {
  // Selector
  const props = useSelector(({ modal }: any) => modal);

  // Props
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
  }: ModalProps = props?.isVisible ? props : _props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // insets
  const insets = useSafeAreaInsets();

  // Dispatch
  const dispatch = useDispatch();

  // Get Icon
  const getIcon = useCallback(() => {
    switch (type) {
      case 'error':
        return { iconName: 'Error' };
      case 'success':
        return { iconName: 'Success' };
      default:
        return { iconName: 'ModalInfo' };
    }
  }, [type]);

  // Get Icon Name
  const icon = getIcon();

  // Bottom Space
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

  // Align
  const align = modalAlign === 'top' ? 'flex-start' : modalAlign === 'bottom' ? 'flex-end' : 'center';

  // Container Merge
  const container = mergeStyle(styles.container, {
    justifyContent: align,
  });

  return (
    <ModalComponent
      animationType="fade"
      onRequestClose={_closeFn}
      transparent
      statusBarTranslucent
      visible={!!isVisible}
    >
      <View style={container}>
        <TouchableWithoutFeedback onPress={_closeFn}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <View style={[styles.modal, modalStyle, { bottom: bottomSpace }]}>
          {!!headerText && (
            <View style={styles.modalHeader}>
              <Text text={headerText} />
              <TouchableHighlight underlayColor="transparent" onPress={_closeFn}>
                <Icon name="Close" width={10} height={10} fill={'black'} />
              </TouchableHighlight>
            </View>
          )}
          <View style={[styles.modalInner, innerStyle]}>
            {!!children || (
              <>
                {!!closeIcon && (
                  <Pressable style={styles.closeIcon} onPress={_closeFn}>
                    <Icon name="Close" width={10} heigth={10} fill={'red'} />
                  </Pressable>
                )}
                <Icon name={icon?.iconName} width={40} height={40} />
                <Text text={text} size={11} style={styles.modalTxt} />
                <View style={styles.buttonContainer}>
                  {!!secondButton && (
                    <Button style={styles.secondaryButton} text={secondButton?.text} onPress={_onSecondPress} />
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

export { Modal };
