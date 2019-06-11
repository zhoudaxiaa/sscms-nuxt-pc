<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章详情页
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-05-13 09:39:51
 * @LastEditTime: 2019-06-11 18:41:51
 -->
<template>
  <section class="main-wrap w1200">

    <!-- 主体左边开始 -->
    <div class="main-lf">

      <!-- 文章容器开始 -->
      <!-- art: article -->
      <div class="art-wrap">
        <h1 class="art-title">{{articleData.title}}</h1>

        <!-- 文章属性开始 -->
        <!-- attr: attribute -->
        <ul class="art-attr">
          <li class="art-author">
            <nuxt-link to="">
              {{articleData.author.name}}
            </nuxt-link>
          </li>
          <li class="art-category">
            <nuxt-link to="">
              {{articleData.category[0].name}}
            </nuxt-link>
          </li>
          <li>{{articleData.publish_time}}</li>
          <li>阅读量{{articleData.view_num}}</li>
        </ul>
        <!-- 文章属性结束 -->

        <!-- 文章内容开始 -->
        <!-- cont: content -->
        <div
          class="art-cont markdown-body"
          v-html='articleData.content_word'>
        </div>
        <!-- 文章内容结束 -->

        <!-- 文章操作容器开始 -->
        <!-- op: operation -->
        <div class="art-op-wrap">

          <!-- 赞赏开始 -->
          <div class="art-reward">
            <p>觉得有用，赞赏来一波啦</p>
            <div class="btn-reward">
              赞赏支持
            </div>
          </div>
          <!-- 赞赏结束 -->

          <!-- 喜欢开始 -->
          <div class="live-wrap">
            <svg-icon
              class="icon-like"
              icon-class="like-hollow">
            </svg-icon>
            <span class="like-text">
              喜欢
            </span>
            <span class="like-num">
              {{articleData.like_num || 0}}
            </span>
          </div>
          <!-- 喜欢结束 -->

          <!-- 分享开始 -->
          <ul class="share-wrap">
            <li>
              <svg-icon
                icon-class="wechat">
              </svg-icon>
            </li>
            <li>
              <svg-icon
                icon-class="sina">
              </svg-icon>
            </li>
            <li>
              <svg-icon
                icon-class="qq">
              </svg-icon>
            </li>
          </ul>
          <!-- 分享结束 -->

        </div>
        <!-- 文章操作容器开始 -->

        <!-- 文章评论开始 -->
        <div class="art-comment">
          <p class="comment-title">评论</p>
          <div class="new-comment">

            <div class="avatar-wrap">
              <img src="//unsplash.it/40/40" alt="">
            </div>

            <div class="comment-wrap">
              <textarea
                class="comment-content"
                placeholder="写下你的评论...">
              </textarea>

              <div class="send-wrap">
                <div class="btn-send">发送</div>
              </div>
            </div>

          </div>

          <!-- 评论列表开始 -->
          <ul class="comment-list">

            <li class="comment-item">

              <div class="author-wrap">
                <nuxt-link class="author-avatar" to="">
                  <img src="//unsplash.it/40/40" alt="">
                </nuxt-link>

                <!-- attr: attribute -->
                <div class="author-attr">
                  <p class="nickname">周大侠啊</p>
                  <p class="comment-time">2019.02.01 16:00</p>
                </div>

              </div>

              <p class="comment">
                上点击弗利萨积分事件立即收到连接
              </p>

              <div class="comment-op">
                <span class="btn-star">
                  <svg-icon icon-class="zan"></svg-icon>
                  赞
                </span>
                <span class="btn-reply">
                  <svg-icon icon-class="comment"></svg-icon>
                  回复
                </span>
              </div>

            </li>

          </ul>
          <!-- 评论列表结束 -->
        </div>
        <!-- 文章评论结束 -->

      </div>
      <!-- 文章容器结束 -->

      <!-- 推荐文章开始 -->
      <article-recommend :topArticle="topArticle"></article-recommend>
      <!-- 推荐文章结束 -->

    </div>

    <!-- 主体右边开始 -->
    <div class="main-rt">

      <!-- 右侧内容开始 -->
      <div class="main-rt-cont">

        <!-- 文章分类开始 -->
        <article-category :category="categoryData">
        </article-category>
        <!-- 文章分类结束 -->

        <!-- 热门文章开始 -->
        <article-hot :hotArticle="hotArticle"></article-hot>
        <!-- 热门文章结束 -->

      </div>
      <!-- 右侧内容结束 -->

    </div>
    <!-- 主体左边结束 -->

  </section>
  
</template>

