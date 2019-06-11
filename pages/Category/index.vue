<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 分类
 * @Version: 1.0
 * @Date: 2019-05-20 16:43:09
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 13:59:14
 -->
<template>
  <section class="main-wrap w1200">

    <!-- 主体左边开始 -->
    <div class="main-lf">

      <!-- cate: category-->
      <div class="cate-wrap">

        <!-- 分类列表开始 -->
        <category-list :categoryData="categoryData"></category-list>
        <!-- 分类列表结束 -->
        
      </div>

    </div>

    <!-- 主体右边开始 -->
    <div class="main-rt">

      <!-- 右侧内容开始 -->
      <div class="main-rt-cont">

        <!-- 文章分类开始 -->
        <article-category :category="categoryData"></article-category>
        <!-- 文章分类结束 -->

        <!-- 最新文章开始 -->
        <article-hot :hotArticle="hotArticle"></article-hot>
        <!-- 最新文章结束 -->

      </div>
      <!-- 右侧内容结束 -->

    </div>
    <!-- 主体左边结束 -->

  </section>
  
</template>

<script>
import CategoryList from '@/components/CategoryList'
import ArticleCategory from '@/components/ArticleCategory'
import ArticleHot from '@/components/ArticleHot'

import apiPath from '@/config/apiPath'

export default {
  components: {
    CategoryList,
    ArticleCategory,
    ArticleHot,
  },
  async asyncData ({ app }) {
    let [
      categoryData,
      hotArticle,
    ] = await Promise.all([
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.category}?start=0&count=10sortBy=sort`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/hot?start=0&count=10`),
    ])

    return {
      categoryData,
      hotArticle,
    }
  }
}
</script>

<style lang="scss" scoped>

.cate-wrap {
  background-color: #fff;
  padding: 10px 20px;
}

</style>