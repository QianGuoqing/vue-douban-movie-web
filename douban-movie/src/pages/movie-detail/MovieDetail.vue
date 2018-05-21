<template>
  <div class="movie-detail">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="14">
        <loading v-if="!movie.title"></loading>
        <div class="movie-detail-wrapper" v-else>
          <movie-title :movie="movie"></movie-title>
          <a-row>
            <a-col :span="17"></a-col>
            <a-col :span="7">
              <movie-rate :movie="movie"></movie-rate>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieTitle from './components/movie-title/MovieTitle.vue'
  import MovieRate from './components/movie-rate/MovieRate.vue'
  import Loading from '../../components/loading/Loading.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_MOVIE_SUBJECT } from '../../apis/urls.js'
  export default {
    name: 'MovieDetail',
    data() {
      return {
        movie: {}
      }
    },
    components: {
      MovieTitle,
      MovieRate,
      Loading
    },
    created() {
      let id = this.subjectId
      let API_URL = `${API_MOVIE_SUBJECT}${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
      getMoviesByUrl(API_URL).then(res => {
        res = res.data
        this.movie = res
        console.log('subject', this.movie)
      }).catch(err => {
        console.log('subject', err)
      })
    },
    computed: {
      subjectId() {
        return this.$route.params.id 
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>