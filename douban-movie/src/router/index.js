import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import MovieInTheater from '../pages/in-theater/MovieInTheater.vue'
import ComingMovies from '../pages/coming-movies/ComingMovies.vue'
import MoviesInfo from '../pages/movies-info/MoviesInfo.vue'

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
    },
    {
      path: '/coming',
      name: 'ComingMovies',
      component: ComingMovies
    },
    {
      path: '/movies-info',
      name: 'MoviesInfo',
      component: MoviesInfo
    }
  ]
})
