<template>
  <div class="rank-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="13">
        <div class="title">
          <h1>豆瓣电影排行榜</h1>
          <h2>豆瓣新片榜</h2>
        </div>
        <loading v-if="!newMovies.length"></loading>
        <new-rank v-else :movies="newMovies"></new-rank>
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="6">
        <loading v-if="!weeklyMovies.length"></loading>
        <movie-rank title="本周口碑榜" :movies="weeklyMovies"></movie-rank>
        <loading v-if="!usMovies.length"></loading>
        <movie-rank v-else title="北美票房榜" :movies="usMovies" :toggle="false"></movie-rank>
        <loading v-if="!topMovies.length"></loading>
        <top-movie v-else :movies="topMovies"></top-movie>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieRank from './components/MovieRank.vue'
  import NewRank from './components/NewRank.vue'
  import TopMovie from './components/TopMovie.vue'
  import Loading from '../../components/loading/Loading.vue'
  import { getMoviesByUrl } from '../../apis/request'
  import { API_WEEKLY, API_US_BOX, API_NEW_MOVIES, API_TOP_250 } from '../../apis/urls'

  export default {
    name: 'RankPage',
    components: {
      MovieRank,
      NewRank,
      TopMovie,
      Loading
    },
    data() {
      return {
        weeklyMovies: [],
        usMovies: [],
        newMovies: [],
        topMovies: []
      }
    },
    created() {
      getMoviesByUrl(API_WEEKLY).then(res => {
        res = res.data
        this.weeklyMovies = res.subjects
      }).catch(err => {
        this.$message.error('获取本周口碑数据发生错误')
      })
      getMoviesByUrl(API_US_BOX).then(res => {
        res = res.data
        this.usMovies = res.subjects
      }).catch(err => {
        this.$message.error('获取北美票房数据发生错误')
      })
      getMoviesByUrl(API_NEW_MOVIES).then(res => {
        res = res.data
        this.newMovies = res.subjects
      }).catch(err => {
        this.$message.error('获取新片榜数据发生错误')
      })
      getMoviesByUrl(API_TOP_250).then(res => {
        res = res.data
        this.topMovies = res.subjects
        console.log('top250', this.topMovies)
      }).catch(err => {
        console.log('top250', err)
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    margin-top 20px
    padding 10px 0 0 10px
    border-bottom 1px dashed #ddd
    h1
      font-size 24px
    h2
      font-size 18px
      color #087626
</style>