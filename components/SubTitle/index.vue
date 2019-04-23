<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 副标题
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 09:25:42
 * @LastEditTime: 2019-04-21 10:54:41
 -->

<template>
  <h2 class="sub-title">
    <nuxt-link to="">
      {{title}}
    </nuxt-link>
  </h2>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  position: relative;
  padding: 2px 8px 0;
  border-left: 3px solid $activeColor;
  font-size: 16px;

  a {
    display: block;

    &:after {
      position: absolute;
      content: '>>>';
      right: 5px;
      top: 2px;
      color: #ccc;
    }
  }
}
</style>