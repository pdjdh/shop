<template>
  <div class="show-box-hot">
    <div class="show-box-hot-item"
         v-for=" i in showData"
         :key="Math.random()+i">
      <a class="show-box-hot-link"
         :href="i.link">
        <img class="show-box-hot-img"
             :src="i.imgSrc">
      </a>
    </div>
  </div>
</template>
<script>
/*
showData:[
  {
    link:String,
    imgSrc:String
  }
]

*/
export default {
  name: 'ShowBoxHot',
  props: {
    showData: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="less" scoped>
.show-box-hot {
  width: 100%;
  display: flex;
  margin-top: 40px;
  .show-box-hot-item {
    flex: 1;
    .show-box-hot-link {
      display: block;
      margin: 0px 20px;
      border-radius: 30px;
      border: 1px solid transparent;
      overflow: hidden;
      &:hover {
        border-color: #0368ff;
      }
      .show-box-hot-img {
        width: 100%;
      }
    }
  }
  @media screen and(max-width:780px) {
    flex-wrap: wrap;
    .show-box-hot-item {
      margin-top: 30px;
      flex: none;
      width: 50%;
      min-width: 150px;
    }
    .show-box-hot-item:nth-of-type(1) {
      width: 100%;
    }
  }
}
</style>
