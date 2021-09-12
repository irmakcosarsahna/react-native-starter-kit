import { ADD_ERRORS, ADD_QUEUE, CLEAR, FLUSH_QUEUE, REMOVE_ERRORS, REMOVE_QUEUE } from './types';
import { failureGenerate, requestGenerate, successGenerate } from './helpers';

const actionClear = (payload = {}) => ({ type: CLEAR, payload });

// Errors
const actionAddErrors = (payload = {}) => ({ type: ADD_ERRORS, payload });
const actionRemoveErrors = (payload = {}) => ({ type: REMOVE_ERRORS, payload });

// Queue
const actionAddQueue = (payload = {}) => ({ type: ADD_QUEUE, payload });
const actionRemoveQueue = (payload = {}) => ({ type: REMOVE_QUEUE, payload });
const actionFlushQueue = () => ({ type: FLUSH_QUEUE });

// Global
const actionSuccess = (type, payload = {}) => ({ type: successGenerate(type), payload });
const actionFailure = (type, payload = {}) => ({ type: failureGenerate(type), payload });
const actionRequest = (type, payload = {}) => ({ type: requestGenerate(type), payload });

export {
  actionClear,
  actionFlushQueue,
  actionAddErrors,
  actionSuccess,
  actionRemoveErrors,
  actionFailure,
  actionAddQueue,
  actionRemoveQueue,
  actionRequest,
};
