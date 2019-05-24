<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 底部
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 16:48:44
 * @LastEditTime: 2019-05-15 14:35:19
 -->
<template>
  <footer class="footer">
    <div class="w1200">

      <ul class="qr-code">
        <li>
          <img src="//unsplash.it/100/100" alt="">
          <p>微信公众号</p>
        </li>
        <li>
          <img src="//unsplash.it/100/100" alt="">
          <p>博主微信号</p>
        </li>
      </ul>
      <div class="foot-cont">
        <h6>博客说明：</h6>
        <p>1、本站个人博客模板，均为周大侠啊本人设计，个人可以使用，但是未经许可不得用于任何商业目的。</p>
        <p>2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：1250198256@qq.com</p>
        <div class="copyright">
          <span>自豪的采用</span>
          <nuxt-link to="">SSCMS V1.0</nuxt-link>
          <span>Copyright (c) 2018 </span>
          <nuxt-link to="">京ICP备18017863号-1</nuxt-link>
          <span>All Rights Reserved</span>
          <nuxt-link to="">站点地图</nuxt-link>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'VFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  @include clearfix;

  color: #fff;
  padding: 50px 0;
  background-color: #2d3237;
}

.qr-code {
  float: left;
  margin-right: 20px;

  li {
    float: left;
    margin-right: 20px;
  }

  p {
    text-align: center;
    color: #76818C;
  }
}
.foot-cont {
  float: left;
  padding-top: 10px;

  h6 {
    font-weight: bold;
    color: $activeColor;
    margin-bottom: 10px;
  }
    
  p {
    font-size: 14px;
    color: #5F676F;
    line-height: 1.5;
  }
}

.copyright {
  margin-top: 20px;

  span {
    font-size: 14px;
    color: #5F676F;
  }

  a {
    font-size: 14px;
    color: #76818C;
  }
}

@media screen and (max-width: 1200px){
  .qr-code {
    display: none;
  }
  
  .foot-cont {
    margin-left: 30px;
  }
}
</style>