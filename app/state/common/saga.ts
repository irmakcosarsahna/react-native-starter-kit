import {actionChannel, call, put, select, take, takeEvery} from 'redux-saga/effects';
import apiAxios from '@services/api';
import _ from 'lodash';
import NetInfo from '@react-native-community/netinfo';
import {actionAddErrors, actionAddQueue, actionRemoveQueue, actionSuccess} from './actions';
import {ADD_QUEUE} from './types';
import {actionLoginSuccess, actionLogoutSuccess, LOGIN, SOCIAL_LOGIN} from '../auth/user';
import {replace} from '../../utils';
import {configProps, requestActionProps} from './common.props';
import {actionModal} from '../modal';

const configDefault: configProps = {
  errorModal: true,
  errorCallback: true,
  successCallback: true,
  errorMessage: 'errorMessage',
  successMessage: 'successMessage',
};

// Run, Forrest, Run!
function* runJob(props) {
  const { payload, api, callback, requestName, config: _config }: requestActionProps = props;

  const config = {
    ...configDefault,
    ...(_config || {}),
  };
  try {
    // Get payload veriable
    const { data = {}, pushData = {} } = payload || {};

    // Request
    const response = yield api(data);

    if (!_.isUndefined(response)) {
      // Response data Manupulation
      const resData = !pushData ? response || {} : { ...(response || {}), extraData: pushData };
      // Push Success
      if (response) {
        yield call(runSuccess, { requestName, data: resData });
      }

      // Callback
      if (_.isFunction(callback) && config.successCallback) callback({ type: 'SUCCESS', payload: resData });
    }
  } catch (er) {
    // Error Handler
    yield call(errorHandler, { ...er, requestName, callback, config, prevProps: props });
  }
}

// error Handler
function* errorHandler(props) {
  const { msg, status = 0, requestName, callback, config, prevProps = {} } = props || {};

  // Error Handler
  // eslint-disable-next-line radix
  const code = parseInt(status);
  const checkRoute = requestName !== LOGIN && requestName !== SOCIAL_LOGIN;

  if (_.isNumber(code)) {
    switch (code) {
      case 401:
        if (!_.isEmpty(prevProps) && checkRoute) {
          yield call(refreshToken, { requestName, prevProps });
        } else {
          // rediret login
          yield put(actionLogoutSuccess());

          // Callback
          if (typeof callback === 'function' && config.errorCallback)
            callback({
              type: 'FAILURE',
              payload: { msg },
            });

          if (checkRoute) {
            replace('authStack', { screen: 'login', params: { goBack: false } });
          }
        }

        break;
      case 0:
        if (config.errorModal) {
          // Try Later
          yield put(
            actionModal({
              tx: 'tryLater',
            }),
          );
        }
        break;
      default:
        if (typeof callback === 'function' && config.errorCallback) {
          // Callback
          callback({ type: 'FAILURE', payload: { msg } });
        } else {
          // Push set Error
          if (config.errorModal) {
            yield put(
              actionModal({
                text: msg,
              }),
            );
          }
        }
        break;
    }
    yield call(runFailure, { requestName, payload: { msg } });
  }
}

function* refreshToken({ prevProps, requestName }) {
  const { isQueue = false } = prevProps;
  const refresh_token = yield select(({ authUser }) => authUser.refresh_token);
  try {
    if (refresh_token && isQueue) {
      // Request
      const { data } = yield apiAxios.refreshToken(refresh_token) || {};
      if (data) {
        // Push set Queue
        yield put(actionRemoveQueue(requestName));

        yield put(actionLoginSuccess(data));
        yield call(runJob, { ...prevProps, ...{ isQueue: false } });
      }
    } else {
      // Push set Queue
      yield put(actionRemoveQueue(requestName));
    }
  } catch (e) {
    yield call(errorHandler, { ...e, requestName });
  }
}

// Add Queue
function* addQueue(props) {
  yield put(actionAddQueue(props));
}

// Request Success Result
function* runSuccess({ requestName, data }) {
  // Push Success Store
  yield put(actionSuccess(requestName, data));
  // Push set Queue
  yield put(actionRemoveQueue(requestName));

  return true;
}

// Request Failure Result
function* runFailure({ requestName, payload = {} }) {
  // Push set Error
  // yield delay(100)
  yield put(
    actionAddErrors({
      ...payload,
      requestName,
    }),
  );
}

function* watchRequests(props) {
  // Props
  const { api, type, isQueue = true } = props;

  // Regex
  const matches = /(.*)_(REQUEST)/.exec(type);

  if (matches) {
    const [, requestName, matchType] = matches;
    // Type Check :  REQUEST is True
    if (matchType) {
      // Api Function Check
      if (!api && typeof api === 'function')
        throw new Error('Request verileri olması veya bir fonksiyon olması lazım "api"');

      const { isInternetReachable, isConnected } = yield NetInfo.fetch();

      if (isConnected && isInternetReachable !== false) {
        // Is Queue Check, Run or Add queue
        yield call(isQueue ? addQueue : runJob, { ...props, ...{ requestName } });
      } else {
        // Network info
        yield put(
          actionModal({
            tx: 'network.disconnectDesc',
          }),
        );
      }
    }
  }
}

function* requestRootSaga() {
  // All redux action listen
  yield takeEvery('*', watchRequests);
}

function* requestQueueWatch() {
  // only AAD_QUEUE action queue
  const requestQueue = yield actionChannel(ADD_QUEUE);
  while (true) {
    const data = yield take(requestQueue);
    yield call(runJob, { ...data.payload, ...{ isQueue: true } });
  }
}

export { requestRootSaga, requestQueueWatch };
