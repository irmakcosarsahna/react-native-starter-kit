import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '@icons';
import {colors, spacing} from '../../theme';
import {Text} from '../text';

// Cargo name Format
const cargoNameFormat = (d) => `${d?.name} (${d?.kg}Kg / ${d?.desi}Desi)  ${d?.price}TL`;

// Render City
const CargoSizeRenderItem = ({ item, selected }) => (
  <View style={styles.root}>
    <Text style={styles.txt} numberOfLines={1}>
      {' '}
      {cargoNameFormat(item)}
    </Text>
    {selected ? <Icon name="Check" stroke={colors.default.alert.error} width={20} height={18} style={styles.icon} /> : null}
  </View>
);

export { CargoSizeRenderItem, cargoNameFormat };

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
