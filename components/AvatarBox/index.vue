<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 作者头像加昵称盒子
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 13:01:09
 * @LastEditTime: 2019-04-21 13:57:43
 -->
<template>
  <div class="avatar-box">
    <nuxt-link :to="link">
      <!-- auth: author -->
      <img class="auth-avatar" :src="avatar" alt="">
      <span class="auth-name">{{name}}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AvatarBox',
  props: {
    link: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-box {
  a {
    font-size: 13px;
    color: #999;
    
    &:hover {
      color: $activeColor;
    }
  }
}

.auth-avatar {
  margin-right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  vertical-align: top;
}

.auth-name {
  display: inline-block;
  margin-top: 4px;
}
</style>