<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 单个分类
 * @Version: 1.0
 * @Date: 2019-05-20 15:15:44
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-21 13:00:54
 -->
<template>
  
  <!-- cate: category -->
  <div class="cate-list-item">

    <h2 class="cate-title">前端</h2>

    <!-- attr: attribute -->
    <div class="cate-attr-wrap">
      <ul class="cate-attr-list">
        <li class="cate-attr-item">
          <svg-icon
            icon-class="article">
          </svg-icon>
          <span>9篇</span>
        </li>

        <li class="cate-attr-item">
          <svg-icon
            icon-class="view">
          </svg-icon>
          <span>999</span>
        </li>

        <li class="cate-attr-item">
          <svg-icon
            icon-class="comment">
          </svg-icon>
          <span>999</span>
        </li>
      </ul>

      <div class="btn-view-cate">
        查看分类
      </div>
    </div>

  </div>

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
.cate-list-item {
  @include clearfix;

  padding: 30px 10px 10px;
  border-bottom: 1px solid #e7e7e7;
}

.cate-title {
  float: left;
  font-weight: 700;
}

.cate-attr-wrap {
  float: right;
}

.cate-attr-list {
  float: left;
  margin-right: 15px;
}

.cate-attr-item {
  float: left;
  padding: 0 5px;

  svg {
    font-size: 14px;
    vertical-align: middle;
  }

  span {
    color: #969696;
    font-size: 14px;
  }
}

.btn-view-cate {
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