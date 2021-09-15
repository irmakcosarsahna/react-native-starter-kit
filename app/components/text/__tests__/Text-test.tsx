/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from '../index';

it('renders Text', () => {
  const component = renderer.create(<Text text={'test'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
