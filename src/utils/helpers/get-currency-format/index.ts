import _ from 'lodash';
import 'intl';
import 'intl/locale-data/jsonp/tr';

const getCurrencyFormat = (number: number, currency = 'TRY'): String => {
  const locale = 'de-DE';

  let result = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number);

  result = _.replace(result, currency, '₺');

  return result;
};

export { getCurrencyFormat };
