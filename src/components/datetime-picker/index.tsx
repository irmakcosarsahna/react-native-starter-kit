import React, { memo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from '@icons/';
import { Text } from '@components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import _ from 'lodash';
import moment from 'moment';
import { DateTimePickerProps } from './datetime-picker.props';
// Theme
import { useTheme } from '@theme';
import { createStyles, stylesProps } from './style';
// Utils
import { mergeStyle } from '@utils';

// Translation
import { useTranslation } from 'react-i18next';

interface StateProps {
  show: boolean;
  mode: 'date' | 'time' | 'datetime';
  value: Date;
}

const DateTimePicker: React.FC<DateTimePickerProps> = memo((props) => {
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

  const { t, i18n } = useTranslation();

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // State
  const [state, setState] = useState<StateProps>({
    show: false,
    mode: 'date',
    value: moment().toDate(),
  });

  // Open
  const open = () =>
    setState((c) => ({
      ...c,
      show: true,
    }));

  // Close
  const close = (data: Date) => {
    if (data && _.isFunction(onChange)) onChange(moment(data).format(callbackFormat));

    setState((c) => ({
      ...c,
      show: false,
    }));
  };

  // TextStyle
  const textStyle = mergeStyle(styles.label, error && styles.errorColor);

  // Pressable Container
  const pressableContainer = mergeStyle(styles.container, error && styles.errorBorder);

  return (
    <View style={containerStyle}>
      <Text style={textStyle} text={label} />
      <DateTimePickerModal
        locale={i18n.language}
        isVisible={state.show}
        mode="date"
        onConfirm={close}
        onCancel={close}
        {...dateTimeProps}
        confirmTextIOS={t('common.confirm')}
        cancelTextIOS={t('common.cancel')}
      />
      <Pressable onPress={open} style={pressableContainer}>
        <Text style={styles.placeholder} text={placeholder && moment(placeholder).format(format)} />
        <View style={styles.iconContainer}>
          <Icon name="DateTime" width={26} height={20} />
        </View>
      </Pressable>
      {!!error && <Text text={error} size={9} style={styles.errorTxt} />}
    </View>
  );
});

export { DateTimePicker };
