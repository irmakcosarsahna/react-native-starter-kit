import axios from 'axios';
import _ from 'lodash';
import { store } from '../state/ROOT';
import { MAIN_REQUEST_URL } from '../constants';

// Base Url Prefix "/"
export const baseURL = `${MAIN_REQUEST_URL}/`;

// Instancegm
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

//  Interceptor Request
axiosInstance.interceptors.request.use(async (config) => {
  const { token = '', user = {} } = store.getState().authUser || {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});

// on Ful Filled
const onFulFilled = async (response) => {
  return response.data;

};

// on Rejected
const onRejected = async (error) => {
    let msg = '';
    const { data = {}, status = 0 } = error?.response || {};
    if (data) {
      const { message = '' } = _.isEmpty(data?.data) ? data : data?.data;

      if (_.isString(message)) {
        msg = message;
      } else if (_.isObject(message)) {
        Object.values(message).map((m, i) => (msg = msg + (i > 0 ? '.' : '') + m));
      }
    }
    if (!msg) {
      msg = 'Something went wrong';
    }
    return Promise.reject({ msg, status, data });
  };

//  Interceptor response
axiosInstance.interceptors.response.use(onFulFilled, onRejected);
export default axiosInstance;
