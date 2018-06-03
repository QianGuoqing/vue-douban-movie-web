<template>
  <div class="reviews-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="14">
        <div class="loading-comments" v-if="!reviews.length">
          载入评论中 请稍后...
        </div>
        <div v-else>
          <ul class="reviews-list">
            <li v-for="review in reviews" :key="review.id">
              <reviews-item :review="review"></reviews-item>
            </li>
          </ul>
          <!-- <div class="pagination-wrapper">
            <a-pagination v-model="current" :total="pageNumbers" @change="pageChange(current)"/>
          </div> -->
        </div>
      </a-col>
      <a-col :span="6"></a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import ReviewsItem from './components/reviews-item/ReviewsItem.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_MOVIE_REVIEWS } from '../../apis/urls.js'
  export default {
    name: 'ReviewsPage',
    components: {
      ReviewsItem
    },
    created() {
      this._getReviewsData(this.id)
    },
    data() {
      return {
        start: 0,
        count: 20,
        movie: {},
        reviews: []
      }
    },
    methods: {
      _getReviewsData(id) {
        let REVIEWS_URL = `${API_MOVIE_REVIEWS}${this.id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(REVIEWS_URL).then(res => {
          res = res.data
          this.reviews = res.reviews
          console.log('reviews', this.reviews)
        }).catch(err => {
          console.log('reviews', err)
        })
      }
    },
    computed: {
      id() {
        return this.$route.params.id 
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>