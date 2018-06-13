<template>
  <div class="comments-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="14">
        <div class="loading-comments" v-if="!comments.length">
          载入评论中 请稍后...
        </div>
        <div v-else>
          <ul class="comments-list">
            <li v-for="comment in comments" :key="comment.id">
              <comments-item :comment="comment"></comments-item>
            </li>
          </ul>
          <div class="pagination-wrapper">
            <a-pagination v-model="current" :total="pageNumbers" @change="pageChange(current)"/>
          </div>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="movie-introduction-wrapper">
          <router-link tag="div" :to="{ name: 'MovieDetail', params: { id: movie.id }}" class="to-movie">前往 {{ movie.title }} 的页面</router-link>
          <movie-introduction :movie="movie"></movie-introduction>
        </div>
      </a-col>
      <a-col :span="2">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import CommentsItem from './components/comments-item/CommentsItem.vue'
  import MovieIntroduction from '../movie-detail/components/movie-introduction/MovieIntroduction.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_MOVIE_COMMENTS, API_MOVIE_SUBJECT } from '../../apis/urls.js'
  export default {
    name: 'CommentsPage',
    components: {
      CommentsItem,
      MovieIntroduction,
      GoTop
    },
    computed: {
      id() {
        return this.$route.params.id 
      }
    },
    data() {
      return {
        start: 0,
        count: 20,
        current: 1,
        pageNumbers: 0,
        movie: {},
        commentsCount: 0,
        comments: []
      }
    },
    methods: {
      pageChange(current) {
        this.comments = []
        this.start = (this.current - 1) * 10
        this._getCommentsData(this.start, this.count)
      },
      _getCommentsData(start, count) {
        let API_URL = `${API_MOVIE_COMMENTS}${this.id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${start}&count=${count}`
        this.start = 0
        this.current = 1
        getMoviesByUrl(API_URL).then(res => {
          res = res.data
          this.comments = res.comments
        }).catch(err => {
          this.$message.error('获取短评数据失败')
        })
      },
      _getMovieData(id) {
        let API_URL = `${API_MOVIE_SUBJECT}${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        this.movie = {}
        getMoviesByUrl(API_URL).then(res => {
          res = res.data
          this.movie = res
          this.commentsCount = this.movie.comments_count
          this.pageNumbers = Math.ceil(this.commentsCount / 20)
        }).catch(err => {
          this.$message.error('获取电影详情信息出错')
        })
      }
    },
    created() {
      this._getCommentsData(this.start, this.count)
      this._getMovieData(this.id)
      console.log(this.current)
    },
    activated() {
      this._getCommentsData(this.start, this.count)
      this._getMovieData(this.id)
    }
  }
</script>

<style lang="stylus" scoped>
  .comments-page
    .loading-comments
      width 100%
      padding 10px 0
      background-color #f0f3f5
      color #3576a8
      text-align center
      margin-top 30px
    .comments-list
      margin-top 30px
    .pagination-wrapper
      margin 10px 0 30px 15px
    .movie-introduction-wrapper
      margin-top 30px
      margin-left 15px
      .to-movie
        font-size 12px
        color #3576a8
        cursor pointer
        transition all .3s
        margin-right 10px
        margin-bottom 10px
        &:hover
          color #108ee9
</style>