<template>
  <div class="show-box-new">
    <div class="show-box-new-left"
         :key="Math.random()+showData[0]">
      <a class="show-box-new-link"
         href="#">
        <img class="show-box-new-img"
             :src="showData[0].skuImg">
      </a>
      <div class="show-box-detail">
        <div class="show-box-t1">{{showData[0].skuNm}}</div>
        <div class="show-box-t2"
             v-html="showData[0].skuSubTitl"></div>
      </div>
      <div class="show-box-price ">
        <span class="show-box-orgp">￥{{showData[0].price}}</span>
      </div>
    </div>
    <div class="show-box-new-right">
      <div class="show-box-new-item"
           v-for=" i in showDataSub"
           :key="Math.random()+i">
        <a class="show-box-new-link"
           href="#">
          <img class="show-box-new-img"
               :src="i.skuImg">
        </a>
        <div class="show-box-detail">
          <div class="show-box-t1">{{i.skuNm}}</div>
          <div class="show-box-t2"
               v-text="i.skuSubTitl"></div>
        </div>
        <div class="show-box-price ">
          <span class="show-box-orgp">￥{{i.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ShowBoxNew',
  props: {
    showData: {
      type: Array,
      require: true
    }
  },
  computed: {
    showDataSub () {
      return this.showData.slice(1)
    }
  }
}
</script>

<style lang="less" scoped>
.show-box-new-img {
  width: 100%;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.13);
  }
}

.show-box-new {
  display: flex;
  width: 100%;
  margin-top: 40px;
  .show-box-new-left {
    width: 640px;
    height: 640px;
    border-radius: 30px;
    background-color: #fff;
    .show-box-new-link {
      display: block;
      border-radius: 30px;
      border: 1px solid transparent;
      overflow: hidden;
      &:hover {
        border-color: #0368ff;
      }
    }
    .show-box-detail {
      text-align: center;

      .show-box-t1 {
        font-size: 2vw;
        font-weight: 700;
      }
      .show-box-t2 {
        font-size: 1.3vw;
      }
    }
    .show-box-price {
      margin: 20px 0 40px;
      text-align: center;
      font-size: 1.8vw;
      color: #2189ff;
    }
  }
  .show-box-new-right {
    width: 640px;
    height: 640px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px 20px;
    .show-box-new-item {
      background-color: #fff;
      width: 312px;
      height: 312px;
      .show-box-new-link {
        display: block;
        border-radius: 30px;
        border: 1px solid transparent;
        overflow: hidden;
        &:hover {
          border-color: #0368ff;
        }
      }
      .show-box-detail {
        text-align: center;

        .show-box-t1 {
          font-size: 1.3vw;
        }
        .show-box-t2 {
          font-size: 1.3vw;
        }
      }
      .show-box-price {
        margin: 20px 0 40px;
        text-align: center;
        font-size: 1.8vw;
        color: #2189ff;
      }
    }
  }
  @media screen and(max-width:780px) {
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>
