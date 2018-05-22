<template>
  <div class="avatar-panel">
    <img class="avatar" :src="item.avatars.small" alt="">
    <div class="name">{{ item.name }}</div>
  </div>
</template>

<script>
  export default {
    name: 'AvatarPanel',
    props: {
      item: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .avatar-panel
    cursor pointer
    transition all .3s
    &:hover
      box-shadow 0 0 2px #ccc
    .avatar
      width 100%
    .name
      margin 10px 0
      text-align center
      font-size 13px
      color #257bb3
      transition all .3s
      &:hover
        background-color #108ee9
        color #fff
</style>