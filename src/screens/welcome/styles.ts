import { StyleSheet, ViewStyle } from 'react-native';

type styles = {
  container: ViewStyle;
};

export default StyleSheet.create<styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
