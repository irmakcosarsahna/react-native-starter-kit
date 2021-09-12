/**
 * Irmak Coşar Şahna
 * Mustafa Uysal
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// Ignore warning
import '@utils/helpers/ignore-warnings';
// Set Veriables or Load Functions
import '@utils/helpers/set-global-veriables';

AppRegistry.registerComponent(appName, () => App);
