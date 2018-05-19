<template>
  <div class="banner">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="search">
          <router-link to="/" tag="div" class="title">豆瓣电影</router-link>
          <div class="search-input">
            <a-input-search placeholder="搜索电影、电视剧、综艺、影人" style="width: 400px"></a-input-search>
          </div>
        </div>
        <ul class="navigation">
          <router-link to="/movies-info" tag="li" class="navigation-item">影讯&购票</router-link>
          <router-link to="/rank" tag="li" class="navigation-item">排行榜</router-link>
          <router-link to="/category" tag="li" class="navigation-item">分类</router-link>
        </ul>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style lang="stylus" scoped>
  .banner
    background-color #f0f3f5
    .search
      display flex;
      padding 15px 0
      border-bottom 1px solid #ddd
      .title
        font-size 30px
        line-height 45px
        font-weight 700
        color #2a8ccb
        cursor pointer
        transition all .3s
        &:hover
          color #3576a8
      .search-input
        align-self center
        margin-left 20px
    .navigation
      display flex
      font-size 14px
      color #2a8ccb
      padding 10px 0
      .navigation-item
        line-height 20px
        margin-right 10px
        cursor pointer
        transition all .3s
        &:hover
          color #3576a8
</style>