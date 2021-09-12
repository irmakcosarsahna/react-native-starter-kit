const isDev = __DEV__;

// Axios
const REQUEST_URL = 'https://';

// Translation
const SUPPORTED_LANGUAGES = ['tr', 'en'];
const DEFAULT_LANGUAGE = 'tr';
const ACTIVE_TRANSLATION = true;

// Navigation
const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

// Logs
const IGNORE_LOGS = [
    'Require cycle:',
];

export {
    REQUEST_URL,
    ACTIVE_TRANSLATION,
    SUPPORTED_LANGUAGES,
    DEFAULT_LANGUAGE,
    NAVIGATION_PERSISTENCE_KEY,
    IGNORE_LOGS,
};
