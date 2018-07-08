import Api from './Api'
import _ from 'lodash'

class AuthService {
  static login (store, i18n, data, params = {}) {
    return Api(store, i18n, params).post('auth/sign_in', data)
  }

  static register (store, i18n, data, params = {}) {
    const combinedData = _.assign({
      confirm_success_url: store.state.API_URL
    }, data)
    return Api(store, i18n, params).post('auth', combinedData)
  }

  static signOut (store, i18n) {
    return Api(store, i18n).delete('auth/sign_out')
  }
}

export default AuthService
