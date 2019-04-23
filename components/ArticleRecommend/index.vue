<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章推荐
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 12:18:57
 * @LastEditTime: 2019-04-21 14:02:50
 -->
<template>
  <panel-box>
    <!-- art:article  rec: recommend -->
    <div class="art-rec">
      <sub-title title="推荐文章"></sub-title>

      <ul class="art-rec-list">
        <li class="art-rec-item">
          <nuxt-link to="">
            <img class="art-rec-img" src="//unsplash.it/249/150" alt="">
            <h4 class="art-rec-title">东方国际大力金刚劳动节观澜街道松岗街道发</h4>
          </nuxt-link>
        </li>
        <li class="art-rec-item">
          <nuxt-link to="">
            <img class="art-rec-img" src="//unsplash.it/249/150" alt="">
            <h4 class="art-rec-title">东方国际大力金刚劳动节观澜街道松岗街道发</h4>
          </nuxt-link>
        </li>
        <li class="art-rec-item">
          <nuxt-link to="">
            <img class="art-rec-img" src="//unsplash.it/249/150" alt="">
            <h4 class="art-rec-title">东方国际大力金刚劳动节观澜街道松岗街道发</h4>
          </nuxt-link>
        </li>
        <li class="art-rec-item">
          <nuxt-link to="">
            <img class="art-rec-img" src="//unsplash.it/249/150" alt="">
            <h4 class="art-rec-title">东方国际大力金刚劳动节观澜街道松岗街道发</h4>
          </nuxt-link>
        </li>
      </ul>

    </div>
  </panel-box>
</template>

<script>
import PanelBox from '@/components/PanelBox'
import SubTitle from '@/components/SubTitle'

export default {
  name: 'ArticleRecommend',
  components: {
    PanelBox,
    SubTitle,
  }
}
</script>

<style lang="scss" scoped>
.art-rec-list {
  @include clearfix;
}

.art-rec-item {
  float: left;
  width: 46%;
  margin-top: 10px;

  &:nth-child(2n) {
    margin-left: 8%;
  }

  a{
    font-size: 12px;
    line-height: 16px;
    color: $aColor;

    &:hover {
      color: $activeColor;
    }
  }
}

.art-rec-img {
  width: 100%;
  max-height: 100px;
}

.art-rec-title {
  min-height: 35px;
}
</style>
