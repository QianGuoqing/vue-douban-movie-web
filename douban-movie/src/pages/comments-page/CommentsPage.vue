<template>
  <div class="comments-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="14">
        <ul class="comments-list">
          <li v-for="comment in comments" :key="comment.id">
            <comments-item :comment="comment"></comments-item>
          </li>
        </ul>
      </a-col>
      <a-col :span="6">
        movie card
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import CommentsItem from './components/comments-item/CommentsItem.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_MOVIE_COMMENTS } from '../../apis/urls.js'
  export default {
    name: 'CommentsPage',
    components: {
      CommentsItem
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
        comments: []
      }
    },
    methods: {
      _getCommentsData(start, count) {
        let API_URL = `${API_MOVIE_COMMENTS}${this.id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${start}&count=${count}`
        getMoviesByUrl(API_URL).then(res => {
          res = res.data
          this.comments = res.comments
          console.log('comments', this.comments)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      this._getCommentsData(this.start, this.count)
    }
  }
</script>

<style lang="stylus" scoped>
  .comments-page
    .comments-list
      margin-top 30px
</style>