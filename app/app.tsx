import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
// Redux
import { Provider } from 'react-redux';
// Store
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@state/ROOT';
import * as storage from '@utils/storage';
// Navigation
import { enableScreens } from 'react-native-screens';
import { RootNavigator, useNavigationPersistence } from '@navigators';
// I18n
import '@utils/i18next';
// Constants
import { NAVIGATION_PERSISTENCE_KEY } from '@constants';


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
