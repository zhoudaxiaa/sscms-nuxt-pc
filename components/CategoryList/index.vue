<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 分类列表
 * @Version: 1.0
 * @Date: 2019-05-20 15:12:52
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 13:43:30
 -->
<template>
  <section class="category-list">
    <template v-for="item in categoryData.list">
      <item :key="item.id" :category="item"></item>
    </template>
  </section>
</template>

<script>
import Item from './Item'

export default {
  name: 'CategoryList',
  props: {
    categoryData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>

</style>