<template>
  <div class="movie-card">
    <img class="image" :src="movie.images.small" alt="">
    <div class="content">
      <div class="title">{{ movie.title }}</div>
      <div class="rate" v-if="movie.rating.average">
        {{ movie.rating.average }}分
      </div>
      <div class="rate" v-else>暂无评分</div>
      <a-button type="primary" size="small" class="choose-button">选座购票</a-button>
    </div>
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
  .movie-card
    align-items stretch
    border 1px solid #ddd
    padding 5px
    transition all .3s
    cursor pointer
    position relative
    display flex
    flex-direction column
    justify-content space-between
    &:hover
      box-shadow 0 0 5px #ccc
      transform translateY(-5px)
    .image
      width 100%
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