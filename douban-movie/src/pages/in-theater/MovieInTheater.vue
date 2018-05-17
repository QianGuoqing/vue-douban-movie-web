<template>
  <div class="movie-in-theater">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <a-alert class="info" message="正在上映" type="info"/>
        <div class="loading" v-if="!movies.length">
          <img src="../../assets/images/loading/loading-bars.svg" alt="">
        </div>
        <div class="movie-card-wrapper" v-else>
          <a-popover placement="rightTop" v-for="movie in movies" :key="movie.id" style="width: 18%;" trigger="hover">
            <template slot="content">
              <div class="pop-movie">
                <p>{{ movie.title }} {{ movie.original_title }}</p>
                <p>评分: <a-rate :defaultValue="movie.rating.average/2" disabled allowHalf/>{{movie.rating.average}}分</p>
                <p>导演: {{ stringifyDir(movie.directors) }}</p>
                <p>演员: {{ stringifyCa(movie.casts) }}</p>
                <p>类型: {{ stringifyGe(movie.genres) }}</p>
              </div>
            </template>
            <div>
              <a-card class="movie-card">
                <img class="image" v-lazy="movie.images.small" alt="">
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
          </a-popover>
        </div>
      </a-col>
      <a-col :span="2">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieCard from '../../components/movie-card/MovieCard.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request'
  import Util from '../../common/js/util'
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
    methods: {
      stringifyDir(directors) {
        return Util.stringifyDirectors(directors)
      },
      stringifyCa(casts) {
        return Util.stringifyCasts(casts)
      },
      stringifyGe(genres) {
        return Util.stringifyGenres(genres)
      }
    },
    components: {
      GoTop,
      MovieCard
    },
    created() {
      getMoviesByUrl('/api/movie/in_theaters?count=31').then(res => {
        res = res.data
        this.movies = res.subjects
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .movie-in-theater >>> .ant-card-body
    padding 10px
    display flex
    flex-direction column
    align-items stretch
    justify-content flex-end
  
  .movie-in-theater
    .info
      margin-top 20px
    .loading
      text-align center
      font-size 120px
    .movie-card-wrapper
      display flex
      flex-flow wrap
      justify-content space-between
      margin-top 20px
      align-items flex-end
      .movie-card
        // align-self stretch
        margin-bottom 20px
        transition all .3s
        cursor pointer
        // display inline 
        // flex-direction column 
        // justify-content space-between
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
            color #df912b
            margin-top 5px
          .choose-button
            display block
            margin 5px auto
</style>