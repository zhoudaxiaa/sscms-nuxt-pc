<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 最新评论
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 15:21:39
 * @LastEditTime: 2019-04-21 16:14:23
 -->
<template>
  <panel-box>

    <!-- comt: comment -->
    <div class="comt-new">

      <sub-title
        class="comt-title"
        title="最新评论">
      </sub-title>

      <ul class="comt-new-list">
        <li class="comt-new-item">
          <h5 class="comt-new-top">
            <avatar-box
              class="comt-new-author"
              link="/"
              avatar="//unsplash.it/22/22"
              name="周大侠啊">
            </avatar-box>
            <span class="comt-new-time">1天前</span>
          </h5>
          <!-- cont: content -->
          <p class="comt-new-cont">真厉害，哈哈哈哈哈！！！</p>

          <!-- art: article -->
          <nuxt-link
            class="comt-art-link"
            to="">
            <h4 class="comt-art-title">山东交付给</h4>
          </nuxt-link>
        </li>

        <li class="comt-new-item">
          <h5 class="comt-new-top">
            <avatar-box
              class="comt-new-author"
              link="/"
              avatar="//unsplash.it/22/22"
              name="周大侠啊">
            </avatar-box>
            <span class="comt-new-time">1天前</span>
          </h5>
          <!-- cont: content -->
          <p class="comt-new-cont">真厉害，哈哈哈哈哈！！！</p>

          <!-- art: article -->
          <nuxt-link
            class="comt-art-link"
            to="">
            <h4 class="comt-art-title">山东交付给</h4>
          </nuxt-link>
        </li>

        <li class="comt-new-item">
          <h5 class="comt-new-top">
            <avatar-box
              class="comt-new-author"
              link="/"
              avatar="//unsplash.it/22/22"
              name="周大侠啊">
            </avatar-box>
            <span class="comt-new-time">1天前</span>
          </h5>
          <!-- cont: content -->
          <p class="comt-new-cont">真厉害，哈哈哈哈哈！！！</p>

          <!-- art: article -->
          <nuxt-link
            class="comt-art-link"
            to="">
            <h4 class="comt-art-title">山东交付给</h4>
          </nuxt-link>
        </li>
      </ul>

    </div>
  </panel-box>
</template>

<script>
import PanelBox from '@/components/PanelBox'
import SubTitle from '@/components/SubTitle'
import AvatarBox from '@/components/AvatarBox'

export default {
  name: 'CommentNew',
  components: {
    PanelBox,
    SubTitle,
    AvatarBox,
  }
}
</script>

<style lang="scss" scoped>
.comt-new-list {
  margin-top: 10px;
}

.comt-new-item {
  padding: 20px 0;
  border-top: 1px solid #efefef;
}

.comt-new-top {
  @include clearfix;
}

.comt-new-author {
  float: left;
  /deep/ a {
    color: $aColor;
  }
}

.comt-new-time {
  float: right;
  font-size: 12px;
  color: $aColor;
}

.comt-new-cont {
  margin-top: 10px;
  padding: 18px 18px;
  font-size: 14px;
  color: $textColor;
  background-color: #f5f5f5;
}

.comt-art-link {
  font-size: 14px;
  color: $aColor;

  &:hover {
    color: $activeColor;
  }
}

.comt-art-title {
  margin-top: 15px;
}
</style>