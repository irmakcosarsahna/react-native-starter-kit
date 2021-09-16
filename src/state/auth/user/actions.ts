// Api
import api from '@services/api';
// Types
import * as Types from './types';
import { failureGenerate, requestGenerate, successGenerate } from '../../common';
import { requestActionProps } from '../../common/common.props';

// Login action
const actionLogin = (payload: { email: string; password: string }, callback): requestActionProps => ({
  type: requestGenerate(Types.LOGIN),
  payload: { data: payload },
  api: api.login,
  callback,
});

// Social Login action
const actionSocialLogin = (payload: any, callback): requestActionProps => ({
  type: requestGenerate(Types.SOCIAL_LOGIN),
  payload: { data: payload },
  api: api.socialLogin,
  callback,
});

const actionLoginFailure = () => ({ type: failureGenerate(Types.LOGIN) });

const actionLoginSuccess = (data) => ({ type: successGenerate(Types.LOGIN), payload: { data } });

// Autha ait tüm datayı initiala çek
const actionFlushSuccess = (payload) => ({ type: successGenerate(Types.FLUSH), payload });

// Çıkış
const actionLogoutSuccess = () => ({ type: successGenerate(Types.LOGOUT) });

// Forget Password
const actionForgetPassword = (payload, callback = {}) => ({
  type: requestGenerate(Types.FORGET_PASSWORD),
  api: api.forgetPassword,
  payload,
  callback,
});

// Reset Password
const actionForgetReset = (payload, callback = {}) => ({
  type: requestGenerate(Types.FORGET_PASSWORD_RESET),
  api: api.forgetReset,
  payload,
  callback,
});

// Verify Code
const actionVerifyCode = (payload, callback = {}) => ({
  type: requestGenerate(Types.VERIFY_CODE),
  api: api.verifyCode,
  payload: { data: payload },
  callback,
});

// Register
const actionRegister = (payload, callback = {}) => ({
  type: requestGenerate(Types.REGISTER),
  api: api.register,
  payload: { data: payload },
  callback,
});

// Company Register
const actionCompanyRegister = (payload, callback = {}) => ({
  type: requestGenerate(Types.COMPANY_REGISTER),
  api: api.companyRegister,
  payload: { data: payload },
  callback,
});

// Company activity categories
const actionCompanyActivityCategories = (callback = {}) => ({
  type: requestGenerate(Types.COMPANY_ACTIVITY_CATEGORIES),
  api: api.companyActivityCategories,
  callback,
});

// Company  title
const actionCompanyTitle = (callback = {}) => ({
  type: requestGenerate(Types.COMPANY_TITLE),
  api: api.companyTitle,
  callback,
});

// Company legal update
const actionCompanyLegalUpdate = (payload, callback = {}) => ({
  type: requestGenerate(Types.COMPANY_LEGAL_UPDATE),
  api: api.companyLegalUpdate,
  payload: { data: payload },
  callback,
});

// Company Person Udate
const actionCompanyPersonUpdate = (payload, callback = {}) => ({
  type: requestGenerate(Types.COMPANY_PERSON_UPDATE),
  api: api.companyPersonUpdate,
  payload: { data: payload },
  callback,
});

// Social Register
const actionSocialRegister = (payload, callback = {}) => ({
  type: requestGenerate(Types.SOCIAL_REGISTER),
  api: api.socialRegister,
  payload: { data: payload },
  callback,
});

// Export
export {
  actionLogin,
  actionSocialLogin,
  actionLoginFailure,
  actionLoginSuccess,
  actionFlushSuccess,
  actionLogoutSuccess,
  actionForgetPassword,
  actionForgetReset,
  actionVerifyCode,
  actionRegister,
  actionCompanyRegister,
  actionCompanyLegalUpdate,
  actionCompanyPersonUpdate,
  actionSocialRegister,
  actionCompanyTitle,
  actionCompanyActivityCategories,
};
