<template>
  <div class="search-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="16">
        <ul class="list">
          <li class="list-item" v-for="movie in searchMovieList" :key="movie.id">
            <movie-list-item>
              <img v-lazy="movie.images.small" alt="" class="image" slot="thumbnail">
              <div class="title" slot="title">{{ movie.title }} / {{ movie.original_title }}</div>
              <div class="info" slot="info">
                {{ movie.pubdates[0] }} <br> 导演: {{ stringifyDir(movie.directors) }} <br> 主演: {{ stringifyCa(movie.casts) }} <br> 类型: {{ stringifyGe(movie.genres) }}
              </div>
              <div class="rate" slot="rate">
                <a-rate :defaultValue="movie.rating.average/2" allowHalf disabled/>
                <span class="average">{{ movie.rating.average }}</span> ({{ movie.collect_count }}人评价)
              </div>
            </movie-list-item>
          </li>
        </ul>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script>
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_SEARCH } from '../../apis/urls.js'
  import Util from '../../common/js/util.js'
  import MovieListItem from '../../components/movie-list-item/MovieListItem.vue'
  export default {
    name: 'SearchPage',
    components: {
      MovieListItem
    },
    created() {
      let movieText = this.$store.state.searchMovieText
      console.log('search page text', movieText)
      this._getSearchMovie(movieText)
    },
    data() {
      return {
        searchMovieList: []
      }
    },
    methods: {
      _getSearchMovie(movieText) {
        let MOVIE_URL = `${API_SEARCH}${movieText}&apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(MOVIE_URL).then(res => {
          res = res.data
          this.searchMovieList = res.subjects
          console.log('search page res', res)
          console.log('search page', this.searchMovieList)
        }).catch(err => {
          console.log('search page', err)
        })
      },
      stringifyCa(casts) {
        return Util.stringifyCasts(casts)
      },
      stringifyDir(directors) {
        return Util.stringifyDirectors(directors)
      },
      stringifyGe(genres) {
        return Util.stringifyGenres(genres)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .search-page >>> .ant-rate
    color #e2952b
    font-size 12px
  .search-page
    .list
      .list-item
        padding 15px 10px
        border-bottom 1px dashed #ddd
        cursor pointer
        .title
          font-size 14px
          color #3576aa
          margin-bottom 5px
        .info
          color #666
          margin-bottom 5px
        .rate
          color #666
          .average
            color #e2952b
</style>