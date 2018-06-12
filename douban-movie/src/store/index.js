import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchMovieText: ''
  },
  mutations: {
    changeSearchMovieText(state, payload) {
      state.searchMovieText = payload.movie
    }
  },
  actions: {

  },
  getters: {

  }
})

export default store