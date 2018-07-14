import Api from './Api';

class CategoryService {
  static get (store, i18n, params = {}) {
    return Api(store, i18n, params).get('categories');
  }
}

export default CategoryService;
