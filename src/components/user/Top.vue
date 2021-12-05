<template>
  <div class='top'>
    <div class="top-inline">
      <h1><img class="top-logo"
             src="../../static/img/regist/txt_logo_zh.svg"></h1>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Top'

}
</script>

<style lang="less" scoped>
.top {
  position: relative;
  width: 100%;
  height: 90px;
  background-color: #fff;
  border-bottom: 2px solid #d5d5d5;
  .top-inline {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    h1 {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      .top-logo {
        height: 20px;
        margin-left: 20px;
      }
    }
  }
  @media screen and (max-width: 780px) {
    border: none;
    height: 60px;

    .top-inline {
      top: 20%;
      h1 {
        .top-logo {
          height: 15px;
        }
      }
    }
  }
}
</style>>
