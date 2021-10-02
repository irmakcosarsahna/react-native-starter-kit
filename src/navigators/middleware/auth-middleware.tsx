import { useEffect } from 'react';
// Packages
import SplashScreen from 'react-native-splash-screen';
import { HOME_SCREEN, WELCOME_SCREEN } from '@constants';
import * as yup from 'yup';
// Translation
import { useTranslation } from 'react-i18next';
// Redux
import { useSelector } from 'react-redux';

// Start
const StartMiddleware = ({ navigation }) => {
  // Translations
  const { t } = useTranslation();

  //  Auth state
  const { token } = useSelector(({ authUser }) => authUser);

  // Yup set config
  yup.setLocale(t('_validations', { returnObjects: true }) || {});

  useEffect(() => {
    // Check login
    if (token) {
      // navigation.replace('authStack', { screen: 'individualDocs', params: { goBack: false } });
      navigation.replace(HOME_SCREEN);
    } else {
      navigation.replace(WELCOME_SCREEN);
    }
    // Hide Splash
    SplashScreen.hide();
  }, []);
  return null;
};

export { StartMiddleware };
