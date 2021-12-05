<template>
  <div class="recommend clearfix">
    <div class="rec-items">

      <div class="rec-item">
        <a href="javascript:;">
          <img src="../../static/img/store/recommend/2179f6fbbffe4e46807b81005b6e8211.png"
               alt="">
        </a>
      </div>
      <div class="rec-item">
        <a href="javascript:;">
          <img src="../../static/img/store/recommend/3c75136272644f829807219f3e12fae3.png"
               alt="">
        </a>
      </div>
      <div class="rec-item">
        <a href="javascript:;">
          <img src="../../static/img/store/recommend/415ec797f20243349ef7760c09877fd7.png"
               alt="">
        </a>
      </div>
    </div>

    <swiper ref="recSwiper"
            class="swiper-container"
            :options="swiperOptions">
      <swiper-slide>
        <a href="javascript:;"
           class="ad-link">
          <img class="ad-img"
               src="../../static/img/store/recommend/swiper/626a4f281fc5414ba1d62f8ca5ba88ef.jpg"
               alt="">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;"
           class="ad-link">
          <img class="ad-img"
               src="../../static/img/store/recommend/swiper/074c86b8eb6d4a0992b8eff9b3bb269b.jpg"
               alt="">
        </a>
      </swiper-slide>
      <div class="swiper-button-prev"
           slot="button-prev"></div>
      <div class="swiper-button-next"
           slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  name: 'Recommend',
  data () {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        speed: 2000,
        autoplay: {
          delay: 5000, // 自动切换的时间间隔，单位ms
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          pauseOnMouseEnter: true // 鼠标置于swiper时暂停自动切换，鼠标离开时恢复自动切换。
        },
        loop: true

      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.recSwiper.$swiper
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.recommend {
  width: 100%;
  padding: 50px 70px;
  background-color: #f7f7f7;
  @media screen and(max-width:780px) {
    padding: 50px 10px;
  }
  .rec-items {
    display: flex;
    width: 100%;

    .rec-item {
      flex: 1;
      padding: 0 10px;
      a {
        img {
          width: 100%;
          border: 1px solid transparent;
          border-radius: 20px;
          &:hover {
            border-color: #0368ff;
          }
        }
      }
    }
    @media screen and(max-width:780px) {
      display: block;
      .rec-item {
        float: right;
        width: 45%;
      }
      .rec-item:nth-child(1) {
        float: left;
        a {
          img {
            height: 100vw;
            min-height: 500px;
          }
        }
      }
    }
  }
  .swiper-container {
    z-index: 0;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
