import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const { EventEmitter } = require('events');
  return EventEmitter;
});
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    { countryCode: "TR", languageTag: "tr-TR", languageCode: "tr", isRTL: false },
    { countryCode: "US", languageTag: "en-US", languageCode: "en", isRTL: false },
    { countryCode: "FR", languageTag: "fr-FR", languageCode: "fr", isRTL: false },
  ],

  getNumberFormatSettings: () => ({
    decimalSeparator: ".",
    groupingSeparator: ",",
  }),

  getCalendar: () => "gregorian", // or "japanese", "buddhist"
  getCountry: () => "US", // the country code you want
  getCurrencies: () => ["USD", "EUR"], // can be empty array
  getTemperatureUnit: () => "celsius", // or "fahrenheit"
  getTimeZone: () => "Europe/Paris", // the timezone you want
  uses24HourClock: () => true,
  usesMetricSystem: () => true,

  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
