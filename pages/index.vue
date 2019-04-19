<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 首页
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-08 14:34:44
 * @LastEditTime: 2019-04-19 16:51:31
 -->

<template>
  <div class="main-wrap w1200">
    <section>

      <!-- 主体左边开始 -->
      <div class="main-lf">

        <!-- banner 开始 -->
        <div class="banner-wrap">
          
          <div v-swiper:swiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="//unsplash.it/780/380" alt="">
              </div>
              <div class="swiper-slide">
                <img src="//unsplash.it/780/380" alt="">
              </div>
              <div class="swiper-slide">
                <img src="//unsplash.it/780/380" alt="">
              </div>
            </div>

            <div class="swiper-pagination"></div>
          </div>

        </div>
        <!-- banner 结束 -->

        <!-- 最新文章开始 -->
        <div class="newest-article">

          <title-nav></title-nav>

          <!-- 文章封面列表开始 -->
          <article-list></article-list>

          <!-- 文章封面列表结束 -->

          <!-- 分页导航开始 -->
          <pagenation class="pagenation-wrap"></pagenation>
          <!-- 分页导航结束 -->

        </div>
        <!-- 最新文章结束 -->


      </div>

      <!-- 主体右边开始 -->
      <div class="main-rt">

        <!-- 顶部广告开始 -->
        <top-ads adsImg="//unsplash.it/400/250"></top-ads>
        <!-- 顶部广告结束 -->

        <!-- 右侧内容开始 -->
        <div class="main-rt-cont">

          <!-- 文章分类开始 -->
          <article-category></article-category>
          <!-- 文章分类结束 -->

        </div>
        <!-- 右侧内容结束 -->

      </div>

    </section>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
import TitleNav from '@/components/TitleNav'
import Pagenation from '@/components/Pagenation'
import TopAds from '@/components/TopAds'
import ArticleCategory from '@/components/ArticleCategory'

import 'swiper/dist/css/swiper.css'

export default {
  components: {
    ArticleList,
    TitleNav,
    Pagenation,
    TopAds,
    ArticleCategory,
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
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
.main-wrap {
  margin-top: 80px;
}

.swiper-slide {
  img {
    width: 100%;
    max-width: 780px;
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

.swiper-pagination-bullet {
  background-color: #fff;

  &.swiper-pagination-bullet-active {
    width: 1.5rem;
    border-radius: 10px;
  }
}

</style>
