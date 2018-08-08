<template>
  <div class="movie-carousel">
    <div class="banner">
      <div class="banner-info">
        <div class="title">{{ bannerTitle }}</div>
        <slot name="more-info"></slot>
      </div>
      <div class="carousel-button-wrapper">
        <span class="pagination">{{ carouselIndex }} / {{ carouselCount }}</span>
        <span class="prev" @click="onPrevious"><</span>
        <span class="next" @click="onNext">></span>
      </div>
    </div>
    <div class="loading" v-if="!hotMovies.length">
      <img src="../../../../assets/images/loading/loading-bars.svg" alt="">
    </div>
    <!-- <transition-group 
        enter-active-class="animated fadeIn"  
        leave-active-class="animated fadOut"> -->
    <div class="carousel" ref="carousel" v-if="firstRender">
      <router-link tag="div" :to="{ name: 'MovieDetail', params: {id: item.id} }" class="item" style="width: 18%" v-for="item in hotMovies.slice(0, 5)" :key="item.id">
        <img class="image" v-lazy="item.images.small" alt="">
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="rate" v-if="item.rating.average">
            {{ item.rating.average }}分
          </div>
          <div class="rate" v-else>暂无评分</div>
          <a-button type="primary" @click.prevent.stop="toPurchaseTicket(item.title)" class="choose-button" size="small">选座购票</a-button>
        </div>
      </router-link>
    </div>
    <!-- </transition-group>
    <transition-group 
        enter-active-class="animated fadeIn"  
        leave-active-class="animated fadeOut"> -->
    <div class="carousel" ref="carousel" v-else>
      <router-link tag="div" :to="{ name: 'MovieDetail', params: {id: item.id} }" class="item" style="width: 18%" v-for="item in carouselItem" :key="item.id">
        <img class="image" v-lazy="item.images.small" alt="">
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="rate" v-if="item.rating.average">
            {{ item.rating.average }}分
          </div>
          <div class="rate" v-else>暂无评分</div>
          <a-button type="primary" @click.prevent.stop="toPurchaseTicket(item.title)" size="small" class="choose-button">选座购票</a-button>
        </div>
      </router-link>
    </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
  import { getMoviesInTheater } from '../../../../apis/request'
  export default {
    name: 'MovieCarousel',
    created() {
      this.$nextTick(() => {
        // this.getCarouselItem(1)
      })
    },
    props: {
      bannerTitle: {
        type: String,
        default: ''
      },
      hotMovies: {
        type: Array
      }
    },
    data() {
      return {
        carouselIndex: 1,
        carouselItem: [],
        firstRender: true
      }
    },
    computed: {
      carouselCount() {
        return Math.floor(this.hotMovies.length / 5)
      }
    },
    methods: {
      onPrevious() {
        this.carouselIndex--
          if (this.carouselIndex <= 0) {
            this.carouselIndex = this.carouselCount
          }
          this.getCarouselItem(this.carouselIndex)
      },
      onNext() {
        this.carouselIndex++
          if (this.carouselIndex > this.carouselCount) {
            this.carouselIndex = 1
          }
          this.getCarouselItem(this.carouselIndex)
      },
      getImages(url){
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if(url !== undefined){
            return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
        }
      },
      getCarouselItem(index) {
        let start = 5 * (index - 1)
        let end = 5 * index - 1
        let tempArr = []
        this.firstRender = false
        for (let i = start; i <= end; i++) {
          tempArr.push(this.hotMovies[i])
        }
        this.carouselItem = tempArr
      },
      toPurchaseTicket(title) {
        window.open(`https://maoyan.com/query?kw=${title}`,'_blank')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-carousel
    .loading
      text-align center
      font-size 100px
    .banner
      display flex
      justify-content space-between
      border-bottom 1px solid #ddd
      padding-bottom 10px
      .banner-info
        display flex
        align-items center
        .title
          font-size 20px
        .banner-item
          color #357bb3
          font-size 13px
          align-self center
          margin-left 10px
          cursor pointer
          transition all .3s
          &:hover
            color #108ee9
    .carousel-button-wrapper
      align-self center
      .pagination
        font-size 12px
        color #bbb
        margin-right 20px
      .prev, .next
        display inline-block
        background-color #6f98ce
        color #fff
        font-size 12px
        line-height 15px
        text-align center
        border-radius 50%
        width 15px
        height 15px
        cursor pointer
      .prev
        margin-right 5px
    .carousel
      width 100%
      display flex
      justify-content space-around
      margin-top 20px
      .item
        align-items stretch
        border 1px solid #ddd
        padding 5px
        transition all .3s
        cursor pointer
        position relative
        display flex
        flex-direction column
        justify-content space-between
        // padding-bottom 100px
        &:hover
          box-shadow 0 0 5px #ccc
          transform translateY(-5px)
        .image
          min-width 100%
          max-width 100%
          min-height 185px
        .content
          .title
            margin-top 10px
            width 100%
            text-align center
            font-size 12px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            text-align center
          .rate
            font-size 12px
            text-align center
            font-weight 700
            color #f30
            margin-top 5px
          .choose-button
            display block
            margin 5px auto
</style>