import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@icons';
import { colors, spacing } from '../../theme';
import { Text } from '../text';

// Render City
const GuarantyRenderItem = ({ item, selected }) => (
  <View style={styles.root}>
    <Text style={styles.txt}> {item?.name || item?.title}</Text>
    {selected ? (
      <Icon name="Check" stroke={colors.default.alert.error} width={20} height={18} style={styles.icon} />
    ) : null}
  </View>
);

export { GuarantyRenderItem };

const styles = StyleSheet.create({
  root: {
    marginHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: colors.default.alert.error,
  },
  icon: {
    marginRight: spacing[1],
  },
  txt: {
    flex: 1,
  },
});
