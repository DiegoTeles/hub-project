import { AuthTypes } from './types';

export const authRequest = (payload?: any) => {
  console.log('payload :>> ', payload);
  const result = {
    type: AuthTypes.AUTH_REQUEST,
    payload,
  };
  return result;
};

export const authSuccess = (payload: any) => {
  const result = {
    type: AuthTypes.AUTH_SUCCESS,
    payload,
  };
  return result;
};

export const authFailure = (payload: any) => ({
  type: AuthTypes.AUTH_FAILURE,
  payload,
});