<script>
import ArticleRecommend from '@/components/ArticleRecommend'
import ArticleCategory from '@/components/ArticleCategory'
import ArticleHot from '@/components/ArticleHot'

import apiPath from '@/config/apiPath'

export default {
  components: {
    ArticleCategory,
    ArticleHot,
    ArticleRecommend,
  },
  async asyncData({ app, params }) {
    
    let id = params.id

    let [
      articleData,
      categoryData,
      hotArticle,
      topArticle,
    ] = await Promise.all([
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/${id}`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.category}?start=0&count=10sortBy=sort`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/hot?start=0&count=10`),
      app.$axios.get(`${apiPath.baseUrl}${apiPath.v1.article}/top?start=0&count=10`),
    ])

    let content_mkd = articleData.content_mkd

    return {
      articleData,
      categoryData,
      hotArticle,
      topArticle,
      content_mkd,
    }
  },
}
</script>

<style lang="scss" scoped>
.art-wrap {
  background-color: #fff;
  padding: 20px 20px 60px;
  margin-bottom: 20px;
}

.art-attr {
  @include clearfix;

  padding: 25px 0;

  li {
    float: left;
    margin-right: 20px;
    font-size: 13px;
    color: #969696;

    &:before {
      content: ' • '
    }
  }

  .art-author {
    color: $activeColor;

    &:before {
      content: ''
    }
  }

  .art-cetegory {
    color: $aColor;
  }
}

.art-title {
  font-size: 22px;
  word-break: break-all;
  font-weight: 500;
  line-height: 1.4;
}

.art-cont {
  padding: 10px 0 30px 0;
}

.art-op-wrap {
  @include clearfix;
  
  text-align: center;
  padding: 30px 0 60px;
  border-top: 1px solid #ccc;
}

.art-reward {
  padding-bottom: 30px;
  
  p {
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: #969696;
  }
  
}

.btn-reward {
  display: inline-block;
  margin: 20px auto 0;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid $activeColor;
  background-color: $activeColor;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: $activeHoverColor;
  }
}

.live-wrap {
  float: left;
  padding: 15px 20px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid $activeColor;
  color: $activeColor;

  &:hover {
    background-color: #dde9fa;
  }
}

.icon-like {
  font-size: 18px;
  color: $activeColor;
  vertical-align: middle;
}

.like-text {
  padding-right: 10px;
}

.like-num {
  padding-left: 15px;
  border-left: 1px solid $activeColor;
}

.share-wrap {
  float: right;

  li {
    float: left;
    margin-left: 10px;
    height: 50px;
    width: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #dde9fa;
    }

    svg {
      font-size: 30px;
      vertical-align: middle;
      margin-top: -9px;
    }
  }
}

.comment-title {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: #969696;
}

.comment-title {
  padding-bottom: 20px;
}

.new-comment {
  @include clearfix;
}

.avatar-wrap {
  float: left;
  width: 10%;
  padding-left: 4%;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
}

.comment-wrap {
  float: left;
  width: 88%;
  margin-left: 10px;
}

.comment-content {
  resize: none;
  outline-style: none;
  font-size: 13px;
  width: 100%;
  height: 100px;
  background-color: #f4f8ff;
  padding: 8px 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
}

.send-wrap {
  @include clearfix;
  
  padding-top: 10px;
}

.btn-send {
  display: inline-block;
  float: right;
  padding: 8px 20px;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  background-color: #42c02e;

  &:hover {
    background-color: #308d21;
  }
}

.comment-list {
  padding-top: 20px;
  margin-left: 4%;
}

.author-wrap {
  @include clearfix;
}

.author-avatar {
  float: left;
  width: 6%;
  font-size: 15px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
}

.author-attr {
  float: left;
  margin-left: 10px;
}

.nickname {
  font-size: 15px;
  margin-bottom: 6px;
}

.comment-time {
  font-size: 14px;
  color: #999;
}

.comment {
  padding: 20px 0;
}

.comment-op {

  span {
    color: #999;
    font-size: 14px;
    margin-right: 10px;
    cursor: pointer;

    svg {
      font-size: 16px;
      margin-top: 1px;
      vertical-align: top;
    }

    &:hover {
      color: $activeColor;
    }
  }
}

/deep/ .art-rec-item {
  width: 31%;
  margin-left: 3%;

  &:nth-child(2n) {
    margin-left: 3%;
  }

  &:nth-child(4n) {
    margin-left: 0;
  }

  &:first-child {
    margin-left: 0;
  }

}

/deep/ .art-rec-img {
  max-height: 400px;
}

/deep/ .art-rec-title {
  padding-top: 10px;
}
</style>
