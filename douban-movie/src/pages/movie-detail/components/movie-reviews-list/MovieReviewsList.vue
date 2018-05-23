<template>
  <div class="movie-reviews-list">
    <h1 class="title">
      {{ movie.title }}的影评
      <span class="info">(
        <span class="info-item">全部{{ movie.reviews_count }}条</span>)
      </span>
    </h1>
    <ul class="review-list">
      <li class="review-item" v-for="review in reviews" :key="review.id">
        <review-item :review="review"></review-item>
      </li>
    </ul>
    <div class="more-reviews">
      > 更多影评{{ movie.reviews_count }}篇
    </div>
  </div>
</template>

<script>
  import ReviewItem from '../../../../components/review-item/ReviewItem.vue'
  export default {
    name: 'MovieReviewsList',
    props: {
      movie: {
        type: Object,
        default: {}
      },
      reviews: {
        type: Array,
        default: []
      }
    },
    components: {
      ReviewItem
    }
  }
</script>

<style lang="stylus" scoped>
  .movie-reviews-list
    .title
      font-size 15px
      color #087626
      margin 30px 0 15px
      border-bottom 1px solid rgb(238, 238, 238)
      padding-bottom 10px
      .info
        font-weight normal
        color #111
        margin-left 20px
        .info-item
          color #357bb3
          cursor pointer
          transition all .3s
          &:hover
            color #49a9ee
    .more-reviews
      font-size 12px
      color #357bb3
      cursor pointer
      transition all .3s
      margin-bottom 30px
      &:hover
        color #49a9ee
</style>