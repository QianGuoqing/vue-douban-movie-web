<template>
  <div class="comment-item">
    <img class="avatar" v-lazy="comment.author.avatar" alt="">
    <div class="content">
      <div class="name-star-date-useful">
        <div class="name-star-date">
          <span class="name">{{ comment.author.name }}</span>
          <a-rate :defaultValue="comment.rating.value" allowHalf disabled/>
          <span class="date">{{ comment.created_at }}</span>
        </div>
        <div class="useful">
          <span class="useful-count">{{ comment.useful_count }}</span>
          <span class="useful-button">有用</span>
        </div>
      </div>
      <div class="comment">{{ comment.content }}</div>
      <div class="report">举报</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentItem',
    props: {
      comment: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .comment-item >>> .ant-rate
    color #e2952b
    font-size 12px

  .comment-item
    display flex
    padding 15px 0 5px 0
    border-bottom 1px solid rgb(238, 238, 238)
    width 100%
    .avatar
      width 50px
      height 50px
    .content
      padding-left 10px
      font-size 12px
      width 100%
      .name-star-date-useful
        display flex
        justify-content space-between
        margin-bottom 5px
        .name-star-date
          .name
            color #3576a8
            cursor pointer
            transition all .3s
            &:hover
              color #108ee9
          .date
            color #999
        .useful
          .useful-button
            color #3576a8
            cursor pointer
            transition all .3s
            &:hover
              color #108ee9
    .comment
      font-size 13px
      margin-bottom 5px
    .report
      text-align right 
      color #3576a8
      cursor pointer
      transition all .3s
      &:hover
        color #108ee9
</style>