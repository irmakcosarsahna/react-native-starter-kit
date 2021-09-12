// Types
// Helpers

import _ from 'lodash';
import {successGenerate} from '../../common';
import * as Types from '../files/types';

const INIT_STATE = {
  files: {},
};

const authFiles = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case successGenerate(Types.GET):
      return {
        ...state,
        files: arrayConvertToObject(payload?.data),
      };
    case successGenerate(Types.UPLOAD):
      const { fileName } = payload.extraData;
      const { id, name, path } = payload?.data;

      const cFile = _.get(state.files, fileName) || [];

      return {
        ...state,
        files: {
          ...(state.files || {}),
          [fileName]: [
            {
              id,
              name,
              path,
            },
          ],
        },
      };
    case successGenerate(Types.REMOVE):
      const { fileName: fName } = payload.extraData;
      const current = _.get(state?.files || {}, fName) || [];

      return {
        ...state,
        files: {
          ...state.files,
          [fName]: _.filter(current, (r) => r.id !== payload.data?.id),
        },
      };
    default:
      return state;
  }
};

const arrayConvertToObject = (arr) => {
  let data = {};

  // Result
  _.map(arr, (datum) => {
    const { name: fileName, id, path, text } = datum || {};

    if (fileName) {
      data = {
        ...data,
        [fileName]: [
          ...(data[fileName] || []),
          {
            id,
            fileName,
            path,
          },
        ],
      };
    }
  });

  return data;
};

export { authFiles };
