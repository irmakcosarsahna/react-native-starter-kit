// Types
import * as Types from './types';
// Helpers
import { successGenerate } from '../../common';
import { authUserProps } from './user.props';

const INIT_STATE: authUserProps = {
  token: '',
  forgetPassword: {},
  resetPassword: {},
};

const authUser = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case successGenerate(Types.LOGIN):
    case successGenerate(Types.SOCIAL_LOGIN):
      return {
        ...state,
        ...(payload?.data || {}),
      };
    case successGenerate(Types.REGISTER):
    case successGenerate(Types.SOCIAL_REGISTER):
    case successGenerate(Types.COMPANY_REGISTER):
      const nState = payload?.data?.token ? payload?.data || {} : {};
      return {
        ...state,
        ...nState,
      };
    case successGenerate(Types.FORGET_PASSWORD):
      return {
        ...state,
        forgetPassword: payload.data,
      };
    case successGenerate(Types.FORGET_PASSWORD_RESET):
      return {
        ...state,
        resetPassword: payload.data,
      };
    default:
      return state;
  }
};

export { authUser };
