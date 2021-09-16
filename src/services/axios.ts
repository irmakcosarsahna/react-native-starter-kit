import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '../state/ROOT';
import { MAIN_REQUEST_URL } from '../constants';
import { errorResponseManager } from '../utils';

// Base Url Prefix "/"
export const baseURL = `${MAIN_REQUEST_URL}/`;

// Config
const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

// Instance
const axiosInstance = axios.create(config);

//  Interceptor Request
axiosInstance.interceptors.request.use(async (config) => {
  const { token = '' } = store.getState().authUser || {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// on Ful Filled
const onFulFilled = async (response: AxiosResponse) => {
  return response.data;
};

// on Rejected
const onRejected = async (error: AxiosError) => {
  const { msg, status, data } = errorResponseManager(error);
  return Promise.reject({ msg, status, data });
};

//  Interceptor response
axiosInstance.interceptors.response.use(onFulFilled, onRejected);

export default axiosInstance;
