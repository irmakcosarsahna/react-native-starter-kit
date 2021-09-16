/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from '../index';

it('renders Error Text', () => {
  const component = renderer.create(<Text text={'error test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
