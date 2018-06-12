<template>
  <div class="home">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="15">
        <div class="content">
          <movie-carousel banner-title="正在热映" :hot-movies="hotMovies">
            <router-link to="/theater" tag="div" class="banner-item" slot="more-info">全部正在热映>></router-link>
            <router-link tag="div" to="/coming" class="banner-item" slot="more-info">即将上映>></router-link>
          </movie-carousel>
        </div>
        <div class="content">
          <movie-carousel banner-title="即将上映" :hot-movies="commingMovies"></movie-carousel>
        </div>
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="4">
        <home-rank :weekly-rank="weeklyRankMovies"></home-rank>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieCarousel from './components/movie-carousel/MovieCarousel.vue'
  import HomeRank from './components/home-rank/HomeRank.vue'
  import { getMoviesInTheater, getComingMovie, getMoviesByUrl } from '../../apis/request'
  import { API_WEEKLY } from '../../apis/urls'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      HomeRank,
      MovieCarousel
    },
    data() {
      return {
        weeklyRankMovies: [],
        hotMovies: [],
        commingMovies: []
      }
    },
    created() {
      // 获取正在热映电影数据
      getMoviesInTheater().then(res => {
        res = res.data
        this.hotMovies = res.subjects
      }).catch(err => {
        this.$message.error('获取正在热映电影发生错误')
      })

      // 获取即将上映的电影
      getComingMovie().then(res => {
        res = res.data
        this.commingMovies = res.subjects
      }).catch(err => {
        this.$message.error('获取即将上映电影发送错误')
      })

      // 获取口碑榜
      getMoviesByUrl(API_WEEKLY).then(res => {
        res = res.data
        this.weeklyRankMovies = res.subjects
      }).catch(err => {
        this.$message.error('获取口碑榜数据发生错误')
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    .content
      margin-top 20px
</style>