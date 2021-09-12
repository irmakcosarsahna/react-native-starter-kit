import moment from 'moment';
import { Platform } from 'react-native';
import _ from 'lodash';
import 'intl';
import 'intl/locale-data/jsonp/tr';

const createGuid = () =>
  'xxxxxxxx-ICSx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isLoading = (ar = {}, i) => ar[i] !== undefined;

const getErrorMessage = (ar = {}, i) => ar[i]?.error || '';

const logEvent = () => {
  // if (data) {}
  // todo: data push Statistics
};
const setYear = (year) => moment().subtract(year, 'years').toDate();

const imgRefactor = (image) => {
  const { uri, type } = Platform.select({
    ios: { uri: `file://${image.path}`, type: image.mime },
    android: { uri: image.path, type: image.mime },
  });
  const pathParts = image.path.split('/');
  return { uri, type, name: `${pathParts[pathParts.length - 1]}` };
};

const imageUploadNameReplace = (images) => {
  const isArray = _.isArray(images);

  if (!isArray) return imgRefactor(images);

  let res = [];

  images.forEach((r) => {
    const call = imgRefactor(r);
    res = [...res, call];
  });

  return res;
};

const objectToQueryString = (obj) => {
  const results = [];
  _.forOwn(obj, (value, key) => {
    if (Array.isArray(value)) {
      _.forOwn(value, (value) => {
        if (value) {
          results.push(`${key}=${value}`);
        }
      });
    } else if (value) {
        results.push(`${key}=${value}`);
      }
  });
  return results.join('&');
};

const getCurrencyFormat = (number) => {
  const locale = 'de-DE';
  const currency = 'TRY';

  let result = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number);

  result = _.replace(result, currency, '₺');

  return result;
};

export {
  objectToQueryString,
  getRandomInt,
  createGuid,
  isLoading,
  getErrorMessage,
  logEvent,
  setYear,
  imageUploadNameReplace,
  getCurrencyFormat,
};
