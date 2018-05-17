<template>
  <div id="app">
    <web-header></web-header>
    <web-banner></web-banner>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <web-footer></web-footer>
  </div>
</template>

<script>
  import WebHeader from './components/header/Header.vue'
  import WebBanner from './components/banner/Banner.vue'
  import WebFooter from './components/footer/Footer.vue'
  export default {
    name: 'App',
    components: {
      WebHeader,
      WebBanner,
      WebFooter
    }
  }
</script>

<style>
  
</style>
