<template>
  <div class="celebrity-brief">
    <h1 class="name">
      {{ celebrity.name }} {{ celebrity.name_en }}
    </h1>
    <div class="introduction">
      <img v-lazy="celebrity.avatars.small" alt="" class="avatar">
      <div class="info">
        <div class="info-item">
          <span class="info-key">性别: </span> {{ celebrity.gender }}
        </div>
        <div class="info-item">
          <span class="info-key">出生日期: </span> {{ celebrity.birthday }}
        </div>
        <div class="info-item">
          <span class="info-key">出生地: </span> {{ celebrity.born_place }}
        </div>
        <div class="info-item">
          <span class="info-key">职业: </span> {{ concatPro(celebrity.professions) }}
        </div>
        <div class="info-item">
          <span class="info-key">更多中文名: </span> {{ concatAli(celebrity.aka) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Util from '../../../../common/js/util.js'
  export default {
    name: 'CelebrityName',
    props: {
      celebrity: {
        type: Object,
        default: {}
      },
    },
    methods: {
      concatPro(professions) {
        return Util.concatProfessions(professions, ' / ')
      },
      concatAli(alias) {
        return Util.concatAlias(alias, ' / ')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .celebrity-brief
    border-bottom 1px dashed rgb(221, 221, 221)
    padding-bottom 20px
    .name
      font-size 30px
      font-weight 700
      color #494949
    .introduction
      display flex
      .avatar
        width 135px
        height 190px
        margin-right 20px
      .info
        color #111
        .info-item
          margin-bottom 5px
          .info-key
            color #686868
</style>