const API_URL = process.env.API_URL
export default {
  state: {
    autoToken: null,
    username: null,
    API_URL: API_URL
  },
  mutations: {
    authenticate: (state, authToken, username) => {
      state.authToken = authToken
      state.username = username
    }
  }
}
