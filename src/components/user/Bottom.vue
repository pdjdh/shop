<template>
  <div class='bottom'>
    <div class="bottom-logo">
      <img src="../../static/img/regist/txt_foo_logo_zh.png">
    </div>
    <div class="bottom-links">
      <ul>
        <li>条款和条件 </li>
        <li>三星帐户隐私声明</li>
        <li>声明</li>
        <li>联系我们</li>
      </ul>
    </div>
    <div class="bottom-address">
      Copyright © 1995-2021 Samsung. All Rights Reserved.
    </div>

  </div>
</template>

<script>
export default {
  name: 'Bottom'

}
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #888888;
    background-color: #fff;
    .bottom-logo {
      width: 100%;
      margin-top: 10px;
      order: 2;
      img {
        height: 25px;
      }
    }
    .bottom-links {
      order: 1;
      margin-top: 20px;
      ul {
        display: inline-block;
        list-style: none;
        li {
          margin-left: 50px;
          float: left;
        }
        li:nth-of-type(1) {
          margin-left: 0px;
        }
      }
    }
    .bottom-address {
      width: 100%;
      order: 3;
    }
  }
  @media screen and (min-width: 780px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    height: 70px;
    font-size: 13px;
    .bottom-logo {
      justify-self: center;
      width: 100%;
      text-align: right;
      img {
        height: 25px;
        margin-right: 40px;
      }
    }
    .bottom-links {
      width: auto;
      padding-left: 30px;

      ul {
        list-style: none;
        li {
          margin-right: 50px;
          float: left;
        }
        li:nth-of-type(1) {
          margin-right: 0px;
        }
      }
    }
    .bottom-address {
      width: auto;
      color: #888888;
      padding-right: 30px;
    }
  }
}
</style>>
