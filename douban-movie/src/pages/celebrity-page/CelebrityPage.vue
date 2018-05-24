<template>
  <div class="celebrity-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="15">
        <loading v-if="!celebrity.id"></loading>
        <div class="content" v-else>
          <celebrity-introduction :celebrity="celebrity"></celebrity-introduction>
          <celebrity-brief :celebrity="celebrity"></celebrity-brief>
          <celebrity-gallery :celebrity="celebrity"></celebrity-gallery>
          <celebrity-works :celebrity="celebrity"></celebrity-works>
        </div>
      </a-col>
      <a-col :span="7">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import CelebrityIntroduction from './components/celebrity-introduction/CelebrityIntroduction.vue'
  import CelebrityBrief from './components/celebrity-brief/CelebrityBrief.vue'
  import CelebrityGallery from './components/celebrity-gallery/CelebrityGallery.vue'
  import CelebrityWorks from './components/celebrity-works/CelebrityWorks.vue'
  import Loading from '../../components/loading/Loading.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request.js'
  import { API_CELEBRITY } from '../../apis/urls.js'

  export default {
    name: 'CelebrityPage',
    data() {
      return {
        celebrity: {}
      }
    },
    components: {
      CelebrityIntroduction,
      CelebrityBrief,
      CelebrityGallery,
      CelebrityWorks,
      Loading,
      GoTop
    },
    created() {
      this._getData()
    },
    activated() {
      this._getData()
    },
    methods: {
      _getData() {
        this.celebrity = {}
        let id = this.celebrityId
        let API_URL = `${API_CELEBRITY}${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(API_URL).then(res => {
          res = res.data
          this.celebrity = res
        }).catch(err => {
          this.$message.error('获取影人信息失败')
        })
      }
    },
    computed: {
      celebrityId() {
        return this.$route.params.id 
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .celebrity-page
    .content
      margin-top 30px
</style>