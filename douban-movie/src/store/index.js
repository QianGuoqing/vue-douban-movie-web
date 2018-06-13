import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    searchMovieText: '',
    user: {
      username: 'admin',
      password: 'admin'
    }
  },
  mutations: {
    changeSearchMovieText(state, payload) {
      state.searchMovieText = payload.movie
    },
    registerUser(state, payload) {
      state.user = {
        username: payload.username,
        password: payload.password
      }
    },
    changeLoginStatus(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {

  },
  getters: {

  }
})

export default store