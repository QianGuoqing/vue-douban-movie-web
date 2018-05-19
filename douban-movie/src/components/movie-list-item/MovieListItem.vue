<template>
  <div class="movie-list-item">
    <div class="image-wrapper">
      <slot name="thumbnail"></slot>
    </div>
    <div class="content">
      <slot name="title"></slot>
      <slot name="info"></slot>
      <slot name="rate"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MovieListItem'
  }
</script>

<style lang="stylus" scoped>
  .movie-list-item
    display flex
    align-items flex-start
    .image-wrapper
      width 100%
      flex 0 0 15%
      .image
        width 100%
    .content
      margin-left 20px
</style>