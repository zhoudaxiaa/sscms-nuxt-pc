<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 右边顶部的广告
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-19 14:57:05
 * @LastEditTime: 2019-05-15 10:02:00
 -->

<template>
  <div>
    <img class="top-ads" :src="adsImg" alt="">
  </div>
</template>

<script>
export default {
  name: 'TopAds',
  props: {
    adsImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.top-ads {
  width: 100%;
  max-height: 250px;
  margin-bottom: 20px;
}
</style>