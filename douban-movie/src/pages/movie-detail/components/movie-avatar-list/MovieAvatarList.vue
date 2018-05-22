<template>
  <div class="movie-avatar-list">
    <h2 class="title">{{ movie.title }}的影人列表</h2>
    <h2 class="sub-title">导演</h2>
    <ul class="list">
      <li class="list-item" v-for="item in movie.directors" :key="item.id">
        <avatar-panel :item="item"></avatar-panel>
      </li>
    </ul>
    <h2 class="sub-title">演员</h2>
    <ul class="list">
      <li class="list-item" v-for="item in movie.casts" :key="item.id">
        <avatar-panel :item="item"></avatar-panel>
      </li>
    </ul>
  </div>
</template>

<script>
  import AvatarPanel from '../avatar-panel/AvatarPanel.vue'
  export default {
    name: 'MovieAvatarList',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
    components: {
      AvatarPanel
    }
  }
</script>

<style lang="stylus" scoped>
  .movie-avatar-list
    .title
      font-size 15px
      color #087626
      margin 20px 0 15px
    .sub-title
      font-size 14px
      color #9c9c9c
    .list
      display flex
      flex-flow wrap
      .list-item
        width 18%
        margin-right 2%
</style>