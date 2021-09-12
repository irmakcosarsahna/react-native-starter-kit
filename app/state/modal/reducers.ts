import { CLEAR, MAKE_VISIBLE } from './types';

const INIT_STATE = {
  isVisible: false,
};

const modal = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case MAKE_VISIBLE:
      return { ...payload, isVisible: true };
    case CLEAR:
      return INIT_STATE;
    default:
      return state;
  }
};

export { modal };
