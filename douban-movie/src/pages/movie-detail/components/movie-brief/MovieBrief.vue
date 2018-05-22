<template>
  <div class="movie-brief">
    <h2 class="title">{{ movie.title }}的剧情简介</h2>
    <div class="summary">{{ movie.summary }}</div>
  </div>
</template>

<script>
  export default {
    name: 'MovieBrief',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-brief
    .title
      font-size 15px
      color #087626
      margin 20px 0 15px
    .summary
      font-size 12px
</style>