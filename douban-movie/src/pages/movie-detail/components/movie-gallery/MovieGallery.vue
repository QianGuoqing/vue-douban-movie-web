<template>
  <div class="movie-gallery">
    <h1 class="title">
      {{ movie.title }}的视频和图片
      <span class="info">(
        <span class="info-item">预告片: 99</span> | 
        <span class="info-item">图片: {{ movie.photos_count }}</span> | 
        <span class="info-item">添加图片</span>)
      </span>
    </h1>
    <ul class="list">
      <li class="list-item" v-for="trailer in movie.trailers" :key="trailer.id">
        <img :src="trailer.small" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MovieGallery',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-gallery
    .title
      font-size 15px
      color #087626
      margin 20px 0 15px
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
    .list
      display flex
      .list-item
        margin-right 5px
        cursor pointer
        transition all .3s
        &:hover
          box-shadow 0 0 2px #ccc
</style>