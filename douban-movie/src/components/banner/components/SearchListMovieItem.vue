<template>
  <div class="search-list-movie-item">
    <img class="poster" v-lazy="movie.images.small" alt="">
    <div class="movie-info">
      <div class="title">{{ movie.title }}</div>
      <div class="year">{{ movie.year }}</div>
      <div class="original-title">{{ movie.original_title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchListMovieItem',
    props: {
      movie: {
        type: Object,
        default() {
          return {}
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .search-list-movie-item
    display flex
    border-bottom 1px solid #ccc
    cursor pointer
    transition all .3s
    &:hover
      background-color #eee
    .poster
      width 40px
      height 60px
      margin 10px
    .movie-info
      .title
        color #3576a8
        font-size 12px
        transition all .3s
        margin-top 10px
        &:hover
          color #108ee9
      .year, .original-title
        font-size 12px
        color #aaa
</style>