<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章分类
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-19 16:16:15
 * @LastEditTime: 2019-06-09 18:23:25
 -->

<template>
  <panel-box>
    <!-- art: article  cate: category -->
    <div class="art-cate">
      <sub-title title="文章分类"></sub-title>

      <ul class="art-cate-list">
        <template v-for="item in category.list">
          <li
            class="art-cate-item"
            :key="item.id">
            <nuxt-link to="">
              <h4 class="art-cate-title">{{item.name}}</h4>
              <span class="art-cate-art-num">{{item.article.length}}</span>
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
  name: 'ArticleCategory',
  props: {
    category: {
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

.art-cate-list {
  margin-top: 10px;
}

.art-cate-item {
  padding: 8px 0 8px 8px;

  a {
    @include clearfix;

    font-size: 14px;
    color: $aColor;

    &:hover {
      color: $aHoverColor;
    }
  }
}

.art-cate-title{
  float: left;
}

.art-cate-art-num {
  float: right;
}
</style>