<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 面板盒子
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 11:08:32
 * @LastEditTime: 2019-04-21 12:53:11
 -->

<template>
  <div class="panel-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PanelBox'
}
</script>

<style lang="scss" scoped>
.panel-box {
  margin-top: 15px;
  padding: 15px 15px 25px;
  background-color: #fff;
}
</style>