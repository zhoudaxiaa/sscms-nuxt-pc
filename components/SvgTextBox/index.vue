<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: svg图表和文本盒子
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-17 15:19:23
 * @LastEditTime: 2019-06-10 23:42:53
 -->

<template>
  <div>
    <svg-icon class="svg-box-icon" :icon-class="iconClass"></svg-icon>
    <span class="svg-box-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'SvgTextBox',
  props: {
    iconClass: {
      type: String,
      default: '',
    },
    text: {
      type: String|Number,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-box-icon {
  vertical-align: middle;
  color: #999;
}

.svg-box-text {
  font-size: 13px;
  color: #999;
}
</style>
