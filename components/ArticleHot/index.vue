<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 热门文章
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 11:20:33
 * @LastEditTime: 2019-06-10 23:09:40
 -->

<template>
  <panel-box>
    <!-- art: article -->
    <div class="art-hot">
      <sub-title title="热门文章"></sub-title>

      <ul class="art-hot-list">
        <template v-for="item in hotArticle.list">
          <li
            :key="item.id"
            class="art-hot-item">
            <nuxt-link to="">
              <h4 class="art-hot-title">
                {{item.title}}
              </h4>
            </nuxt-link>
          </li>
        </template>
        
      </ul>

    </div>
  </panel-box>
</template>

<script>
import PanelBox from '@/components/PanelBox'
import SubTitle from '@/components/SubTitle'

export default {
  name: 'ArticleHot',
  props: {
    hotArticle: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    PanelBox,
    SubTitle,
  }
}
</script>

<style lang="scss" scoped>
.art-hot-list {
  margin-top: 10px;
}

.art-hot-item {
  padding: 8px 0 8px 8px;

  a {
    font-size: 14px;
    color: $textColor;

    &:hover {
      color: $aHoverColor;
    }
  }
}
</style>