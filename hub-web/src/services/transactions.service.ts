import Request from './request.service';

/**
 * Sets the request service
 **/
const api = new Request();

let data = {};

/**
 * Get event amounts
 *
 * @param id - The event id.
 * @param [query] - The url querystring.
 *
 * @return Promise
 */
const getTransactions = (query = {}): Promise<any> => {
  return api.get(`/transaction`, query);
};

const postTransactions = (data: any): Promise<any> => {
  return api.post(`/transaction/upload`, data);
};

/* Constant object to represent Service Functions */
export const transactionService = {
  data,
  getTransactions,
  postTransactions,
};
