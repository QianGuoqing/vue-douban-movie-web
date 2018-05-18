<template>
  <div class="movie-rank">
    <h2 class="title">{{ title }}</h2>
    <ul class="rank-list">
      <li class="rank-item" v-for="(movie, index) in movies" :key="movie.subject.id">
        <div class="desc">
          {{ index + 1 }} 
          <span class="movie-title">{{ movie.subject.title }}</span>
          <span class="movie-new" v-if="movie.new">NEW</span>
        </div>
        <div class="more" v-if="toggle">
          <a-icon type="arrow-up" v-if="movie.delta > 0"/>
          <a-icon type="arrow-down" v-else/>
          <span class="delta">{{ movie.delta }}</span>
        </div>
        <div class="more" v-else>
          {{ computeBox(movie.box) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MovieRank',
    props: {
      title: {
        type: String,
        default: ''
      },
      movies: {
        type: Array
      },
      toggle: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      computeBox(box) {
        return `${Math.floor(box / 10000)}万`
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .movie-rank
    margin-top 30px
    .title
      color #087626
      font-size 18px
    .rank-list
      .rank-item
        display flex
        justify-content space-between
        padding 5px 0
        border-bottom 1px dashed #ddd
        cursor pointer
        transition all .3s
        &:hover
          text-shadow 0 0 2px #ccc
        .desc
          color #333
          font-size 14px
          .movie-title
            display inline-block
            color #3576a8
            margin-left 10px
          .movie-new
            font-size 12px
            color #fff
            background-color orange
            padding 0 3px
            margin-left 4px
            vertical-align top
</style>