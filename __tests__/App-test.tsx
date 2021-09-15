/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from '../app/components';

it('renders Text', () => {
  renderer.create(<Text text={'irmak'} />);
});
