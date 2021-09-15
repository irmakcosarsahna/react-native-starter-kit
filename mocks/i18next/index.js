jest.mock('i18next', () => ({
  init: (a) => ({
    lng: 'tr',
    saveMissing: false,
    appendNamespaceToCIMode: false,
    nsSeparator: false,
    keySeparator: '.',
    ns: ['translation'],
    defaultNS: 'translation',
    react: { useSuspense: false, bindI18n: 'languageChanged loaded' },
    interpolation: { escapeValue: false, formatSeparator: ',' },
    fallbackLng: 'tr',
    debug: true,
    resources: { en: { translations: {} } },
  }),
  use: (b) => ({
    init: () => {
    },
  }),
  t: k => k,
}));

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {
        }),
      },
    };
  },
}));
