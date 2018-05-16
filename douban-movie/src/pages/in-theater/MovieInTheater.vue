<template>
  <div class="movie-in-theater">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <a-alert class="info" message="正在上映" type="info"/>
        <div class="movie-card-wrapper">
          <a-card class="movie-card" v-for="movie in movies" :key="movie.id" :loading="!movies.length" style="width: 18%;">
            <img class="image" :src="movie.images.small" alt="">
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
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieCard from '../../components/movie-card/MovieCard.vue'
  import { getMoviesByUrl } from '../../apis/request'
  export default {
    name: 'MovieInTheater',
    components: {
      MovieCard
    },
    data() {
      return {
        movies: []
      }
    },
    created() {
      getMoviesByUrl('/api/movie/in_theaters?count=31').then(res => {
        res = res.data
        this.movies = res.subjects
        console.log('movies', this.movies);
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .movie-in-theater >>> .ant-card-body
    padding 10px
    // display flex
    // flex-direction column
    // align-items stretch
    // justify-content flex-end
  
  .movie-in-theater
    .info
      margin-top 20px
    .movie-card-wrapper
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