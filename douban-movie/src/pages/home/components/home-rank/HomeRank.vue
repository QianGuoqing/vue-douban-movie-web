<template>
  <div class="home-rank">
    <div class="title-wrapper">
      <div class="title">本周口碑榜</div>
      <div class="more-rank">更多榜单>></div>
    </div>
    <ul class="rank-list">
      <li v-for="(movie, index) in weeklyRank" :key="movie.id" class="rank-item">
        {{ index + 1}}&nbsp;&nbsp;<span class="title">{{ movie.title }}</span>
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