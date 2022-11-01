import { call, put, takeLatest } from 'redux-saga/effects';
import { authSuccess, authFailure } from './actions';
import * as service from './services';

import { AuthTypes } from './types';

export function* watchPostSignin() {
  yield takeLatest(AuthTypes.AUTH_REQUEST, postSignin);
}

export function* postSignin(data: any): any {
  try {
    const { token } = yield call(service.postSigninData, data);
    return yield put(authSuccess(token));
  } catch (error: any) {
    return yield put(authFailure(error.message));
  }
}
