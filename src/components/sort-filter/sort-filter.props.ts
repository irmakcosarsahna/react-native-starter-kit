import { ViewStyle } from 'react-native';

export interface SortFilterProps {
  greyStyle?: boolean;
  style?: ViewStyle;
  onFilterPress?(): void;
  sortOptions?: any;
  onPressSort?: any;
}
