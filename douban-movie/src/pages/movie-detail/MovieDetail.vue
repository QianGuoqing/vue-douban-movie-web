<template>
  <div class="movie-detail">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="14">
        <loading v-if="!movie.title"></loading>
        <div class="movie-detail-wrapper" v-else>
          <movie-title :movie="movie"></movie-title>
          <a-row>
            <a-col :span="17">
              <movie-introduction :movie="movie"></movie-introduction>
            </a-col>
            <a-col :span="7">
              <movie-rate :movie="movie"></movie-rate>
            </a-col>
          </a-row>
          <movie-brief :movie="movie"></movie-brief>
          <movie-avatar-list :movie="movie"></movie-avatar-list>
          <movie-gallery :movie="movie"></movie-gallery>
          <movie-short-comment :movie="movie"></movie-short-comment>
          <movie-reviews-list :movie="movie" :reviews="reviews.slice(0, 10)"></movie-reviews-list>
        </div>
      </a-col>
      <a-col :span="8">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieTitle from './components/movie-title/MovieTitle.vue'
  import MovieRate from './components/movie-rate/MovieRate.vue'
  import MovieIntroduction from './components/movie-introduction/MovieIntroduction.vue'
  import MovieBrief from './components/movie-brief/MovieBrief.vue'
  import MovieAvatarList from './components/movie-avatar-list/MovieAvatarList.vue'
  import MovieGallery from './components/movie-gallery/MovieGallery.vue'
  import MovieShortComment from './components/movie-short-comment/MovieShortComment.vue'
  import MovieReviewsList from './components/movie-reviews-list/MovieReviewsList.vue'
  import Loading from '../../components/loading/Loading.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_MOVIE_SUBJECT, API_MOVIE_REVIEWS } from '../../apis/urls.js'

  export default {
    name: 'MovieDetail',
    data() {
      return {
        movie: {},
        reviews: []
      }
    },
    components: {
      MovieTitle,
      MovieRate,
      MovieIntroduction,
      MovieBrief,
      MovieAvatarList,
      MovieGallery,
      MovieShortComment,
      MovieReviewsList,
      Loading,
      GoTop
    },
    created() {
      this._getData()
    },
    activated() {
      this._getData()
    },
    computed: {
      subjectId() {
        return this.$route.params.id 
      }
    },
    methods: {
      _getData() {
        this.movie = {}
        this.reviews = []
        let id = this.subjectId
        let API_URL = `${API_MOVIE_SUBJECT}${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(API_URL).then(res => {
          res = res.data
          this.movie = res
        }).catch(err => {
          this.$message.error('获取电影详情信息出错')
        })

        let REVIEWS_URL = `${API_MOVIE_REVIEWS}${id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(REVIEWS_URL).then(res => {
          res = res.data
          this.reviews = res.reviews
          console.log('reviews', this.reviews)
        }).catch(err => {
          console.log('reviews', err)
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>