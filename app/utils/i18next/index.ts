import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import {en, tr} from './locales';

// the translations
// (tip move them in a JSON file and import them)
const locales = RNLocalize.getLocales();
const langList = ['tr', 'en'];
const resources = { en: { translation: { ...en } }, tr: { translation: { ...tr } } };
const currentLanguage = langList.includes(locales[0].languageCode) ? locales[0].languageCode : 'en';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'tr',
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
