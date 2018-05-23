<template>
  <div class="new-rank">
    <ul class="rank-list">
      <router-link tag="li" :to="{ name: 'MovieDetail', params: {id: movie.id} }" class="rank-item" v-for="movie in movies" :key="movie.id">
        <movie-list-item>
          <img v-lazy="movie.images.small" alt="" class="image" slot="thumbnail">
          <div class="title" slot="title">{{ movie.title }} / {{ movie.original_title }}</div>
          <div class="info" slot="info">{{ movie.pubdates[0] }} {{ stringifyCa(movie.casts) }}</div>
          <div class="rate" slot="rate">
            <a-rate :defaultValue="movie.rating.average/2" allowHalf disabled/>
            <span class="average">{{ movie.rating.average }}</span> ({{ movie.collect_count }}人评价)
          </div>
        </movie-list-item>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import MovieListItem from '../../../components/movie-list-item/MovieListItem.vue'
  import Util from '../../../common/js/util'
  export default {
    name: 'NewRank',
    components: {
      MovieListItem
    },
    props: {
      movies: {
        type: Array
      },
    },
    methods: {
      stringifyCa(casts) {
        return Util.stringifyCasts(casts)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .new-rank >>> .ant-rate
    color #e2952b
    font-size 12px
  
  .new-rank
    .rank-list
      .rank-item
        padding 15px 10px
        border-bottom 1px dashed #ddd
        .title
          font-size 14px
          color #3576aa
          margin-bottom 5px
          cursor pointer
          transition all .3s
          &:hover
            color #108ee9
        .info
          color #666
          margin-bottom 5px
        .rate
          color #666
          .average
            color #e2952b
</style>