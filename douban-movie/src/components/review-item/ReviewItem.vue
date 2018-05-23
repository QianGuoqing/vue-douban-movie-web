<template>
  <div class="review-item">
    <div class="head">
      <img v-lazy="review.author.avatar" alt="" class="avatar">
      <span class="name">{{ review.author.name }}</span>
      <a-rate :defaultValue="review.rating.value" allowHalf disabled/>
      <span class="date">{{ review.created_at }}</span>
    </div>
    <div class="title">{{ review.title }}</div>
    <div class="summary">
      {{ review.summary }}
      <span @click="slideDown" class="slide-down" v-show="!display">展开</span>
    </div>
    <transition name="slide">
    <div class="content" v-show="display">
      {{ review.content }}
      <span @click="slideUp" class="slide-up">收起</span>
    </div>
    </transition>
    <div class="operation">
      <span class="operation-item">
        <a-icon type="up"/> {{ review.useful_count }}
      </span>
      <span class="operation-item">
        <a-icon type="down"/> {{ review.useless_count }}
      </span>
      <span class="reply">{{ review.comments_count }} 回应</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReviewItem',
    props: {
      review: {
        type: Object,
        default: {}
      },
    },
    data() {
      return {
        display: false
      }
    },
    methods: {
      slideDown() {
        this.display = true
      },
      slideUp() {
        this.display = false
      }    
    },
  }
</script>

<style lang="stylus" scoped>
  .review-item >>> .ant-rate
    color #e2952b
    font-size 12px
  .slide-enter, .slide-leave-to
    opacity 0
  .slide-enter-to, .slide-leave
    opacity 1
  .slide-enter-active, .slide-leave-active
    transition all .5s

  .review-item
    border-bottom 1px solid rgb(237, 237, 237)
    padding 15px 0
    .head
      margin-bottom 10px
      font-size 12px
      .avatar
        width 30px
        height 30px
        margin-right 5px
      .name
        color #3576a8
        margin-right 5px
      .date
        color #aaa
    .title
      font-size 14px
      margin 6px 0 15px 0
      font-weight bold
      color #3576a8
      cursor pointer
      transition all .3s
      &:hover
        color #108ee9
    .summary
      font-size 13px
      line-height 20px
      color rgb(73, 73, 73)
      .slide-down
        color #3576a8
        cursor pointer
        transition all .3s
        &:hover
          color #108ee9
    .content
      font-size 13px
      line-height 20px
      color rgb(73, 73, 73)
      .slide-up
        cursor pointer
        color rgb(170, 170, 170)
    .operation
      font-size 12px
      margin-top 20px
      .operation-item
        background-color rgb(240, 247, 249)
        color rgb(53, 118, 168)
        padding 4px
        margin-right 6px
        cursor pointer
        transition all .3s
        &:hover
          color #108ee9
    .reply
      color rgb(53, 118, 168)
      cursor pointer
      transition all .3s
      margin-left 10px
      &:hover
        color #108ee9
</style>