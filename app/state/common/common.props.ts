const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export interface configProps {
  errorModal: boolean;
  errorCallback: boolean;
  successCallback: boolean;
  errorMessage: string;
  successMessage: string;
}

export interface commonProps {
  queue: requestActionProps | {};
  errors: errorsProps | {};
  wait: requestActionProps | {};
}

export interface requestActionProps {
  type: string;
  payload?: {
    data: object;
    pushData?: object;
  };
  isQueue?: boolean;
  api: () => {};
  callback?: (data: callbackProps) => {};
  requestName?: string;
  config?: configProps;
}

export interface callbackProps {
  type: typeof SUCCESS | typeof FAILURE;
  payload: any;
}

export interface errorsProps {
  id: number;
  name: string;
}
