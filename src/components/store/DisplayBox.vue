<template>
  <div class="display-box">
    <div class="display-top">
      <div class="display-title">{{title}}</div>
      <div class="display-more"
           v-show="linkMore"><a :href="linkMore">了解更多 &gt;</a></div>
    </div>
    <slot name="display-context"></slot>
  </div>
</template>

<script>
export default {
  name: 'DisplayBox',
  props: {
    title: {
      type: String,
      require: true
    },
    linkMore: {
      type: String,
      require: false,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.display-box {
  width: 100%;
  position: relative;
  padding: 40px 80px;
  background-color: #f7f7f7;
  @media screen and (max-width: 780px) {
    padding: 20px;
  }
  .display-top {
    &::after,
    &::before {
      content: "";
      clear: both;
      display: table;
    }
    .display-title {
      float: left;
      text-align: left;
      font-size: 2.8vw;
    }
    .display-more {
      float: right;
      font-size: 1.2vw;
      cursor: pointer;
    }
  }
}
</style>
