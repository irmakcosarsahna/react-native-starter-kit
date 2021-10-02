import React from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
// Modules
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Props
import { mergeStyle } from '@utils';
import { createStyles, stylesProps } from './style';
import { useTheme } from '@theme';

interface ScreenProp {
  style?: ViewStyle;
  scroll?: Boolean;
  scrollViewStyle?: ViewStyle;
  paddingEnable?: Boolean;
}

const Screen: React.FC<ScreenProp> = (props) => {
  // Props
  const { style, children, scroll = false, scrollViewStyle, paddingEnable = true } = props;

  // Style
  const styles: stylesProps = useTheme(createStyles);

  // Safe Area
  const insets = useSafeAreaInsets();

  // Style
  const containerStyle = mergeStyle(styles.container, style);

  // Content Container Style
  const contentContainerStyle = mergeStyle(
    { paddingBottom: insets.bottom + 30 || 10, paddingHorizontal: paddingEnable ? 19 : 0 },
    scrollViewStyle,
  );

  return (
    <View style={containerStyle}>
      {scroll ? (
        <ScrollView contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};

export { Screen };
