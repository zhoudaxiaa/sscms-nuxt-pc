<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 专栏详情
 * @Version: 1.0
 * @Date: 2019-05-20 14:31:52
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-20 15:12:01
 -->
<template>
  <section class="main-wrap w1200">

    <!-- 主体左边开始 -->
    <div class="main-lf">

      <!-- 专栏开始 -->
      <!-- col: column -->
      <div class="col-wrap">

        <!-- 专栏头部开始 -->
        <div class="col-head">

          <!-- attr: attribute -->
          <div class="col-attr-wrap">
            <div class="col-cover-img">
              <img src="//unsplash.it/80/80" alt="">
            </div>

            <h2 class="col-title">进击的javascript</h2>
            <p class="col-attr">
              收录了8篇文章·99人关注
            </p>

          </div>

          <div class="btn-col-follow">
            + 关注
          </div>

        </div>
        <!-- 专栏头部开始 -->

        <article-list></article-list>

      </div>
      <!-- 专栏结束 -->

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
import ArticleList from '@/components/ArticleList'
import ArticleCategory from '@/components/ArticleCategory'
import ArticleHot from '@/components/ArticleHot'

export default {
  components: {
    ArticleList,
    ArticleCategory,
    ArticleHot,
  }
}
</script>

<style lang="scss" scoped>
.col-wrap {
  background-color: #fff;
  padding: 10px 20px;
}

.col-head {
  @include clearfix;
  padding: 20px 0;
  border-bottom: 1px solid #dedede;
}

.col-attr-wrap {
  float: left;
}

.col-cover-img {
  float: left;
  padding-left: 20px;
}

.col-title, .col-attr {
  padding-left: 120px;
  margin: 15px 0;
}

.col-title {
  font-size: 21px;
  font-weight: 700;
}

.col-attr {
  font-size: 14px;
  color: #969696;
}

.btn-col-follow {
  float: right;
  margin-top: 25px;
  padding: 8px 20px;
  background-color: $activeColor;
  font-size: 14px;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: $activeHoverColor;
  }
}
</style>