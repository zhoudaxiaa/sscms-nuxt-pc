<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章列表
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-16 13:44:33
 * @LastEditTime: 2019-06-09 20:27:07
 -->
<template>
  <section class="article-list">
    <template v-for="item in articleData.list">
      <item :key="item.id" :article="item"></item>
    </template>
  </section>
</template>

<script>
import Item from './Item'

export default {
  name: 'ArticleList',
  props: {
    articleData: {
      type: Object,
      default: () => {}
    },
  },
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>

</style>
