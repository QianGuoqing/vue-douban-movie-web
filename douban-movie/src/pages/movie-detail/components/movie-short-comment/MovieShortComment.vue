<template>
  <div class="movie-short-comment">
    <h1 class="title">
      {{ movie.title }}的短评
      <span class="info">(
        <span class="info-item">全部{{ movie.comments_count }}条</span>)
      </span>
    </h1>
    <div class="tips">热门 / 最新 / 好友</div>
    <ul class="comment-list">
      <li class="comment-item" v-for="comment in movie.popular_comments" :key="comment.id">
        <comment-item :comment="comment"></comment-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import CommentItem from '../../../../components/comment-item/CommentItem.vue'
  export default {
    name: 'MovieShortComment',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
    components: {
      CommentItem
    }
  }
</script>

<style lang="stylus" scoped>
  .movie-short-comment
    .title
      font-size 15px
      color #087626
      margin 30px 0 15px
      .info
        font-weight normal
        color #111
        margin-left 20px
        .info-item
          color #357bb3
          cursor pointer
          transition all .3s
          &:hover
            color #49a9ee
    .tips
      font-size 12px
      border-bottom 1px solid rgb(238, 238, 238)
      padding-bottom 10px
    .comment-list
      width 100%
      .comment-item
        width 100%
</style>