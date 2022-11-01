import { TransactionTypes } from './types';

export const transactionsList = (payload?: any) => {
  const result = {
    type: TransactionTypes.SYSTEM,
    payload,
  };
  return result;
};

export const transactionPostNewTuple = (payload: any) => {
  const result = {
    type: TransactionTypes.TRANSACTIONS_UPLOAD,
    payload,
  };
  return result;
};

export const transactionsSuccess = (payload: any) => {
  const result = {
    type: TransactionTypes.SYSTEM_SUCCESS,
    payload,
  };
  return result;
};

export const transactionsFailure = (payload: any) => ({
  type: TransactionTypes.SYSTEM_FAILURE,
  payload,
});
