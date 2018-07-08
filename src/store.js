const API_URL = process.env.API_URL

let storage = localStorage.getItem('authObject') ? localStorage : sessionStorage

const auth = JSON.parse(storage.getItem('authObject') || '{}')
const user = JSON.parse(storage.getItem('userObject') || '{}')

export default {
  state: {
    authStorage: storage,
    API_URL: API_URL,
    user,
    auth
  },
  mutations: {
    authenticate (state, response) {
      state.user = response.data.data
      state.authStorage.setItem('userObject', JSON.stringify(state.user))
      this.commit('updateToken', response.headers)
    },
    updateToken (state, headers) {
      state.auth['access-token'] = headers['access-token']
      state.auth['token-type'] = headers['token-type']
      state.auth['uid'] = headers['uid']
      state.auth['client'] = headers['client']
      state.auth['expiry'] = headers['expiry']
      state.authStorage.setItem('authObject', JSON.stringify(state.auth))
    },
    deauthenticate (state) {
      state.user = {}
      state.token = {}
      state.auth = {}
      state.authStorage.removeItem('authObject')
      state.authStorage.removeItem('userObject')
    },
    rememberAuth (state, flag) {
      state.authStorage = flag ? localStorage : sessionStorage
    },
    setBooks (state, books) {
      state.books = books
    }
  }
}
