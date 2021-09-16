const isDev = __DEV__;

// Axios
const MAIN_REQUEST_URL = 'https://';

// Translation
const SUPPORTED_LANGUAGES = ['tr', 'en'];
const DEFAULT_LANGUAGE = 'tr';
const I18NEXT_DEBUG = false;
const FALLBACK_LANGUAGE = 'tr';
const ACTIVE_TRANSLATION = true;

// Navigation
const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

// Global
const GLOBAL_REQUEST_ERROR_MESSAGE = 'common.request_error_message';
const GOOGLE_API_KEY = '';
const MAP_INFO = { latitudeDelta: 0.004, longitudeDelta: 0.004, latitude: 41.03, longitude: 28.98 };

export {
  MAIN_REQUEST_URL,
  FALLBACK_LANGUAGE,
  ACTIVE_TRANSLATION,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  I18NEXT_DEBUG,
  NAVIGATION_PERSISTENCE_KEY,
  GLOBAL_REQUEST_ERROR_MESSAGE,
};
