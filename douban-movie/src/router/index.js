import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import MovieInTheater from '../pages/in-theater/MovieInTheater.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/theater',
      name: 'MovieInTheater',
      component: MovieInTheater
    }
  ]
})
