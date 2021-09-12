import React, { useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { Modal, Text } from '@components';
import { Icon } from '@icons';
import _ from 'lodash';
import styles from './style';
import { SortModalProps } from './sort-modal.props';

export const SortModal = (props: SortModalProps) => {
  // Props
  const { acitiveView = false, value = null, isVisible = false, closeFn, data, onPress } = props;

  // State
  const [selectItem, setSelectItem] = useState(value);

  // Onpress
  const _onPress = (item: object, index: string) => {
    setSelectItem(index);
    if (_.isFunction(onPress)) {
      closeFn();
      onPress(item);
    }
    if (_.isFunction(item?.onPress)) {
      closeFn();
      item?.onPress();
    }
  };

  // Render Item
  const renderItem = ({ item, index }) => (
    <View key={index} style={styles.itemContainer}>
      <Pressable onPress={() => _onPress(item, index)} style={styles.pressAble}>
        <Text
          style={acitiveView && _.toString(index) === _.toString(selectItem) ? styles.activeItemTxt : styles.itemTxt}
          text={item.text}
        />
        {acitiveView && _.toString(index) === _.toString(selectItem) && (
          <Icon
            name="Check"
            width={14}
            style={{
              marginLeft: -20,
            }}
          />
        )}
      </Pressable>
    </View>
  );

  // key Extractor
  const keyExtractor = (r, i) => _.toString(i);

  return (
    <Modal
      modalAlign="bottom"
      modalStyle={styles.modal}
      isVisible={isVisible}
      innerStyle={styles.modalInner}
      closeFn={closeFn}
    >
      <FlatList
        data={data}
        style={{
          width: '100%',
        }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <Text style={styles.cancelTxt} text="common.cancel" onPress={closeFn} />
    </Modal>
  );
};
