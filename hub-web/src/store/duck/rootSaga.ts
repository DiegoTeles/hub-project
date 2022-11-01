import { all } from 'redux-saga/effects';
import { watchGetTransactions, watchPostNewTuple } from './transactions/sagas';
import { watchPostSignin } from './auth/sagas';

export default function* rootSaga(): any {
  return yield all([
    watchGetTransactions(),
    watchPostNewTuple(),
    watchPostSignin(),
  ]);
}
