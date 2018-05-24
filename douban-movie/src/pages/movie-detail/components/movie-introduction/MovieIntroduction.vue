<template>
  <div class="movie-introduction">
    <a-row>
      <a-col :span="8">
        <div class="poster-wrapper">
          <img class="poster" :src="movie.images.small" alt="">
          <div class="poster-tips">更新描述或海报</div>
        </div>
      </a-col>
      <a-col :span="16">
        <div class="introduction">
          <div class="item">
            <span class="item-key">导演: </span>
            <router-link :to="{ name: 'CelebrityPage', params: { id: director.id }}" class="item-value" v-for="director in movie.directors" :key="director.id">{{ director.name }}</router-link>
          </div>
          <div class="item">
            <span class="item-key">编剧: </span>
            <span class="item-value" v-for="writer in movie.writers" :key="writer.id">{{ writer.name }}</span>
          </div>
          <div class="item">
            <span class="item-key">主演: </span>
            <span class="item-value" v-for="cast in movie.casts" :key="cast.id">{{ cast.name }}</span>
          </div>
          <div class="info">
            <span class="info-key">类型: </span>
            <span class="info-value">{{ concatGen(movie.genres) }}</span>
          </div>
          <div class="info">
            <span class="info-key">制片国家/地区: </span>
            <span class="info-value">{{ concatCou(movie.countries) }}</span>
          </div>
          <div class="info">
            <span class="info-key">语言: </span>
            <span class="info-value">{{ concatLan(movie.languages) }}</span>
          </div>
          <div class="info">
            <span class="info-key">上映时间: </span>
            <span class="info-value">{{ concatPub(movie.pubdates) }}</span>
          </div>
          <div class="info">
            <span class="info-key">片长: </span>
            <span class="info-value">{{ movie.durations[0] }}</span>
          </div>
          <div class="info">
            <span class="info-key">又名: </span>
            <span class="info-value">{{ concatAli(movie.aka) }}</span>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import Util from '../../../../common/js/util.js'
  export default {
    name: 'MovieIntroduction',
    props: {
      movie: {
        type: Object,
        default: {}
      },
    },
    methods: {
      concatDir(directors) {
        return Util.concatDirectors(directors, ' / ')
      },
      concatGen(genres) {
        return Util.concatGenres(genres, ' / ')
      },
      concatCou(countries) {
        return Util.concatCountries(countries, ' / ')
      },
      concatLan(languages) {
        return Util.concatLanguages(languages, ' / ')
      },
      concatPub(pubdates) {
        return Util.concatPubdates(pubdates, ' / ')
      },
      concatAli(alias) {
        return Util.concatAlias(alias, ' / ')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-introduction
    .poster-wrapper
      width 100%
      .poster
        width 90%
      .poster-tips
        font-size 12px
        margin-top 5px
        cursor pointer
        color #0e77ca
        transition all .3s
        &:hover
          color #108ee9
    .introduction
      font-size 13px
      padding-right 15px
      .item
        margin-bottom 5px
        .item-key
          color #686868
        .item-value
          color #357bb3
          cursor pointer
          transition all .3s
          padding 0 5px
          &:hover
            background-color #108ee9
            color #fff
      .info
        margin-bottom 5px
        .info-key
          color #686868
</style>