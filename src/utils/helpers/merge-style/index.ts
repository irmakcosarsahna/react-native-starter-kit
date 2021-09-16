import _ from 'lodash';

const toObj = (mix: any): object => {
  if (_.isObject(mix) && !_.isEmpty(mix)) {
    return mix;
  }

  return {};
};

// Style merge
const mergeStyle = (...arg: any): object => {
  let tmp,
    obj,
    str = {};

  for (let i = 0; i < _.size(arg); i++) {
    if ((tmp = arg[i])) {
      obj = toObj(tmp);
      if (!_.isEmpty(obj)) {
        str = {
          ...str,
          ...obj,
        };
      }
    }
  }

  return str;
};

export { mergeStyle };
