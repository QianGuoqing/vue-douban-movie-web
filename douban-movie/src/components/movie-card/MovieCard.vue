<template>
  <div class="movie-card-w">
    <a-card class="movie-card" v-for="movie in movies" :key="movie.id" style="width: 18%;">
      <img class="image" v-lazy="movie.images.small" alt="">
      <div class="content">
        <div class="title">{{ movie.title }}</div>
        <div class="rate" v-if="movie.rating.average">
          {{ movie.rating.average }}分
        </div>
        <div class="rate" v-else>暂无评分</div>
        <a-button type="primary" size="small" class="choose-button">选座购票</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
  export default {
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-card-w
    display flex
    flex-flow wrap
    justify-content space-between
    margin-top 20px
    .movie-card
      // align-items stretch
      margin-bottom 20px
      transition all .3s
      cursor pointer
      position relative
      display flex
      flex-direction column
      justify-content flex-end
      &:hover
        box-shadow 0 0 5px #ccc
        transform translateY(-5px)
      .image
        width 100%
        display block
      .content
        .title
          margin-top 10px
          width 100%
          text-align center
          font-size 12px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          text-align center
        .rate
          font-size 12px
          text-align center
          font-weight 700
          color #f30
          margin-top 5px
        .choose-button
          display block
          margin 5px auto
</style>