import axios from 'axios';
import _ from 'lodash';

export default (store, i18n, customParams) => {
  const params = _.assign({
    'locale': i18n.locale(),
  }, customParams);
  const headers = _.assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }, store.state.auth);

  let instance = axios.create({
    baseURL: store.state.API_URL + '/',
    responseType: 'json',
    headers,
    params,
  });

  instance.interceptors.response.use(function (response) {
    if (response.headers['access-token'] !== undefined && response.headers['access-token'].length > 0) {
      store.commit('updateToken', response.headers);
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  return instance;
};
