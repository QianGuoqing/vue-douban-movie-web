<template>
  <div class="reviews-item">
    <div class="reviews-header">
      <img v-lazy="review.author.avatar" alt="" class="avatar">
      <div class="name">{{ review.author.name }}</div>
      <div class="star">
        <a-rate :defaultValue="review.rating.value" allowHalf disabled/>
      </div>
      <div class="date">{{ review.created_at }}</div>
    </div>
    <div class="content-wrapper">
      <div class="title">{{ review.title }}</div>
      <transition name="slide">
        <div class="summary" v-show="display">
          {{ review.summary }} (<span class="expand" @click="expand">展开</span>)
        </div>
      </transition>
      <transition>
        <div class="content" v-show="!display">{{ review.content }}</div>
      </transition>
    </div>
    <div class="operation">
      <div class="useful">
        <div class="up">
          <a-icon type="up"/>
          {{ review.useful_count }}
        </div>
        <div class="down">
          <a-icon type="down"/>
          {{ review.useless_count }}
        </div>
        <div class="reply"><span class="reply-count">{{ review.comments_count }}</span> 回应</div>
      </div>
      <div class="close" v-show="!display" @click="close">收起</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReviewsItem',
    props: {
      review: {
        type: Object
      },
    },
    data() {
      return {
        display: true
      }
    },
    methods: {
      expand() {
        this.display = false
      },
      close() {
        this.display = true
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .reviews-item >>> .ant-rate
    color #e2952b
    font-size 12px

  .v-enter, .v-leave-to
    opacity 0
  .v-enter-to, .v-leave
    opacity 1
  .v-enter-active, .v-leave-active
    transition all .5s

  .slide-enter, .slide-leave-to
    opacity 0
    transform translateX(0)
  .slide-enter-to, .slide-leave
    opacity 1
    transform translateX(-100%)
  .slide-enter-active, .slide-leave-active
    transition all .3s
  
  .reviews-item
    border-top 1px solid #f5f5f5
    padding 10px 0
    .reviews-header
      display flex
      align-items center
      .avatar
        width 30px
        height 30px
        margin 10px 0
      .name
        font-size 12px
        color #3576a8
        cursor pointer
        transition all .3s
        margin 0 10px
        &:hover
          color #108ee9
      .star
        position relative
        top -2px
      .date
        color #999
        font-size 12px
        margin-left 10px
    .content-wrapper
      .title
        color #3576a8
        transition all .3s
        line-height 1.5
        cursor pointer
        margin 0 0 10px 0
        font-weight 600
        &:hover
          color #108ee9
      .summary
        color #494949
        font-size 13px
        line-height 20px
        .expand
          cursor pointer
          color #3576a8
          transition all .3s
          &:hover
            color #108ee9
      .content
        color #494949
        font-size 13px
        line-height 20px
    .operation
      display flex
      justify-content space-between
      margin-top 10px
      .useful
        display flex
        align-items center
        .up, .down
          background-color #f0f7f9
          border-radius 3px
          font-size 13px
          padding 4px
          margin-right 10px
          color #3576a8
          transition all .3s
          cursor pointer
          &:hover
            color #108ee9
        .reply
          font-size 13px
          color #3576a8
          transition all .3s
          cursor pointer
          margin-left 5px
          &:hover
            color #108ee9
          .reply-count
            font-weight 600
      .close
        font-size 13px
        cursor pointer
        transition all .3s
        &:hover
          color #000
</style>