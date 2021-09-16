import * as Types from './types';

const actionModal = (payload) => ({
  type: Types.MAKE_VISIBLE,
  payload,
});

const actionClearModal = () => ({
  type: Types.CLEAR,
});

export { actionModal, actionClearModal };
