<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 专栏列表单个
 * @Version: 1.0
 * @Date: 2019-05-20 14:18:37
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-20 14:59:01
 -->

<template>
  <!-- col: column -->
  <article class="col-list-item">

    <div class="col-cover">
      <img class="col-img" src="//unsplash.it/240/150" alt="">
      
      <article-tag class="col-tag-wrap"></article-tag>

    </div>

    <!-- attr: attribute -->
    <div class="col-attr-wrap">
      
      <h3 class="col-title">
        <nuxt-link to="">
          sscms 内容管理系统正式发布
        </nuxt-link>
      </h3>
      
      <p class="col-introduce">适得府君书雷锋精神垃圾分类设计啊安防连接收到拉法基谁拉的减肥啦时代峻峰四邻非旧识雷锋精神劳动节封龙山剪短发链接时理解的斐林试剂</p>
      
      <!-- 文章属性列表开始 -->
      <ul class="col-attr-list">
        <li class="col-attr-list-item">
          <avatar-box
            link='/'
            avatar="//unsplash.it/22/22"
            name="周大侠啊">
          </avatar-box>
        </li>
        <li class="col-attr-list-item">
          <svg-text-box
            iconClass="time"
            text="999">
          </svg-text-box>
        </li>
        <li class="col-attr-list-item">
          <svg-text-box
            iconClass="view"
            text="999">
          </svg-text-box>
        </li>
        <li class="col-attr-list-item">
          <svg-text-box
            iconClass="comment"
            text="999">
          </svg-text-box>
        </li>
      </ul>
      <!-- 文章属性列表结束 -->

      <span
        class="btn-col-follow">
        关注专栏
      </span>

    </div>

  </article>
</template>

<script>
import ArticleTag from '@/components/ArticleTag'
import SvgTextBox from '@/components/SvgTextBox'
import AvatarBox from '@/components/AvatarBox'

export default {
  name: 'Item',
  components: {
    ArticleTag,
    SvgTextBox,
    AvatarBox,
  }
}
</script>

<style lang="scss" scoped>
.col-list-item {
  @include clearfix;

  padding: 20px 0;
  border-bottom: 1px solid #efefef;
}

.col-cover {
  position: relative;
  float: left;
}

.col-img {
  width: 240px;
  height: 150px;
}

.col-tag-wrap {
  position: absolute;
  top: 10px;
  left: 10px;
}

.col-attr-list {
  float: left;
}

.col-attr-wrap {
  padding-left: 260px;
}

.col-title {
  height: 25px;
  line-height: 25px;

  a {
    font-size: 18px;
    color: $aColor;
    font-weight: 500;
  }
}

.col-introduce {
  margin: 10px 0;
  font-size: 13px;
  color: $textColor;
  min-height: 70px;
  max-height: 85px;
  line-height: 1.8;
}

.col-attr-list-item {
  float: left;
  margin-right: 8px;
}

.btn-col-follow {
  float: right;
  padding: 5px 10px;
  background-color: $activeColor;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: $activeHoverColor;
  }
}
</style>