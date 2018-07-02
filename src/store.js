export default {
  state: {
    autoToken: null,
    username: null
  },
  mutations: {
    authenticate: (state, authToken, username) => {
      state.authToken = authToken
      state.username = username
    }
  }
}
