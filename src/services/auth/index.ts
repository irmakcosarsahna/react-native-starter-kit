import _ from 'lodash';
import ax from '../axios';
import { AxiosResponse } from 'axios';

// Post Login
const login = (data: { email: string; password: string }) => ax.post(`/login`, data);

// Post Login
const socialLogin = ({ type, accessToken, uid }) =>
  ax.post(`/social-login`, { type: _.lowerCase(type), accessToken, uid });

// Forget Pasword
const forgetPassword = (data: { email: string }) => ax.post(`/forgot-password`, data);

// RefresH Token
const refreshToken = (refresh_token: string) => ax.post(`/refresh-login`, { refresh_token });

// Reset Password
const forgetReset = (data) => ax.post(`/password-reset`, data);

// Verify code
const verifyCode = (data) => ax.post(`/verify-code`, data);

export { login, forgetPassword, forgetReset, verifyCode, refreshToken, socialLogin };
