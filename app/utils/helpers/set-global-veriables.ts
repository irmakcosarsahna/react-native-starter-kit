/**
 * Uygulama açılışında yapmak istediğiniz fonksiyonlar dizisi
 *
 */

import { Text } from 'react-native';

if (!__DEV__) {
  // Clear Console Log
  console.log = () => {
  };
}

// Text Allow Font Scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
