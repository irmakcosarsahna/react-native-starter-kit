// Api
import api from '@services/api';
// Types
import * as Types from './types';
import {requestGenerate} from '../../common';
import {requestActionProps} from '../../common/common.props';

// Company File upload
const actionCompanyFileUpload = (payload: { type: string }, type, callback): requestActionProps => ({
  type: requestGenerate(Types.UPLOAD),
  payload: { data: payload, pushData: { fileName: type } },
  api: api.companyFileUpload,
  config: {
    errorCallback: false,
  },
  callback,
});

// Company File upload
const actionRemoveFile = (payload: any, type, callback): requestActionProps => ({
  type: requestGenerate(Types.REMOVE),
  payload: { data: { id: payload }, pushData: { fileName: type } },
  api: api.fileRemove,
  callback,
});

// Company File get files
const actionGetFiles = (): requestActionProps => ({
  type: requestGenerate(Types.GET),
  api: api.getAllFiles,
  isQueue: false,
});

// Export
export { actionCompanyFileUpload, actionRemoveFile, actionGetFiles };
