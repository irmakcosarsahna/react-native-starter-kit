/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import { act, create } from 'react-test-renderer';
import App from '../app/app';

test('Renders App', async () => {
  await act(async () => {
    await create(<App />);
  });
});
