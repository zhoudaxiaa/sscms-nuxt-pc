<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 首页
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-08 14:34:44
 * @LastEditTime: 2019-06-11 14:53:42
 -->

<template>
  <section class="main-wrap w1200">

    <!-- 主体左边开始 -->
    <div class="main-lf">

      <!-- banner 开始 -->
      <div class="banner-wrap">
        
        <div v-swiper:swiper="swiperOption">
          <div class="swiper-wrapper">
            <template v-for="item in bannerCategoryData.ads">
              <div
                class="swiper-slide"
                :key="item.id">
                <img :style="`height:${bannerCategoryData.height}px`" :src="item.img_url">
              </div>
            </template>

          </div>

          <div class="swiper-pagination"></div>
        </div>

      </div>
      <!-- banner 结束 -->

      <!-- 最新文章开始 -->
      <div class="newest-article">

        <title-nav></title-nav>

        <!-- 文章封面列表开始 -->
        <article-list
          :articleData="newestArticle">
        </article-list>

        <!-- 文章封面列表结束 -->

        <!-- 分页导航开始 -->
        <!-- <pagenation
          v-if="newestArticle.total > 10"
          class="pagenation-wrap"
          :total="newestArticle.total"
          :current>
        </pagenation> -->
        <el-pagination
          class="pagination-wrap"
          :hide-on-single-page="true"
          background
          :current-page.sync="currentPage"
          @current-change="pageChange"
          layout="total, prev, pager, next"
          :total="newestArticle.total">
        </el-pagination>
        <!-- 分页导航结束 -->

      </div>
      <!-- 最新文章结束 -->


    </div>

    <!-- 主体右边开始 -->
    <div class="main-rt">

      <!-- 顶部广告开始 -->
      <top-ads :adsData="rightTopBaner"></top-ads>
      <!-- 顶部广告结束 -->

      <!-- 右侧内容开始 -->
      <div class="main-rt-cont">

        <!-- 文章分类开始 -->
        <article-category :category="categoryData">
        </article-category>
        <!-- 文章分类结束 -->

        <!-- 热门文章开始 -->
        <article-hot :hotArticle="hotArticle"></article-hot>
        <!-- 热门文章结束 -->

        <!-- 推荐文章开始 -->
        <article-recommend :topArticle="topArticle"></article-recommend>
        <!-- 推荐文章结束 -->

        <!-- 最新评论开始 -->
        <comment-newest :comment="newestComment"></comment-newest>
        <!-- 最新评论结束 -->

      </div>
      <!-- 右侧内容结束 -->

    </div>
    <!-- 主体左边结束 -->

  </section>
  
</template>

<script>
import ArticleList from '@/components/ArticleList'
import TitleNav from '@/components/TitleNav'
import Pagenation from '@/components/Pagenation'
import TopAds from '@/components/TopAds'
import ArticleCategory from '@/components/ArticleCategory'
import ArticleHot from '@/components/ArticleHot'
import ArticleRecommend from '@/components/ArticleRecommend'
import CommentNewest from '@/components/CommentNewest'

import 'swiper/dist/css/swiper.css'

import apiPath from '@/config/apiPath'


export default {
  components: {
    ArticleList,
    TitleNav,
    Pagenation,
    TopAds,
    ArticleCategory,
    ArticleHot,
    ArticleRecommend,
    CommentNewest,
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        //自动播放
        autoplay: {
          delay: 3500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: "bullets"
        },
      },
      
      currentPage: 1,  // 当前页
    }
  },

  async asyncData ({ app }) {
    let [
      bannerCategoryData,
      rightTopBaner,
      categoryData,
      newestArticle,
      hotArticle,
      topArticle,
      newestComment,
    ] = await Promise.all([
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.adsCategory}/UYIP-EbIl`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.adsCategory}/WNWP_iWBu`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.category}?start=0&count=10sortBy=sort`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/newest?start=0&count=10`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/hot?start=0&count=10`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/top?start=0&count=10`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.newestComment}?start=0&count=10`),
    ])

    return {
      bannerCategoryData,
      rightTopBaner,
      categoryData,
      newestArticle,
      hotArticle,
      topArticle,
      newestComment,
    }
  },

  methods: {

    getDataOp (start, count) {
      return this.$axios.get(`${apiPath.v1.newestArticle}?start=${start}&count=${count}`)
    },

    /**
     * @description: 当前页面改变时调用，获取数据
     * @param {Number} page 当前页码 
     * @return: 
     */
    async pageChange (page) {
      let count = 10

      this.currentPage = page

      const data = await this.getDataOp((page-1)*count, count)  // 从第几条开始获取，10条数据

      if (data) this.newestArticle = data  // 数据
        
    },
  }
}
</script>

<style scoped lang="scss">

.swiper-slide {
  img {
    width: 100%;
    max-height: 380px;
  }
}

.newest-article {
  background-color: #fff;
  padding: 10px 20px;
  margin-top: 20px;
  padding-bottom: 60px;
}

.pagenation-wrap {
  margin-top: 30px;
}

</style>

<style lang="scss">
// 全局覆盖swiper 默认样式

.swiper-pagination-bullet {
  background-color: #fff;

  &.swiper-pagination-bullet-active {
    width: 1.5rem;
    border-radius: 10px;
  }
}

</style>
