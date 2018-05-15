<template>
  <div class="home">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="16">正在上映</a-col>
      <a-col :span="4">
        <home-rank :weekly-rank="weeklyRankMovies"></home-rank>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import HomeRank from './components/HomeRank.vue'
  import { getMoviesInTheater } from '../../apis/request'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      HomeRank
    },
    data() {
      return {
        weeklyRankMovies: []
      }
    },
    created() {
      // 获取正在热映电影数据
      getMoviesInTheater().then(res => {
        res = res.data
        console.log(res)
        this.weeklyRankMovies = res.subjects.splice(0, 10)
        console.log('weekly', this.weeklyRankMovies)
      }).catch(err => {
        this.$message.error('网络错误')
      })
    }
  }
</script>

<style scoped>

</style>