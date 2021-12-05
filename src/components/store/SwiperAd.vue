<template>
  <swiper ref="adSwiper"
          class="ad-swiper-container"
          :options="swiperOptions">
    <swiper-slide>
      <a href="javascript:;"
         class="ad-link">
        <img class="ad-img"
             src="../../static/img/store/ad/4055f11e11d346c7b974c215125f86ca.jpg"
             alt="">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="javascript:;"
         class="ad-link">
        <img class="ad-img"
             src="../../static/img/store/ad/e1fffe5459364afdb2b3e6352aa93bc8.jpg"
             alt="">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="javascript:;"
         class="ad-link">
        <img class="ad-img"
             src="../../static/img/store/ad/f030b8c4416c4d3482a7e0d0e358efe0.jpg"
             alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination"
         slot="pagination"></div>
    <div class="swiper-button-prev"
         slot="button-prev"></div>
    <div class="swiper-button-next"
         slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperAd',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'ad-bullet', // 需设置.my-bullet样式,
          bulletActiveClass: 'ad-bullet-active'
        },
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
      return this.$refs.adSwiper.$swiper
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" >
.ad-swiper-container {
  width: 100%;
  @media screen and(max-width:780px) {
    margin-bottom: 40px;
  }
  .ad-link {
    display: block;
    width: 100%;
    .ad-img {
      width: 100%;
    }
  }
  .swiper-pagination {
    width: 80%;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    .ad-bullet {
      flex: 1;
      display: block;
      margin: 0 30px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.5s;
    }
    .ad-bullet-active {
      background-color: rgba(0, 0, 0, 1);
    }
    @media screen and(max-width:780px) {
      overflow: visible;
      .ad-bullet {
        margin-top: 20px;
        flex: none;
        width: 10px;
        height: 10px;
      }
    }
  }
}

.swiper-button-prev,
.swiper-button-next {
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &::after {
    color: #fff;
    font-size: 16px;
  }
}
</style>
