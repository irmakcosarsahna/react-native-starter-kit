import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { en, tr } from './locales';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../../constants';
import _ from 'lodash';

// Resources
const resources = { en: { translation: { ...en } }, tr: { translation: { ...tr } } };

// Device Languages
const locales = RNLocalize.getLocales();
// Get Device Language Code
const deviceLanguageCode = _.get(locales, [0, 'languageCode']);
// Check support language
const currentLanguage = SUPPORTED_LANGUAGES.includes(deviceLanguageCode) ? deviceLanguageCode : DEFAULT_LANGUAGE;

i18n
  .use(initReactI18next)
  .init({
          resources,
          lng: currentLanguage,
          saveMissing: false,
          appendNamespaceToCIMode: false,
          nsSeparator: false,
          keySeparator: '.',
          ns: ['translation'],
          defaultNS: 'translation',
          react: { useSuspense: false, bindI18n: 'languageChanged loaded' },
          interpolation: { escapeValue: false, formatSeparator: ',' },
  });

export default i18n;
