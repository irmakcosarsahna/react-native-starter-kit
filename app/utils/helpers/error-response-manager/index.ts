import _ from 'lodash';
import { GLOBAL_REQUEST_ERROR_MESSAGE } from '@constants';
import { AxiosError } from 'axios';

const errorResponseManager = ({ response }: AxiosError): { msg: string; status: number; data?: object } => {
  const { data = {}, status = 0 } = response || {};

  let msg = GLOBAL_REQUEST_ERROR_MESSAGE;

  if (!_.isEmpty(data)) {
    const { message = '' } = _.isEmpty(data?.data) ? data : data?.data;

    if (_.isString(message)) {
      msg = message;
    } else if (_.isObject(message)) {
      Object.values(message).map((m, i) => (msg = msg + (i > 0 ? '.' : '') + m));
    }
  }

  return { msg, data, status };
};

export { errorResponseManager };
