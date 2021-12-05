<template>
  <div class='container'>
    <div class="con-outer"
         ref="con-outer">
      <div class="con-inner">
        <div class="back-top"
             ref="back-top"
             @click="backTop">
          <div class="back-icon">&#xe6f3;</div>
          <div class="back-text">返回<br>顶部</div>
        </div>
        <stroe-top></stroe-top>
        <main-nav class="nav-con"></main-nav>
        <div class="sub-container">
          <swiper-ad></swiper-ad>
          <icon-items></icon-items>
          <recommend></recommend>
          <seckill v-if="seckill"
                   :seckill='seckill'></seckill>
          <display-box :title="'返回'">
            <show-box-hot slot="display-context"
                          :showData="[{'link':'#','imgSrc':' https://image.samsungeshop.com.cn/goods/20210915/dee5bb35fef34108884db582811415e0.png'},{'link':'#','imgSrc':' https://image.samsungeshop.com.cn/goods/20210915/dee5bb35fef34108884db582811415e0.png'},{'link':'#','imgSrc':' https://image.samsungeshop.com.cn/goods/20210915/dee5bb35fef34108884db582811415e0.png'}]"></show-box-hot>
          </display-box>
          <!--        <display-box v-if="this.new"
                       :title="'返回'">
            <show-box-new slot="display-context"
                          :showData="this.new"></show-box-new>
          </display-box> -->
          <div style="height:90000px;  background-image: linear-gradient(#000, #fff);"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StroeTop from '../../components/store/Top.vue'
import MainNav from '../../components/store/MainNav.vue'
import SwiperAd from '../../components/store/SwiperAd.vue'
import IconItems from '../../components/store/IconItems.vue'
import Recommend from '../../components/store/Recommend.vue'
import Seckill from '../../components/store/Seckill.vue'
import DisplayBox from '../../components/store/DisplayBox.vue'
import ShowBoxHot from '../../components/store/ShowBoxHot.vue'
// import ShowBoxNew from '../../components/store/ShowBoxNew.vue'

import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    StroeTop,
    MainNav,
    SwiperAd,
    IconItems,
    Recommend,
    Seckill,
    DisplayBox,
    ShowBoxHot
    // ShowBoxNew

  },
  computed: {
    ...mapState('StoreMsg', ['hot', 'menu', 'new', 'product', 'seckill'])
  },
  methods: {
    backTopCtrl (e) {
      if (e.target.scrollTop > 1000) {
        this.$refs['back-top'].style.display = 'block'
      } else {
        this.$refs['back-top'].style.display = 'none'
      }
    },
    backTop () {
      setTimeout(() => {
        if (this.$refs['con-outer'].scrollTop < 20) {
          this.$refs['con-outer'].scrollTop = 0
        } else {
          this.$refs['con-outer'].scrollTop -= this.$refs['con-outer'].scrollTop / 10
          this.backTop()
        }
      })
    }
  },
  created () {
    this.$store.dispatch('StoreMsg/getMsg')
  },
  mounted () {
    this.$refs['con-outer'].addEventListener('scroll', this.backTopCtrl)
  },
  beforeDestroy () {
    this.$refs['con-outer'].removeEventListener('scroll', this.backTopCtrl)
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .con-outer {
    width: 120%;
    height: 200%;
    overflow-x: hidden;
    overflow-y: scroll;
    .con-inner {
      width: 100vw;
      overflow: hidden;
      .back-top {
        display: none;
        position: fixed;
        z-index: 10;
        right: 60px;
        bottom: 200px;
        width: 70px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        .back-icon {
          font-family: iconfont;
          font-size: 20px;
          text-align: center;
          margin-top: 10px;
        }
        .back-text {
          font-size: 10px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 10px;
        }
      }
      .sub-container {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
      }
    }
  }

  @media screen and(max-width: 780px) {
    background-color: #f7f7f7;
  }
  .nav-con {
    position: relative;
  }
}
</style>
