import './utils/helpers/ignore-warnings';
import React from 'react';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';
// Modules
import {Provider} from 'react-redux';

// Store
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@state/ROOT';
import {enableScreens} from 'react-native-screens';
import moment from 'moment';
import {RootNavigator, useNavigationPersistence} from './navigators';
import * as storage from './utils/storage';
// I18n
import '@utils/i18next';
import 'moment/locale/tr';

moment.locale('tr');

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

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
