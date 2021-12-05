<template>
  <div class="icon-items">
    <ul class="icon-container">
      <li v-for="i in product"
          class="icon-li"
          :key='i.catgId'>
        <a class="icon-a"
           href="javascript:;">
          <img class="icon-img"
               :src="i.icon">
          <div class="icon-name">{{i.catgNm}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IconItems',
  computed: {
    ...mapState('StoreMsg', ['product'])
  }
}
</script>

<style lang="less" scoped>
.icon-items {
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 220px;
  margin: 30px auto;
  background-color: #fff;
  @media screen and(max-width:780px) {
    background-color: #f7f7f7;
  }
  .icon-container {
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    @media screen and(max-width:780px) {
      justify-content: flex-start;
    }
    .icon-li {
      display: flex;
      flex-direction: column;
      .icon-a {
        display: block;
        margin: 0 auto;
        width: 150px;
        text-decoration: none;
        color: #000;
        text-align: center;
      }
    }
  }
}
</style>>
