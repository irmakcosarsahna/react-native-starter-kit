import axios from 'axios';
import _ from 'lodash';
import perf from '@react-native-firebase/perf';
import { store } from '../state/ROOT';
import { REQUEST_URL } from '../constants';

// Base Url Prefix "/"
export const baseURL = `${REQUEST_URL}/`;

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

  try {
    const httpMetric = perf().newHttpMetric(config.url, config.method);
    config.metadata = { httpMetric };

    if (!_.isEmpty(user)) {
      // add any extra metric attributes if needed
      httpMetric.putAttribute('userId', user?.id);
    }

    await httpMetric.start();
  } finally {
    return config;
  }
});

// on Ful Filled
const onFulFilled = async (response) => {
  try {
    const { user = {} } = store.getState().authUser || {};

    // Request was successful, e.g. HTTP code 200
    const { httpMetric } = response.config.metadata;

    if (!_.isEmpty(user)) {
      // add any extra metric attributes if needed
      httpMetric.putAttribute('userId', user?.id);
    }

    httpMetric.setHttpResponseCode(response.status);
    httpMetric.setResponseContentType(response.headers['content-type']);
    await httpMetric.stop();
  } finally {
    return response.data;
  }
};

// on Rejected
const onRejected = async (error) => {
  try {
    const { user = {} } = store.getState().authUser || {};

    // Request was error
    const { httpMetric } = error.config.metadata;

    if (!_.isEmpty(user)) {
      // add any extra metric attributes if needed
      httpMetric.putAttribute('userId', user?.id);
    }

    httpMetric.setHttpResponseCode(error.response.status);
    httpMetric.setResponseContentType(error.response.headers['content-type']);
    await httpMetric.stop();
  } finally {
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
  }
};

//  Interceptor response
axiosInstance.interceptors.response.use(onFulFilled, onRejected);
export default axiosInstance;
