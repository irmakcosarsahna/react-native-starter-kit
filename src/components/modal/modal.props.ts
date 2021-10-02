import { ViewStyle } from 'react-native';
import React from 'react';

export interface ModalProps {
  isVisible: boolean;
  closeFn?: () => {};
  headerText: string;
  modalStyle: ViewStyle | ViewStyle[];
  modalAlign: 'center' | 'bottom' | 'left' | 'top';
  children?: React.ReactNode;
  innerStyle: ViewStyle | ViewStyle[];
  type: string;
  text: string;
  secondButton: React.ReactNode;
  buttonText?: string;
  closeIcon: boolean;
  onPressButton?: () => {} | any;
}
