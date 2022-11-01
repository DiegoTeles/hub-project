import Request from '../../../services/request.service';
const api = new Request();

interface Payload {
  seller?: string;
  rowsPerPage?: number;
  currentPage?: number;
}

interface Params {
  payload: Payload;
}

export const getTransactions = async ({ payload }: Params) => {
  const params = {
    seller: payload.seller?.toUpperCase().trim() || '',
    page: payload.currentPage,
    limit: payload.rowsPerPage,
  };

  try {
    let response = await api.get('/transaction', params);

    return response;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 404) return null;
      throw Error(error.response.data.message);
    }
    throw Error(error.message);
  }
};

export const postTransactions = async (data: any) => {
  try {
    let response = await api.post(`/transaction/upload`, data.payload);

    return response;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 404) return null;
      throw Error(error.response.data.message);
    }
    throw Error(error.message);
  }
};
