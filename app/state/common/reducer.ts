import _ from 'lodash';
import { ADD_ERRORS, ADD_QUEUE, FLUSH_QUEUE, REMOVE_ERRORS, REMOVE_QUEUE } from './types';
import { commonProps } from './common.props';

const INIT_STATE: commonProps = {
  queue: {},
  wait: {},
  errors: {},
};

const omit = (data, key) => _.omit(data, key);

const common = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case FLUSH_QUEUE:
      return { ...state, queue: {} };
    case ADD_QUEUE:
      return {
        ...state,
        errors: omit(state.errors, payload?.key),
        queue: { ...state.queue, [payload.requestName]: { ...payload } },
      };
    case ADD_ERRORS:
      return {
        ...state,
        errors: { ...state.errors, [payload.requestName]: true },
        queue: omit(state.queue, payload?.requestName),
      };
    case REMOVE_ERRORS:
      return { ...state, loading: {}, errors: omit(state.errors, payload), queue: omit(state.queue, payload) };
    case REMOVE_QUEUE:
      return { ...state, errors: omit(state.errors, payload), queue: omit(state.queue, payload) };
    default:
      return state;
  }
};

export { common };
