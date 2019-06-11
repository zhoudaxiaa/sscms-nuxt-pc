<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章封面的标签
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-17 13:51:52
 * @LastEditTime: 2019-06-11 16:04:11
 -->

<template>
  <!-- art: article -->
  <span class="art-tag">
    {{tag ? '原创' : '转载'}}
  </span>
</template>

<script>
export default {
  name: 'ArticleTag',
  props: {
    tag: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.art-tag {
  padding: 5px 6px;
  background-color: rgba(0,0,0,.5);
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
}
</style>