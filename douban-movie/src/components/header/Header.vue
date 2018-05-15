<template>
  <div class="header">
    <a href="#" class="header-link">豆瓣</a>
    <a href="#" class="header-link">读书</a>
    <a href="#" class="header-link">电影</a>
    <a href="#" class="header-link">音乐</a>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    height 25px
    background-color #545652
    .header-link
      display inline-block
      font-size 12px
      line-height 25px
      padding-left 10px
      color rgba(255, 255, 255, 0.6)
      transition all .3s;
      &:hover
        color rgba(255, 255, 255, 0.8)
</style>