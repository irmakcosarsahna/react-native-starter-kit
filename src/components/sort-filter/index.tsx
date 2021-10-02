import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components';
import { Icon } from '@icons';
import { SortModal } from './sort-modal';
import { SortFilterProps } from './sort-filter.props';
import _ from 'lodash';
import { mergeStyle } from '@utils';
import { useTheme } from '@theme';
import { createStyles, stylesProps } from './style';

interface StateProps {
  sortModal: boolean;
}

const SortFilter: React.FC<SortFilterProps> = (props) => {
  // Props
  const { greyStyle = false, style, onFilterPress, sortOptions, onPressSort } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // State
  const [state, setState] = useState<StateProps>({
    sortModal: false,
  });

  // State Functions
  const setSortModal = () => setState((c) => ({ ...c, sortModal: !c.sortModal }));

  // Style
  const rootStyle = mergeStyle(greyStyle && styles.greyButtonContainer, styles.buttonsContainer, style);

  return (
    <View style={rootStyle}>
      {!!sortOptions && (
        <Pressable style={styles.iconContainer} onPress={setSortModal}>
          <Icon name="Sort" />
          <Text text="common.sort" style={styles.iconTxt} />
        </Pressable>
      )}
      {!!sortOptions && _.isFunction(onFilterPress) && <View style={styles.line} />}
      {_.isFunction(onFilterPress) && (
        <>
          <Pressable style={styles.iconContainer} onPress={onFilterPress}>
            <Icon name="FilterCenter" />
            <Text text="common.filter" style={styles.iconTxt} />
          </Pressable>
        </>
      )}
      <SortModal data={sortOptions} onPress={onPressSort} isVisible={state.sortModal} closeFn={setSortModal} />
    </View>
  );
};

export { SortFilter };
