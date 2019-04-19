<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 分页导航
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-17 15:57:44
 * @LastEditTime: 2019-04-17 17:10:17
 -->
<template>
  <div class="pagenation">
    <span class="page-total">
      共 12313 条
    </span>

    <span
      class="page-btn prev-btn">
      <svg-icon icon-class="arrow-left"></svg-icon>
    </span>

    <ul class="page-list">
      <li class="page-list-item active">
        1
      </li>
      <li class="page-list-item">
        2
      </li>
      <li class="page-list-item">
        3
      </li>
      <li class="page-list-item more">
        <svg-icon icon-class="more"></svg-icon>
      </li>
      <li class="page-list-item number">
        22
      </li>
    </ul>

    <span
      class="page-btn next-btn">
      <svg-icon icon-class="arrow-right"></svg-icon>
    </span>

  </div>
</template>

<script>
export default {
  name: 'Pagenation'
}
</script>

<style lang="scss" scoped>
.pagenation {
  text-align: center;
  padding: 5px 0;
}

.page-total {
  display: inline-block;
  font-size: 14px;
  color: $textColor;
  height: 28px;
  line-height: 28px;
}

.page-btn {
  display: inline-block;
  height: 28px;
  line-height: 28px;

  svg {
    color: #999;
    font-size: 12px;
  }
}

.prev-btn {
  padding: 0 5px;
  cursor: not-allowed;

}

.page-list {
  display: inline-block;
}

.page-list-item {
  display: inline-block;
  padding: 0 15px;
  font-size: 14px;
  color: $textColor;
  height: 28px;
  line-height: 28px;
  cursor: pointer;

  &:hover {
    color: $aHoverColor;
  }

  &.active {
    padding: 0 10px;
    font-size: 14px;
    color: $activeColor;
  }

  &.more {
    font-size: 18px;
  }

  &.number {
    font-weight: bold;
  }
}
</style>