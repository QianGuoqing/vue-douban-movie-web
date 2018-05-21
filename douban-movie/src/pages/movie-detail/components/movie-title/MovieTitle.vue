<template>
  <h1 class="title">
    {{ movie.title }} {{ movie.original_title }}
    <span class="year">({{ movie.year }})</span>
  </h1>
</template>

<script>
  export default {
    name: 'MovieTitle',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .title
    font-size 30px
    color #494949
    .year
      color #888
</style>