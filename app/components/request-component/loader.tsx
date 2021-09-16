import React, { memo } from 'react';
import { View } from 'react-native';
// Lottie
import LottieView from 'lottie-react-native';
// Styles
import { useTheme } from '@theme';
import { createStyles, stylesProps } from './styles';

// Lottie Animation
const loader = require('@assets/lottie/animation.json');

const RequestLoader = memo(() => {
  // Style
  const styles: stylesProps = useTheme(createStyles);

  return (
    <View style={styles.container}>
      <LottieView source={loader} autoPlay loop style={styles.gif} speed={2} />
      <View style={styles.overlay} />
    </View>
  );
});

export { RequestLoader };
