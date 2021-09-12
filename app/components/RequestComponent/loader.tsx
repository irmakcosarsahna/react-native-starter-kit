import React, { memo } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '@useTheme';
import { createStyles } from './styles';

const loader = require('@assets/lottie/animation.json');

const RequestLoader = memo(() => {

  const styles = useTheme(createStyles);

  return (
    <View style={styles.container}>
      <LottieView source={loader} autoPlay loop style={styles.gif} speed={2} />
      <View style={styles.overlay} />
    </View>
  );
});

export { RequestLoader };
