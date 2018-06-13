<template>
  <div class="reviews-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="14">
        <div class="loading-reviews" v-if="!reviews.length">
          载入评论中 请稍后...
        </div>
        <div v-else>
          <ul class="reviews-list">
            <li v-for="review in reviews" :key="review.id">
              <reviews-item :review="review"></reviews-item>
            </li>
          </ul>
          <div class="pagination-wrapper">
            <a-pagination v-model="current" :total="pageNumbers" @change="pageChange(current)"/>
          </div>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="movie-introduction-wrapper">
          <router-link tag="div" :to="{ name: 'MovieDetail', params: { id: movie.id }}" class="to-movie">前往 {{ movie.title }} 的页面</router-link>
          <movie-introduction :movie="movie"></movie-introduction>
        </div>
      </a-col>
      <a-col :span="2">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import ReviewsItem from './components/reviews-item/ReviewsItem.vue'
  import MovieIntroduction from '../movie-detail/components/movie-introduction/MovieIntroduction.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_MOVIE_REVIEWS, API_MOVIE_SUBJECT } from '../../apis/urls.js'
  export default {
    name: 'ReviewsPage',
    components: {
      ReviewsItem,
      MovieIntroduction,
      GoTop
    },
    created() {
      this._getReviewsData(this.id)
      this._getMovieData(this.id)
    },
    data() {
      return {
        start: 0,
        count: 20,
        movie: {},
        reviews: [],
        current: 1,
        pageNumbers: 0,
        reviewsCount: 0,
      }
    },
    methods: {
      pageChange(current) {
        this.reviews = []
        this.start = (this.current - 1) * 20
        this._getReviewsData(this.start, this.count)
      },
      _getReviewsData(id) {
        let REVIEWS_URL = `${API_MOVIE_REVIEWS}${this.id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${this.start}&count=${this.count}`
        getMoviesByUrl(REVIEWS_URL).then(res => {
          res = res.data
          this.reviews = res.reviews
        }).catch(err => {
          thits.$message.error('获取长评信息失败')
        })
      },
      _getMovieData(id) {
        let API_URL = `${API_MOVIE_SUBJECT}${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        this.movie = {}
        getMoviesByUrl(API_URL).then(res => {
          res = res.data
          this.movie = res
          this.reviewsCount = this.movie.reviews_count
          this.pageNumbers = Math.ceil(this.reviewsCount / 20) * 10
        }).catch(err => {
          this.$message.error('获取电影详情信息出错')
        })
      }
    },
    computed: {
      id() {
        return this.$route.params.id 
      }
    },
    activated() {
      this.start = 0
      this.current = 1
      this._getReviewsData(this.start, this.count)
      this._getMovieData(this.id)
    }
  }
</script>

<style lang="stylus" scoped>
  .reviews-page
    .loading-reviews
      width 100%
      padding 10px 0
      background-color #f0f3f5
      color #3576a8
      text-align center
      margin-top 10px
    .reviews-list
      margin-top 30px
    .pagination-wrapper
      margin 10px 0 30px 15px
    .movie-introduction-wrapper
      margin-top 30px
      margin-left 15px
      .to-movie
        font-size 12px
        color #3576a8
        cursor pointer
        transition all .3s
        margin-right 10px
        margin-bottom 10px
        &:hover
          color #108ee9
</style>