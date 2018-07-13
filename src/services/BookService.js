import Api from './Api';

class BookService {
  static get (store, i18n, params = {}) {
    return Api(store, i18n, params).get('books');
  }

  // static register (store, i18n, data, params = {}) {
  //   const combinedData = _.assign({
  //     confirm_success_url: store.state.API_URL
  //   }, data)
  //   return Api(store, i18n, params).post('auth', combinedData)
  // }
}

export default BookService;
