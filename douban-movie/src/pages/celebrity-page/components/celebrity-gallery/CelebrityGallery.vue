<template>
  <div class="celebrity-gallery">
    <div class="title">影人图片</div>
    <div class="none" v-if="celebrity.photos.length === 0">暂无</div>
    <ul class="gallery-list" v-else>
      <li class="gallery-item" v-for="photo in celebrity.photos" :key="photo.id">
        <img v-lazy="photo.thumb" class="photo" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CelebrityGallery',
    props: {
      celebrity: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .celebrity-gallery
    .title
      font-size 13px
      color #333d47
      line-height 30px
      margin-top 20px
    .gallery-list
      display flex
      flex-flow wrap
      .gallery-item
        margin-right 2%
        margin-top 1%
        width 110px
        height 110px
        .photo
          width 100%
          height 100%
          object-fit cover
</style>