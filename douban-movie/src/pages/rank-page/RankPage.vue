<template>
  <div class="rank-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="13">
        <loading v-if="!newMovies.length"></loading>
        <new-rank v-else :movies="newMovies"></new-rank>
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="6">
        <loading v-if="!weeklyMovies.length"></loading>
        <movie-rank title="本周口碑榜" :movies="weeklyMovies"></movie-rank>
        <loading v-if="!usMovies.length"></loading>
        <movie-rank v-else title="北美票房榜" :movies="usMovies" :toggle="false"></movie-rank>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieRank from './components/MovieRank.vue'
  import NewRank from './components/NewRank.vue'
  import Loading from '../../components/loading/Loading.vue'
  import { getMoviesByUrl } from '../../apis/request'
  import { API_WEEKLY, API_US_BOX, API_NEW_MOVIES } from '../../apis/urls'

  export default {
    name: 'RankPage',
    components: {
      MovieRank,
      NewRank,
      Loading
    },
    data() {
      return {
        weeklyMovies: [],
        usMovies: [],
        newMovies: []
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
        console.log('新片榜', this.newMovies)
      }).catch(err => {
        console.log('新片榜', err)
      })
    }
  }
</script>

<style scoped>

</style>