<template>
  <div class="top250">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="16">
        <loading v-if="!movies.length"></loading>
        <ul class="rank-list" v-else>
          <router-link tag="li" :to="{ name: 'MovieDetail', params: {id: movie.id} }" class="rank-item" v-for="movie in movies" :key="movie.id">
            <movie-list-item>
              <img v-lazy="movie.images.small" alt="" class="image" slot="thumbnail">
              <div class="title" slot="title">{{ movie.title }} / {{ movie.original_title }}</div>
              <div class="info" slot="info">
                {{ movie.pubdates[0] }} <br> 
                导演: {{ stringifyDir(movie.directors) }} <br>
                主演: {{ stringifyCa(movie.casts) }} <br>
                类型: {{ stringifyGe(movie.genres) }}
              </div> 
              <div class="rate" slot="rate">
                <a-rate :defaultValue="movie.rating.average/2" allowHalf disabled/>
                <span class="average">{{ movie.rating.average }}</span> ({{ movie.collect_count }}人评价)
              </div>
            </movie-list-item>
          </router-link>
        </ul>
        <div v-if="movies.length" class="pagination">
          <a-pagination :current="current" :total="100" @change="changePage"/>
        </div>
      </a-col>
      <a-col :span="6">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieListItem from '../../components/movie-list-item/MovieListItem.vue'
  import Loading from '../../components/loading/Loading.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_TOP_250_BY_COUNT } from '../../apis/urls.js'
  import Util from '../../common/js/util.js'

  export default {
    name: 'Top250',
    components: {
      MovieListItem,
      Loading,
      GoTop
    },
    data() {
      return {
        start: 0,
        count: 25,
        movies: [],
        current: 1
      }
    },
    created() {
      this._getTop250(this.start, this.count)
    },
    methods: {
      changePage(current) {
        this.current = current
        this.start = this.count * (this.current - 1)
        this._getTop250(this.start, this.count)
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
      _getTop250(start, count) {
        let url = `${API_TOP_250_BY_COUNT}?start=${start}&count=${count}&apikey=0b2bdeda43b5688921839c8ecb20399b`
        this.movies = []
        getMoviesByUrl(url).then(res => {
          res = res.data
          this.movies = res.subjects
        }).catch(err => {
          this.$message.error('获取Top250数据出错')
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .top250 >>> .ant-rate
    color #e2952b
    font-size 12px
  .top250
    .rank-list
      .rank-item
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