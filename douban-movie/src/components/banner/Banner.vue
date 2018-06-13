<template>
  <div class="banner">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="search">
          <router-link to="/" tag="div" class="title">豆瓣电影</router-link>
          <div class="search-input">
            <div class="form-group">
              <input class="search-movie-input form-control" placeholder="搜索电影、电视剧、综艺、影人" style="width: 400px" @keyup.enter="searchMovie" v-model="movieText"/>
              <button v-show="moviesList.length > 0" class="search-button btn btn-danger" @click="cancelSearch" type="danger">取消搜索</button>
            </div>
            <ul class="search-list" v-show="moviesList.length > 0">
              <li @click="clearSearch(index)" v-for="(movie, index) in moviesList" :key="movie.id">
                <search-list-movie-item :movie="movie"></search-list-movie-item>
              </li>
            </ul>
          </div>
        </div>
        <ul class="navigation">
          <router-link to="/movies-info" tag="li" class="navigation-item">影讯&购票</router-link>
          <router-link to="/rank" tag="li" class="navigation-item">排行榜</router-link>
          <router-link to="/category" tag="li" class="navigation-item">分类</router-link>
          <router-link to="/top250" tag="li" class="navigation-item">Top250</router-link>
          <router-link to="/user-center" tag="li" class="navigation-item">个人中心</router-link>
        </ul>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_SEARCH } from '../../apis/urls.js'
  import SearchListMovieItem from './components/SearchListMovieItem.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'Banner',
    components: {
      SearchListMovieItem
    },
    data() {
      return {
        movieText: '',
        moviesList: [],
        moviesListTop5: []
      }
    },
    methods: {
      searchMovie() {
        this._getSearchMovie(this.movieText)
        this.$store.commit('changeSearchMovieText', { 
          movie: this.movieText 
        })
      },
      cancelSearch() {
        this.movieText = ''
        this.moviesList = []
      },
      clearSearch(index) {
        this.$router.push({
          name: 'MovieDetail',
          params: {
            id: this.moviesList[index].id
          }
        })
        this.$router.go(0)
        this.movieText = ''
        this.moviesList = []
      },
      _getSearchMovie(movieText) {
        let MOVIE_URL = `${API_SEARCH}${movieText}&apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(MOVIE_URL).then(res => {
          res = res.data
          this.moviesList = res.subjects
          this.moviesList = res.subjects
        }).catch(err => {
          console.log('search movie list', err)
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .banner
    background-color #f0f3f5
    .search
      display flex;
      padding 15px 0
      align-items center
      border-bottom 1px solid #ddd
      .title
        font-size 30px
        line-height 45px
        font-weight 700
        color #2a8ccb
        cursor pointer
        transition all .3s
        &:hover
          color #3576a8
      .search-input
        align-self center
        margin-left 20px
        position relative
        .search-movie-input
          position relative
          top 9px
        .search-button  
          position absolute 
          left 420px
          top 10px
        .search-list
          position absolute
          background-color #fff
          width 400px;
          z-index 999
          border 1px solid #ccc
          max-height 500px
          overflow auto
          &:last-child
            border-bottom none
    .navigation
      display flex
      font-size 14px
      color #2a8ccb
      padding 10px 0
      .navigation-item
        line-height 20px
        margin-right 10px
        cursor pointer
        transition all .3s
        &:hover
          color #3576a8
</style>
