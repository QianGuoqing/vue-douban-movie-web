<template>
  <div class="home">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="15">
        <div class="content">
          <movie-carousel banner-title="正在热映" :hot-movies="hotMovies">
            <div class="banner-item" slot="more-info">全部正在热映>></div>
            <div class="banner-item" slot="more-info">即将上映>></div>
          </movie-carousel>
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
  import { getMoviesInTheater } from '../../apis/request'
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
        hotMovies: []
      }
    },
    created() {
      // 获取正在热映电影数据
      getMoviesInTheater().then(res => {
        res = res.data
        console.log(res)
        this.hotMovies = res.subjects
        this.weeklyRankMovies = res.subjects.slice(0).splice(0, 10)
        console.log('hot',this.hotMovies)
      }).catch(err => {
        this.$message.error('网络错误')
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    .content
      margin-top 30px
</style>