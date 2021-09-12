import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {Text} from '@components';
import {Icon} from '@icons';
import {SortModal} from './sort-modal';
import {SortFilterProps} from './sort-filter.props';
import styles from './style';

export const SortFilter = (props: SortFilterProps) => {
  const { greyStyle = false, style, onFilterPress, sortOptions, onPressSort } = props;
  const [sortModal, setSortModal] = useState(false);

  return (
    <View style={{ ...(greyStyle ? styles.greyButtonContainer : styles.buttonsContainer), ...style }}>
      {sortOptions && (
        <Pressable style={styles.iconContainer} onPress={() => setSortModal(!sortModal)}>
          <Icon name="Sort" />
          <Text text="common.sort" style={styles.iconTxt} />
        </Pressable>
      )}
      {sortOptions && onFilterPress && <View style={styles.line} />}
      {onFilterPress && (
        <>
          <Pressable style={styles.iconContainer} onPress={onFilterPress}>
            <Icon name="FilterCenter" />
            <Text text="common.filter" style={styles.iconTxt} />
          </Pressable>
        </>
      )}
      <SortModal
        data={sortOptions}
        onPress={onPressSort}
        isVisible={sortModal}
        closeFn={() => setSortModal(!sortModal)}
      />
    </View>
  );
};
