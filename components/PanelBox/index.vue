<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 面板盒子
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 11:08:32
 * @LastEditTime: 2019-05-20 16:23:45
 -->

<template>
  <section class="panel-box">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PanelBox'
}
</script>

<style lang="scss" scoped>
.panel-box {
  margin-bottom: 15px;
  padding: 15px 15px 25px;
  background-color: #fff;
}
</style>