<template>
  <div class="header">
    <router-link to="/" class="header-link">电影</router-link>
    <a href="https://book.douban.com/" target="_blank" class="header-link">读书</a>
    <a href="https://music.douban.com/" target="_blank" class="header-link">音乐</a>
    <span v-if="!isLogin" @click="toLogin" class="header-link login">未登录</span>
    <span v-else>
      <span class="header-link login">{{ user.username }}</span>
      <span class="header-link logout" @click="logout">[注销]</span>
    </span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Header',
    methods: {
      toLogin() {
        this.$router.push('/user-center')
      },
      logout() {
        var that = this
        this.$confirm({
          title: '注销信息',
          content: '确定要退出登录吗？',
          onOk() {
            that.$store.commit('changeLoginStatus', false)
          },
          onCancel() {
          },
        });

      }
    },
    computed: {
      ...mapState(['isLogin', 'user'])
    },
  }
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    height 25px
    background-color #545652
    position relative
    .header-link
      display inline-block
      font-size 12px
      line-height 25px
      padding-left 10px
      color rgba(255, 255, 255, 0.6)
      transition all .3s;
      &:hover
        color rgba(255, 255, 255, 0.8)
    .login
      cursor pointer
      position absolute
      right 60px
    .logout
      cursor pointer
      position absolute
      right 20px
</style>