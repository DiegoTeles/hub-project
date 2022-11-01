import { call, put, takeLatest } from 'redux-saga/effects';
import { transactionsSuccess, transactionsFailure } from './actions';
import * as service from './services';

import { TransactionTypes } from './types';

export function* watchGetTransactions() {
  yield takeLatest(TransactionTypes.SYSTEM, getTransactions);
}

export function* watchPostNewTuple() {
  yield takeLatest(
    TransactionTypes.TRANSACTIONS_UPLOAD,
      postTransactions
  )
}

export function* getTransactions(data: any): any {
  try {
    const response = yield call(service.getTransactions, data);
    return yield put(transactionsSuccess(response));
  } catch (error: any) {
    return yield put(transactionsFailure(error.message));
  }
}

export function* postTransactions(data: any): any {
  try {
    const response = yield call(service.postTransactions, data);
    return yield put(transactionsSuccess(response));
  } catch (error: any) {
    return yield put(transactionsFailure(error.message));
  }
}
