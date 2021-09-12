import { all } from 'redux-saga/effects';
import { requestQueueWatch, requestRootSaga } from '../../common';

export default function* Sagas() {
  yield all([requestRootSaga(), requestQueueWatch()]);
}
