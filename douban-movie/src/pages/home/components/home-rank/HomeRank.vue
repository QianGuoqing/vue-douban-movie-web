<template>
  <div class="home-rank">
    <div class="title-wrapper">
      <div class="title">本周口碑榜</div>
      <div class="more-rank">更多榜单>></div>
    </div>
    <div class="loading" v-if="!weeklyRank.length">
      <img src="../../../../assets/images/loading/loading-bars.svg" alt="">
    </div>
    <ul class="rank-list" v-else>
      <li v-for="(movie, index) in weeklyRank" :key="movie.id" class="rank-item">
        {{ index + 1 }}&nbsp;&nbsp;<span class="title">{{ movie.subject.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      weeklyRank: {
        type: Array,
        default: []
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .home-rank
    margin-top 30px
    .title-wrapper
      display flex
      justify-content space-between
      border-bottom 1px solid #ddd
      padding-bottom 10px
      .title
        font-size 18px
        align-self flex-end
      .more-rank
        color #357bb3
        transition all .3s
        cursor pointer
        align-self center
        &:hover
          color #108ee9
    .loading
      text-align center
      font-size 80px
    .rank-list
      margin-top 10px
      .rank-item
        padding 5px 0
        border-bottom 1px dashed #ddd
        cursor pointer
        .title
          color #357bb3
          transition all .3s
          &:hover
            color #108ee9
</style>