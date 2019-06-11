<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章列表单个封面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-19 15:14:01
 * @LastEditTime: 2019-06-11 17:16:44
 -->
<template>
  <!-- art: article -->
  <article class="art-list-item">

    <div class="art-cover">
      <img class="art-img" :src="article.cover_img">
      
      <article-tag :tag="article.from" class="art-tag-wrap"></article-tag>

    </div>

    <!-- attr: attribute -->
    <div class="art-attr-wrap">
      
      <h3 class="art-title">
        <nuxt-link :to="`article/${article.id}`">
          {{article.title}}
        </nuxt-link>
      </h3>
      
      <p class="art-introduce">{{article.introduce}}</p>
      
      <!-- 文章属性列表开始 -->
      <ul class="art-attr-list">
        <li class="art-attr-list-item">
          <avatar-box
            link='/'
            :avatar="article.author.avatar"
            :name="article.author.name">
          </avatar-box>
        </li>
        <li class="art-attr-list-item">
          <svg-text-box
            iconClass="time"
            :text="article.publish_time">
          </svg-text-box>
        </li>
        <li class="art-attr-list-item">
          <svg-text-box
            iconClass="view"
            :text="article.view_num">
          </svg-text-box>
        </li>
        <li class="art-attr-list-item">
          <svg-text-box
            iconClass="comment"
            :text="article.comment_id.length">
          </svg-text-box>
        </li>
      </ul>
      <!-- 文章属性列表结束 -->

      <nuxt-link
        class="view-art"
        :to="`article/${article.id}`">
        阅读全文
      </nuxt-link>

    </div>

  </article>
</template>

<script>
import ArticleTag from '@/components/ArticleTag'
import SvgTextBox from '@/components/SvgTextBox'
import AvatarBox from '@/components/AvatarBox'

export default {
  name: 'Item',
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ArticleTag,
    SvgTextBox,
    AvatarBox,
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