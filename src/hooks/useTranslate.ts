import React from 'react';
import { useTranslation } from 'react-i18next';
import { ACTIVE_TRANSLATION } from '@constants';

const useTranslate = (text = '') => {
  const { t } = useTranslation();

  return React.useMemo(() => {
    if (ACTIVE_TRANSLATION) {
      return t(text);
    }

    return text;
  }, [text, t]);
};

export { useTranslate };
