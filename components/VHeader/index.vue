<template>
  <header class="header-wrap">
    <div class="w1200">

      <!-- logo开始 -->
      <nuxt-link to="/">
        <img class="logo" :src="siteData.logo">
      </nuxt-link>
      <!-- logo结束 -->

      <!-- 导航开始 -->
      <nav
        class="nav-wrap"
        @wheel="scroll">
        <div
          class="scroll-wrap"
          ref="scrollWrap">

          <ul class="nav-list">
            <li
              class="nav-item">
              <nuxt-link
                :class="{'active' : '/' === $route.path}"
                to="/">
                首页
              </nuxt-link>
            </li>

            <template v-for="item in navData">
              <li
                :key="item.id"
                class="nav-item">
                <nuxt-link
                  :class="{'active' : item.link === $route.path}"
                  :to="item.link">
                  {{item.name}}
                </nuxt-link>
              </li>
            </template>

          </ul>
        </div>

      </nav>
      <!-- 导航结束 -->

      <div class="nav-right">

        <div class="search-wrap">
          <input class="search-text" type="text" placeholder="搜索">
          <span class="search-btn">

            <!-- svg组件 -->
            <svg-icon
              class="icon-search"
              icon-class="search">
            </svg-icon>

          </span>
        </div>

        <div class="nav-right-item">
          <nuxt-link to="">
            注册
          </nuxt-link>
        </div>

        <div class="nav-right-item">
          <nuxt-link class="login-btn" to="">
            登录
          </nuxt-link>
        </div>
      </div>


    </div>
  </header>
</template>

<script>
import apiPath from '@/config/apiPath'

export default {
  name: 'VHeader',

  props: {
    siteData: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      navData: [],
    }
  },

  created () {
    this.initData()
  },

  methods: {
    async initData () {

      let [ navData ] = await Promise.all([
        this.$axios.get(apiPath.v1.nav)
      ])

      this.navData = navData.list
    },
    scroll (e) {
      let wheelData = e.wheelDelta || e.deltaY
      let scrollWrap = this.$refs.scrollWrap
      scrollWrap.scrollLeft = scrollWrap.scrollLeft - wheelData / 4
    }
  },
}
</script>

<style scoped lang="scss">
.w1200 {
  position: relative;
}

.header-wrap {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 3px 1px rgba(252, 252, 252, 0.1);
  overflow-y: hidden;
}

.logo {
  float: left;
  padding-top: 10px;
  height: 60px;
}

.nav-wrap {
  position: absolute;
  z-index: 1;
  padding-left: 270px;
  padding-right: 370px;
  width: 100%;
  height: 100%;
}

.scroll-wrap {
  overflow-x: scroll;
}

.nav-list {
  white-space: nowrap;
}

.nav-item {
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  line-height: 70px;

  a {
    display: block;
    height: 70px;
    padding: 0 10px;
    color: $aColor;

    &:hover {
      color: $aHoverColor;
    }
  }

  .active {
    color: $activeColor;
    border-bottom: 2px solid $activeColor;
  }
}

.nav-right {
  position: absolute;
  right: 0;
  z-index: 2;
  height: 100%;
}

.nav-right-item {
  @extend .nav-item;
  padding: 0 10px;
  
  a {
    color: $activeColor;

    &:hover {
      color: $activeColor;
    }
  }
  
  .login-btn {
    display: inline-block;
    background-color: $activeColor;
    width: 58px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #fff;
    border-radius: 3px;

    &:hover {
      color: #fff;
      background-color: $activeColor;
    }
  }
}

.search-wrap {
  position: relative;
  display: inline-block;
}

.search-text {
  height: 30px;
  width: 210px;
  border-radius: 50px;
  padding: 0 20px;
  border: 1px solid #dedede;
  border-radius: 50px;

  &:focus {
    box-shadow: 0 0 4px $activeColor;
  }
}

.search-btn {
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 10px;
}

.icon-search {
  font-size: 18px;
}


</style>

// 响应式格式
<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .header-wrap {
    height: 60px;
  }
  
  .logo {
    height: 50px;
  }

  .nav-wrap {
    padding: 0 200px;
  }

  .main-nav-wrap {
    height: 60px;
    padding-right: 100px;
  }

  .nav-item {
    line-height: 60px;

    a {
      height: 60px;
    }
  }

  .nav-right {
    line-height: 60px;
  }

  .nav-right-item {
    display: none;
  }

  .search-text {
    width: 150px;
  }

  .search-btn {
    top: 3px;
  }
}
</style>
