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
