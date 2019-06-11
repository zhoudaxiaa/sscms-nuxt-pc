<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 右边顶部的广告
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-19 14:57:05
 * @LastEditTime: 2019-06-09 20:28:48
 -->

<template>
  <div class="top-ads">
    <div v-swiper:swiper="swiperOp">
      <div class="swiper-wrapper">
        <template v-for="item in adsData.ads">
          <div
            class="swiper-slide"
            :key="item.id">
            <img :style="`height:${adsData.height}px`" :src="item.img_url">
          </div>
        </template>

      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

export default {
  name: 'TopAds',
  props: {
    adsData: {
      type: Object,
      default: ''
    }
  },
  data () {
    return {
      swiperOp: {
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
  }
}
</script>

<style lang="scss" scoped>
.top-ads {
  margin-bottom: 20px;
}

.swiper-slide {
  img {
    width: 100%;
    max-height: 250px;
  }
}
</style>