<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 最新评论
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 15:21:39
 * @LastEditTime: 2019-06-11 08:43:20
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

        <template v-for="item in comment.list">
          <li
            :key="item.id"
            class="comt-new-item">
            <h5 class="comt-new-top">
              <avatar-box
                class="comt-new-author"
                link="/"
                :avatar="item.author.avatar"
                :name="item.author.name">
              </avatar-box>
              <span class="comt-new-time">
                {{item.publish_time | getTime}}
              </span>
            </h5>
            <!-- cont: content -->
            <p class="comt-new-cont">{{item.content}}</p>

            <!-- art: article -->
            <nuxt-link
              class="comt-art-link"
              to="">
              <h4 class="comt-art-title">{{item.article.title | cutWords(20)}}</h4>
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
import AvatarBox from '@/components/AvatarBox'

export default {
  name: 'CommentNewest',
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    PanelBox,
    SubTitle,
    AvatarBox,
  },
  filters: {

    /**
     * @description: 根据length裁剪长度
     * @param {String} str 要裁剪字符串
     * @param {String} length 要裁剪的长度
     * @return: 
     */
    cutWords (str, length) {
      var newStr = ""
      if (!str) return ''
      if (str.replace(/[\u0391-\uFFE5]/g, "aa").length > length) {
          newStr = str.substring(0, length) + '...'
      } else {
          newStr = str
      }
      return newStr
    },

    /**
     * @description: 转换时间，大于一天显示天数、月数、年数
     * @param {String} date 时间 
     * @return: 
     */
    getTime (date) {
      let dateYear = date.split(" ")[0].split("-")[0]
      let dateMonth = date.split(" ")[0].split("-")[1]
      let dateDay = date.split(" ")[0].split("-")[2]

      let year = new Date().getFullYear() - dateYear
      let month = new Date().getMonth() - dateMonth
      let day = new Date().getDate() - dateDay

      let time = year ? `${year} 年`
        : month ? `${month} 月` : day ? `${day} 天` : day

      if (time) {
        return `${time}前`
      } else {
        return date
      }
    }
  },
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