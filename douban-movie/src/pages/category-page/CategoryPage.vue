<template>
  <div class="category-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="16">
        <h1 class="title">选影视</h1>
        <ul class="tags">
          <li @click="selectTag(index)" class="tag" :class="{ active: index === activeIndex }" v-for="(category, index) in categories" :key="category">{{ category }}</li>
        </ul>
        <loading v-if="!movies.length"></loading>
        <ul class="movie-list" v-else>
          <router-link tag="li" :to="{ name: 'MovieDetail', params: {id: movie.id} }" class="movie-item" v-for="movie in movies" :key="movie.id">
            <movie-list-item>
              <img v-lazy="movie.images.small" alt="" class="image" slot="thumbnail">
              <div class="title" slot="title">{{ movie.title }} / {{ movie.original_title }}</div>
              <div class="info" slot="info">{{ movie.pubdates[0] }} {{ stringifyCa(movie.casts) }}</div>
              <div class="rate" slot="rate">
                <a-rate :defaultValue="movie.rating.average/2" allowHalf disabled/>
                <span class="average">{{ movie.rating.average }}</span> ({{ movie.collect_count }}人评价)
              </div>
            </movie-list-item>
          </router-link>
        </ul>
        <div class="load-more" @click="loadMore">加载更多</div>
      </a-col>
      <a-col :span="6">
        <go-top></go-top>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import MovieListItem from '../../components/movie-list-item/MovieListItem.vue'
  import Loading from '../../components/loading/Loading.vue'
  import GoTop from '../../components/go-top/GoTop.vue'
  import { getMoviesByUrl } from '../../apis/request'
  import { API_TAG } from '../../apis/urls'
  import Util from '../../common/js/util'

  export default {
    name: 'CategoryPage',
    components: {
      MovieListItem,
      Loading,
      GoTop
    },
    data() {
      return {
        categories: ['电影', '电视剧', '综艺', '动画', '纪录片', '短片',
          '剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '犯罪',
          '恐怖', '青春', '励志', '战争', '文艺', '黑色幽默', '传记',
          '情色', '暴力', '音乐', '家庭', '大陆', '美国', '香港', '台湾',
          '日本', '韩国', '英国', '法国', '德国', '意大利', '西班牙',
          '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰',
          '瑞典', '巴西', '丹麦', '经典冷门', '佳片', '魔幻', '黑帮', '女性', '自定义标签'
        ],
        tag: '电影',
        start: 0,
        movies: [],
        activeIndex: 0
      }
    },
    created() {
      this._getMoviesByTag(this.tag, this.start)
    },
    methods: {
      selectTag(index) {
        this.tag = this.categories[index]
        this.start = 0
        this.movies = []
        this.activeIndex = index
        this._getMoviesByTag(this.tag, this.start)
      },
      loadMore() {
        this.start += 20
        this._getMoviesByTag(this.tag, this.start)
      },
      _getMoviesByTag(tag, start) {
        let tagSearch = `${API_TAG}?tag=${tag}&start=${start}&apikey=0b2bdeda43b5688921839c8ecb20399b`
        getMoviesByUrl(tagSearch).then(res => {
          res = res.data
          // this.movies = res.subjects
          this.movies.push(...res.subjects)
          console.log('category page', this.movies)
        }).catch(err => {
          console.log('category page', err)
        })
      },
      stringifyCa(casts) {
        return Util.stringifyCasts(casts)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .category-page >>> .ant-rate
    color #e2952b
    font-size 12px

  .category-page
    .title
      font-size 24px
      font-weight 700
      color rgba(0, 0, 0, 0.65)
      margin-top 30px
    .tags
      display flex
      flex-flow wrap
      .tag
        font-size 14px
        color #333
        padding 2px 10px
        margin-bottom 5px
        cursor pointer
        transition all .3s
        &:hover
          color #108ee9
        &.active
          color #fff
          background-color #2a8ccb
          border-radius 3px
    .movie-list
      .movie-item
        padding 15px 10px
        border-top 1px dashed #ddd
        cursor pointer
        .title
          font-size 14px
          color #3576aa
          margin-bottom 5px
        .info
          color #666
          margin-bottom 5px
        .rate
          color #666
          .average
            color #e2952b
    .load-more
      color #3576a8
      text-align center
      background-color #f7f7f7
      cursor pointer
      padding 10px 0
      transition all .3s
      &:hover
        color #108ee9
</style>