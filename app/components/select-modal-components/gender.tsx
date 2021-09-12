// Gender Render Item
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@icons';
import { colors, spacing } from '../../theme';
import { Text } from '../text';

const GenderRenderItem = ({ item, selected }) => (
    <View style={styles.root}>
      <Text> {item.name}</Text>
      {selected ? <Icon name="Check" stroke={colors.default.alert.error} width={20} height={18} style={styles.icon} /> : null}
    </View>
  );

export { GenderRenderItem };

const styles = StyleSheet.create({
  root: {
    marginHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderBottomWidth: 0.5,
    borderBottomColor: colors.default.alert.error,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: spacing[1],
  },
});
