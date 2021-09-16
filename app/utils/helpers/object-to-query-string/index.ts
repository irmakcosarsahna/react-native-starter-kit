import _ from 'lodash';

const objectToQueryString = (obj: object): string => {
  const results: any[] = [];

  _.forOwn(obj, (value, key) => {
    if (_.isArray(value)) {
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

export { objectToQueryString };
