// Constants
import { NAVIGATION_PERSISTENCE_KEY } from '@constants';
// Navigation
import { RootNavigator, useNavigationPersistence } from '@navigators';
import { persistor, store } from '@state/ROOT';
// I18n
import '@utils/i18next';
import * as storage from '@utils/storage';
import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
// Redux
import { Provider } from 'react-redux';
// Store
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <RootNavigator initialState={initialNavigationState} onStateChange={onNavigationStateChange} />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
