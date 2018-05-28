<template>
  <div class="comments-item">
    <img v-lazy="comment.author.avatar" class="avatar" alt="">
    <div class="content">
      <div class="content-header">
        <div class="name-star-date">
          <div class="name">{{ comment.author.name }}</div>
          <div class="star">
            <a-rate :defaultValue="comment.rating.value" allowHalf disabled/>
          </div>
          <div class="date">{{ comment.created_at }}</div>
        </div>
        <div class="useful">
          <span class="useful-count">{{ comment.useful_count }}</span>
          <span class="useful-text">有用</span>
        </div>
      </div>
      <div class="comment">{{ comment.content }}</div>
      <div class="report">举报</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentsItem',
    props: {
      comment: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .comments-item >>> .ant-rate
    color #e2952b
    font-size 12px
  
  .comments-item
    display flex
    border-top 1px solid #eee
    padding 5px 0
    width 100%
    .avatar
      width 50px
      height 50px
      margin 15px
    .content
      margin-top 15px
      width 100%
      .content-header
        display flex
        align-items center
        justify-content space-between
      .name-star-date
        display flex
        align-items center
        .name
          font-size 12px
          color #3576a8
          cursor pointer
          transition all .3s
          margin-right 10px
          &:hover
            color #108ee9
        .star
          position relative
          top -2px
        .date
          color #999
          font-size 12px
          margin-left 10px
      .useful
        font-size 12px
        color #494949
        margin 0 10px
        .useful-text
          color #3576a8
          cursor pointer
          transition all .3s
          &:hover
            color #108ee9
    .comment
      width 100%
      font-size 13px
      color #494949
      margin-top 10px
    .report
      text-align right 
      font-size 12px
      color #3576a8
      cursor pointer
      transition all .3s
      margin-right 10px
      &:hover
        color #108ee9
</style>