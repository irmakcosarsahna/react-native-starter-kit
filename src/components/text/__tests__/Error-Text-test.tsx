/**
 * @format
 */

import { store } from '@state/ROOT';
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from '../index';

it('renders Error Text', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Text text={'error test'} />
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
