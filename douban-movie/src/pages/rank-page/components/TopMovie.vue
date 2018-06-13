<template>
  <div class="top-movie">
    <h1 class="title">豆瓣电影TOP250</h1>
    <ul class="movie-list">
      <router-link tag="li" :to="{ name: 'MovieDetail', params: {id: movie.id} }" class="movie-item" v-for="movie in movies" :key="movie.id">
        <a-tooltip placement="rightTop" >
          <template slot="title">
            <span>{{ movie.title }}</span>
          </template>
          <div class="movie-card">
            <img class="image" v-lazy="movie.images.small" alt="">
            <div class="title">{{ movie.title }}</div>
            <div class="rate">{{ movie.rating.average }}</div>
          </div>
        </a-tooltip>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TopMoive',
    props: {
      movies: {
        type: Array
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .top-movie
    margin-top 30px
    .title
      font-size 18px
      color #087626
    .movie-list
      width 100%
      display flex
      justify-content space-between
      flex-flow wrap 
      .movie-item
        width 24%
        margin-bottom 10px
        cursor pointer
        transition all .3s
        display flex
        flex-direction column-reverse
        justify-content space-between
        align-items center
        &:hover
          box-shadow 0 0 2px #ccc
        .movie-card
          width 100%
          .image
            width 100%
            display block
          .title
            font-size 12px
            color #333
            margin-top 5px
            text-align center
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .rate
            font-size 12px
            text-align center
            color #e2952b
</style>