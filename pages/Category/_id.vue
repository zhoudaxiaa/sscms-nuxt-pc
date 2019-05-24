<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 分类文章
 * @Version: 1.0
 * @Date: 2019-05-20 16:55:56
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-21 13:04:40
 -->
<template>
  <section class="main-wrap w1200">

    <!-- 主体左边开始 -->
    <div class="main-lf">

      <!-- cate: category -->
      <div class="cate-wrap">

        <title-nav></title-nav>

        <!-- 文章列表开始 -->
        <article-list></article-list>
        <!-- 文章列表结束 -->
        
      </div>

    </div>

    <!-- 主体右边开始 -->
    <div class="main-rt">

      <!-- 右侧内容开始 -->
      <div class="main-rt-cont">

        <!-- 文章分类开始 -->
        <article-category></article-category>
        <!-- 文章分类结束 -->

        <!-- 最新文章开始 -->
        <article-hot></article-hot>
        <!-- 最新文章结束 -->

      </div>
      <!-- 右侧内容结束 -->

    </div>
    <!-- 主体左边结束 -->

  </section>
  
</template>

<script>
import TitleNav from '@/components/TitleNav'
import ArticleList from '@/components/ColumnList'
import ArticleCategory from '@/components/ArticleCategory'
import ArticleHot from '@/components/ArticleHot'

export default {
  components: {
    TitleNav,
    ArticleList,
    ArticleCategory,
    ArticleHot,
  }
}
</script>

<style lang="scss" scoped>

.cate-wrap {
  background-color: #fff;
  padding: 10px 20px;
}

</style>