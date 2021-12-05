<template>
  <div class="store-top-box">
    <div class="rightNav">
      <ul>
        <li>
          三星官网
        <li>
          盖乐世社区
        </li>
        <li>
          三星网上商城VIP用户专属服务上线
        </li>
        <li>
          400 071 8899
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StroeTop'
}
</script>

<style lang="less" scoped>
.store-top-box {
  width: 100%;
  max-width: 1440px;
  height: 47px;
  margin: 0% auto;
  background-color: #f7f7f7;
  line-height: 55px;

  ul {
    float: right;
    li {
      float: left;
      margin-right: 10px;
      &:nth-last-of-type(1) {
        margin-right: 20px;
        &::before {
          display: inline-block;
          content: "\e680";
          font-family: "iconfont";
          font-size: 16px;
        }
      }
      &:nth-last-of-type(2) {
        margin-right: 20px;
        &::after {
          display: inline-block;
          content: "\e66c";
          transform: rotate(-45deg);
          font-family: "iconfont";
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (max-width: 1080px) {
    display: none;
  }
}
</style>>
