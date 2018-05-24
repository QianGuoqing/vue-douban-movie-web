<template>
  <div class="celebrity-brief">
    <div class="title">影人简介</div>
    <div class="none" v-if="celebrity.summary.length === 0">暂无</div>
    <div class="brief" v-else>{{ celebrity.summary }}</div>
  </div>
</template>

<script>
  export default {
    name: 'CelebrityBrief',
    props: {
      celebrity: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .celebrity-brief
    .title
      font-size 13px
      color #333d47
      line-height 50px
    .brief
      font-size 12px
      color rgba(0, 0, 0, 0.65)
</style>