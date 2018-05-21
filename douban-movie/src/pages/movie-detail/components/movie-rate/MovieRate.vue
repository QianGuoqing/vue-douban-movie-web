<template>
  <div class="movie-rate">
    <div class="douban-rate">豆瓣评分</div>
    <div class="score-wrapper">
      <div class="score">{{ movie.rating.average }}</div>
      <div class="star-comments">
        <div class="star">
          <a-rate :defaultValue="movie.rating.average/2" allowHalf disabled/>
        </div>
        <div class="comments">
          已有{{ movie.ratings_count }}人评价
        </div>
      </div>
    </div>
    <ul class="rating-bar-list">
      <li class="rating-bar" v-for="(score, index) in reverseDetails(movie.rating.details)" :key="index">
        <div class="index">{{ 5 - index }}星</div>
        <div class="bar" :style="{width: computePercent(score, movie.rating.details) + '%'}"></div>
        <div class="percent">{{ computePercent(score, movie.rating.details) }}%</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MovieRate',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
    methods: {
      reverseDetails(details) {
        let detailArray = []
        for (let key in details) {
          detailArray.push(details[key])
        }
        return detailArray.reverse()
      },
      computeTotal(details) {
        let total = 0
        for (let key in details) {
          total += details[key]
        }
        return total
      },
      computePercent(score, details) {
        return (score / this.computeTotal(details) * 100).toFixed(1)
      }
    },
    computed: {
      details() {
        let detailArray = []
        let movieDetails = movie.rating.details
        for (let key in movieDetails) {
          detailArray.push(movieDetails[key])
        } 
        return detailArray.reverse()
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-rate >>> .ant-rate
    color #e2952b
    font-size 12px

  .movie-rate
    border-left 1px solid #eaeaea
    padding-left 20px
    .douban-rate
      font-size 12px
      color #a5a5a5
    .score-wrapper
      display flex
      justify-content flex-start
      .score
        font-size 24px
        color #494949
        font-weight bolder
        margin 0 10px 0 0
        vertical-align center
      .star-comments
        .comments
          font-size 12px
          color #3576a8
          cursor pointer
          transition all .3s
          &:hover
            color #108ee9
    .rating-bar-list
      margin-top 10px
      .rating-bar
        display flex
        font-size 12px
        color #a5a5a5
        .bar
          height 10px
          background-color #fed69a 
          vertical-align bottom
          margin 0 10px 0 10px
          position relative
          top 3px
</style>