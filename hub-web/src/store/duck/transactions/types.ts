export enum TransactionTypes {
  SYSTEM = '@transactions/SYSTEM_REQUEST',

  TRANSACTIONS_UPLOAD = '@transactions/TRANSACTIONS_UPLOAD',

  SYSTEM_SUCCESS = '@transactions/SYSTEM_SUCCESS',
  SYSTEM_FAILURE = '@transactions/SYSTEM_FAILURE',
  CLEAR_STATUS = '@transactions/CLEAR_STATUS',
}

export interface TransactionTypesState {
  readonly error: string;
  readonly tableList: Array<any>;
}
