<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: new project
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-19 15:14:01
 * @LastEditTime: 2019-04-19 15:14:51
 -->
<template>
  <!-- art: article -->
  <article class="art-list-item">

    <div class="art-cover">
      <img class="art-img" src="//unsplash.it/240/150" alt="">
      
      <article-tag class="art-tag-wrap"></article-tag>

    </div>

    <!-- attr: attribute -->
    <div class="art-attr-wrap">
      
      <h3 class="art-title">
        <nuxt-link to="">
          sscms 内容管理系统正式发布
        </nuxt-link>
      </h3>
      
      <p class="art-introduce">适得府君书雷锋精神垃圾分类设计啊安防连接收到拉法基谁拉的减肥啦时代峻峰四邻非旧识雷锋精神劳动节封龙山剪短发链接时理解的斐林试剂</p>
      
      <!-- 文章属性列表开始 -->
      <ul class="art-attr-list">
        <li class="art-attr-list-item">
          <nuxt-link to="">
            <img class="atr-avatar" src="//unsplash.it/22/22" alt="">
            <span class="art-attr-text">周大侠啊</span>
          </nuxt-link>
        </li>
        <li class="art-attr-list-item">
          <svg-text-box
            iconClass="time"
            text="999">
          </svg-text-box>
        </li>
        <li class="art-attr-list-item">
          <svg-text-box
            iconClass="view"
            text="999">
          </svg-text-box>
        </li>
        <li class="art-attr-list-item">
          <svg-text-box
            iconClass="comment"
            text="999">
          </svg-text-box>
        </li>
      </ul>
      <!-- 文章属性列表结束 -->

      <nuxt-link
        class="view-art"
        to="">
        阅读全文
      </nuxt-link>

    </div>

  </article>
</template>

<script>
import ArticleTag from '@/components/ArticleTag'
import SvgTextBox from '@/components/SvgTextBox'

export default {
  name: 'Item',
  components: {
    ArticleTag,
    SvgTextBox
  }
}
</script>

<style lang="scss" scoped>
.art-list-item {
  @include clearfix;

  padding: 20px 0;
  border-bottom: 1px solid #efefef;
}

.art-cover {
  position: relative;
  float: left;
}

.art-img {
  width: 240px;
  height: 150px;
}

.art-tag-wrap {
  position: absolute;
  top: 10px;
  left: 10px;
}

.art-attr-list {
  float: left;
}

.art-attr-wrap {
  padding-left: 260px;
}

.art-title {
  height: 25px;
  line-height: 25px;

  a {
    font-size: 18px;
    color: $aColor;
    font-weight: 500;
  }
}

.art-introduce {
  margin: 10px 0;
  font-size: 13px;
  color: $textColor;
  min-height: 70px;
  max-height: 85px;
  line-height: 1.8;
}

.art-attr-list-item {
  float: left;
  margin-right: 8px;
}

.atr-avatar {
  margin-right: 10px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  vertical-align: middle;
}

.art-attr-text {
  font-size: 13px;
  color: #999;
}

.view-art {
  float: right;
  padding: 5px 10px;
  background-color: $activeColor;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;

  &:hover {
    background-color: $activeHoverColor;
  }
}
</style>