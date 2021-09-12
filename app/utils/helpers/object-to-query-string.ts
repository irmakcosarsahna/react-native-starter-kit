import _ from 'lodash';

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


export {objectToQueryString}
