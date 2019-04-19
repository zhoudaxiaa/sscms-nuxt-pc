<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 标题导航
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-16 14:48:46
 * @LastEditTime: 2019-04-16 15:16:30
 -->
<template>
  <div class="title-nav">
    <ul class="title-nav-list">
      <li class="title-nav-list-item">
        <h2 class="title-nav-text">最新文章</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TitleNav'
}
</script>

<style lang="scss" scoped>
.title-nav {
  height: 32px;
  border-bottom: 1px solid #efefef;
}

.title-nav-list-item {
  float: left;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }
}

.title-nav-text {
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  color: #409EFF;
  border-bottom: 2px solid #409EFF;
}
</style>