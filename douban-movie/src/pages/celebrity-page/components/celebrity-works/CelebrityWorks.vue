<template>
  <div class="celebrity-works">
    <div class="title">最受好评的{{ celebrity.works.length }}部作品</div>
    <ul class="work-list">
      <li class="work-item" v-for="work in celebrity.works" :key="work.subject.id">
        <a-tooltip placement="rightTop" >
          <template slot="title">
            <span>{{ work.subject.title }}</span>
          </template>
          <div class="work-card">
            <img class="image" v-lazy="work.subject.images.small" alt="">
            <div class="work-title">{{ work.subject.title }}</div>
            <div class="rate">{{ work.subject.rating.average }}</div>
            <div class="date">{{ work.subject.year }}</div>
          </div>
        </a-tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CelebrityWorks',
    props: {
      celebrity: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .celebrity-works
    padding-bottom 50px
    .title
      font-size 13px
      color #333d47
      line-height 50px
    .work-list
      width 100%
      // display flex
      // justify-content space-between
      // flex-flow wrap 
      &:after
        display block
        content ''
        width 0
        height 0
        clear both
      .work-item
        float left
        margin-right 10px
        margin-bottom 10px
        cursor pointer
        transition all .3s
        display flex
        flex-direction column-reverse
        justify-content space-between
        align-items center
        &:hover
          box-shadow 0 0 2px #ccc
        .work-card
          .image
            width 130px
            height 180px
            display block
          .work-title
            font-size 12px
            color #333
            margin 5px 0 10px 0
            text-align center
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .rate
            font-size 12px
            text-align center
            color #e2952b
          .date
            font-size 12px
            text-align center
            color #666
            margin-top 5px
</style>