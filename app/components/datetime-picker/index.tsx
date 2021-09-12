import React, {memo, useState} from 'react';
import {Pressable, View} from 'react-native';
import {Icon} from '@icons/';
import {Text} from '@components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import _ from 'lodash';
import moment from 'moment';
import styles from './style';
import {DateTimePickerProps} from './datetime-picker.props';
import {colors} from "../../theme";

const DateTimePicker = memo((props: DateTimePickerProps) => {

  // Const
  const {
    label,
    error,
    onChange,
    placeholder,
    format = 'DD/MM/YYYY',
    callbackFormat = 'YYYY-MM-DD',
    dateTimeProps = {},
    containerStyle = {},
  } = props;

  // State
  const [state, setState] = useState({
    show: false,
    mode: 'date',
    value: moment(),
  });

  // Open
  const open = () =>
      setState((c) => ({
        ...c,
        show: true,
      }));

  // Close
  const close = (data) => {
    if (data && _.isFunction(onChange)) onChange(moment(data).format(callbackFormat));

    setState((c) => ({
      ...c,
      show: false,
    }));
  };

  return (
    <View style={containerStyle}>
      <Text style={[styles.label, error && { color: colors.default.alert.error }]} text={label}/>
      <DateTimePickerModal
        locale="tr"
        isVisible={state.show}
        mode="date"
        onConfirm={close}
        onCancel={close}
        {...dateTimeProps}
        confirmTextIOS="Onayla"
        cancelTextIOS="İptal"
      />
      <Pressable onPress={open} style={[styles.container, error && { borderColor: colors.default.alert.error, borderWidth: 1 }]}>
        <Text style={styles.placeholder} text={placeholder && moment(placeholder).format(format)} />
        <View style={styles.iconContainer}>
          <Icon name="DateTime" width={26} height={20} />
        </View>
      </Pressable>
      {error && <Text text={error} color={colors.default.alert.error} size={9} style={styles.errorTxt} />}
    </View>
  );
});

export {DateTimePicker}
