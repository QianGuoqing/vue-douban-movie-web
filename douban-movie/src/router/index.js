import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import MovieInTheater from '../pages/in-theater/MovieInTheater.vue'
import ComingMovies from '../pages/coming-movies/ComingMovies.vue'
import MoviesInfo from '../pages/movies-info/MoviesInfo.vue'
import RankPage from '../pages/rank-page/RankPage.vue'
import CategroyPage from '../pages/category-page/CategoryPage.vue'
import MovieDetail from '../pages/movie-detail/MovieDetail.vue'
import Top250 from '../pages/top-250/Top250.vue'
import CelebrityPage from '../pages/celebrity-page/CelebrityPage.vue'
import CommentsPage from '../pages/comments-page/CommentsPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
    },
    {
      path: '/rank',
      name: 'RankPage',
      component: RankPage
    },
    {
      path: '/category',
      name: 'CategoryPage',
      component: CategroyPage
    },
    {
      path: '/subject/:id',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/top250',
      name: 'Top250',
      component: Top250
    },
    {
      path: '/celebrity/:id',
      name: 'CelebrityPage',
      component: CelebrityPage
    },
    {
      path: '/subject/comments/:id',
      name: 'CommentsPage',
      component: CommentsPage
    }
  ]
})
