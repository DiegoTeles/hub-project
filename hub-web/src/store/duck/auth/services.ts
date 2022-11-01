import Request from '../../../services/request.service';
import Cookies from 'js-cookie';
const api = new Request();

interface Payload {
  email: string;
  password: number;
}

interface Params {
  payload: Payload;
}

export const postSigninData = async ({ payload }: Params) => {
  try {
    let response = await api.post(`/auth/signin`, payload); 
    if (response.token) {
      Cookies.set('token', response.token);
    }
    return response;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 404) return null;
      throw Error(error.response.data.message);
    }
    throw Error(error.message);
  }
};
