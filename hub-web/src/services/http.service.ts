import axios from 'axios';

class HttpService {
  service: any;
  constructor(baseURL: string) {
    const service = axios.create({
      ...(baseURL && { baseURL }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.service = service;
  }

  head(path: string, conf = {}) {
    return this.service
      .head(path, conf)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }

  get(path: string, conf = {}) {
    return this.service
      .get(path, conf)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => {
        Promise.reject(error);
      });
  }

  post(path: string, data = {}, conf = {}) {
    return this.service
      .post(path, data, conf)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }

  put(path: string, data = {}, conf = {}) {
    return this.service
      .put(path, data, conf)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }

  patch(path: string, data = {}, conf = {}) {
    return this.service
      .patch(path, data, conf)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }

  delete(path: string, conf = {}) {
    return this.service
      .delete(path, conf)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  }
}

export default HttpService;