import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('../pages/home/Home.vue')
    },
    {
      path: '/theater',
      name: 'MovieInTheater',
      component: () => import('../pages/in-theater/MovieInTheater.vue')
    },
    {
      path: '/coming',
      name: 'ComingMovies',
      component: () => import('../pages/coming-movies/ComingMovies.vue')
    },
    {
      path: '/movies-info',
      name: 'MoviesInfo',
      component: () => import('../pages/movies-info/MoviesInfo.vue')
    },
    {
      path: '/rank',
      name: 'RankPage',
      component: () => import('../pages/rank-page/RankPage.vue')
    },
    {
      path: '/category',
      name: 'CategoryPage',
      component: () => import('../pages/category-page/CategoryPage.vue')
    },
    {
      path: '/subject/:id',
      name: 'MovieDetail',
      component: () => import('../pages/movie-detail/MovieDetail.vue')
    },
    {
      path: '/top250',
      name: 'Top250',
      component: () => import('../pages/top-250/Top250.vue')
    },
    {
      path: '/celebrity/:id',
      name: 'CelebrityPage',
      component: () => import('../pages/celebrity-page/CelebrityPage.vue')
    },
    {
      path: '/subject/comments/:id',
      name: 'CommentsPage',
      component: () => import('../pages/comments-page/CommentsPage.vue')
    },
    {
      path: '/subject/reviews/:id',
      name: 'ReviewsPage',
      component: () => import('../pages/reviews-page/ReviewsPage.vue')
    },
    {
      path: '/search-movie',
      name: 'SearchPage',
      component: () => import('../pages/search-page/SearchPage.vue')
    },
    {
      path: '/user-center',
      name: 'UserCenter',
      component: () => import('../pages/user-center/UserCenter.vue')
    }
  ]
})
