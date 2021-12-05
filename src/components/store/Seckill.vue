<template>
  <div class="seckill-contanier">
    <div class="sk-top">
      <div class="count-down">
        <span class="sk-title">
          秒杀专区
        </span>
        <span class="sk-tip">
          距离秒杀结束还剩
        </span>
        <div class="sk-remaining-time">
          <span>{{Math.floor(remainingTime/1000/60/60%60)>9?Math.floor(remainingTime/1000/60/60%60):'0'+Math.floor(remainingTime/1000/60/60%60)  }}</span>
          <span> : </span>
          <span>{{Math.floor(remainingTime/1000/60%60)>9?Math.floor(remainingTime/1000/60%60):'0'+Math.floor(remainingTime/1000/60%60)  }}</span>
          <span> : </span>
          <span>{{Math.floor(remainingTime/1000%60)>9?Math.floor(remainingTime/1000%60):'0'+Math.floor(remainingTime/1000%60)  }}</span>
          <div class="timeTitle">
            <p>时</p>
            <p>分</p>
            <p>秒</p>
          </div>
        </div>
      </div>
      <div class="sk-more-msg">了解更多&#xe702;</div>
    </div>
    <swiper ref="skSwiper"
            class="sk-swiper-container"
            :options="swiperOptions"
            :key="'viewNum:'+swiperOptions.slidesPerView">
      <swiper-slide v-for="i in seckill.skuList"
                    :key="i.skuId"
                    class="sk-swiper-slide">
        <div class="sk-swiper-slide-inner">

          <div class="sk-img-box">
            <a href="javascript:;"
               class="sk-link">
              <img class="sk-img"
                   :src="i.skuImg">
            </a>
          </div>
          <div class="sk-detail">
            <div class="sk-t1">{{i.skuNm}}</div>
            <div class="sk-t2"
                 v-html="i.skuSubTitl"></div>
          </div>
          <div class="sk-price ">
            <span class="sk-skp">￥{{i.skillPrice}}</span>
            <span class="sk-orgp">￥{{i.origPr}}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="sk-swiper-button-prev">&#xe6fd;</div>
    <div class="sk-swiper-button-next">&#xe702;</div>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

export default {
  name: 'Seckill',

  data () {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.sk-swiper-button-next',
          prevEl: '.sk-swiper-button-prev'
        },
        speed: 2000,
        autoplay: {
          delay: 5000, // 自动切换的时间间隔，单位ms
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          pauseOnMouseEnter: true // 鼠标置于swiper时暂停自动切换，鼠标离开时恢复自动切换。
        },
        loop: true,
        slidesPerView: 4
      },
      timeId: null,
      remainingTime: 0
    }
  },
  props: ['seckill'],
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    updateViewNum (e) {
      if (document.body.clientWidth <= 780 && this.swiperOptions.slidesPerView === 4) {
        this.swiperOptions.slidesPerView = 2
      } else if (document.body.clientWidth > 780 && this.swiperOptions.slidesPerView === 2) {
        this.swiperOptions.slidesPerView = 4
      }
    }

  },
  computed: {
    swiper () {
      return this.$refs.skSwiper.$swiper
    }

  },
  mounted () {
    window.addEventListener('resize', this.updateViewNum)
    this.timeId = setInterval(() => {
      if (this.seckill) {
        this.remainingTime = this.seckill.endDtTimeMillis - Date.now()
        if (this.remainingTime <= 0) {
          this.remainingTime = 0
        }
      }
    }, 1000)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updateViewNum)
    clearInterval(this.timeId)
  }

}
</script>

<style lang="less" >
.seckill-contanier {
  position: relative;
  text-align: center;
  padding: 40px 80px;
  background-color: #dae8ef;
  @media screen and(max-width:780px) {
    padding: 20px 20px;
  }
  .sk-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    .count-down {
      display: flex;
      align-items: center;
      .sk-title {
        float: left;
        font-size: 2.8vw;
        text-align: left;
        margin-right: 20px;
      }
      .sk-tip {
        float: left;
        font-size: 1.4vw;
        text-align: left;
        margin-right: 20px;
      }
      .sk-remaining-time {
        position: relative;
        font-size: 1.9vw;
        font-weight: 700;
        > span {
          flex: 1;
        }
        .timeTitle {
          position: absolute;
          width: 100%;
          font-size: 1.3vw;
          display: flex;
          > p {
            flex: 1;
          }
        }
      }
    }
    .sk-more-msg {
      font-size: 1.2vw;
      font-family: iconfont;
      cursor: pointer;
    }
  }
  .sk-swiper-container {
    width: 100%;
    background-color: #dae8ef;
    .sk-swiper-slide {
      .sk-swiper-slide-inner {
        overflow: hidden;
        border-radius: 30px;
        margin-right: 20px;
        background-color: #fff;
        .sk-img-box {
          width: 100%;
          margin: 50px auto 0;
          overflow: hidden;
          .sk-link {
            display: block;
            .sk-img {
              width: 70%;
              transition: all 0.3s;
            }
            &:hover .sk-img {
              transform: scale(1.1);
            }
          }
        }
        .sk-detail {
          margin-top: 20px;
          text-align: center;
          .sk-t1 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            font-size: 16px;
            font-weight: 700;
          }
          .sk-t2 {
            margin-top: 10px;

            font-size: 13px;

            font-weight: 400;
          }
        }
        .sk-price {
          display: inline-block;
          margin: 80px auto 80px;
          font-weight: 700;
          font-size: 20px;
          .sk-skp {
            float: left;
            margin: 0 10px;
            color: #2189ff;
          }
          .sk-orgp {
            float: left;
            margin: 0 10px;
            color: #aaaaaa;
            text-decoration: line-through;
          }
        }
      }
    }
  }
  .bottom-to-style(@pos) {
    position: absolute;
    @{pos}: 0px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 80px;
    font-family: iconfont;
    font-weight: 100;
    cursor: pointer;
    @media screen and(max-width:780px) {
      display: none;
    }
  }
  .sk-swiper-button-prev {
    .bottom-to-style(left);
  }
  .sk-swiper-button-next {
    .bottom-to-style(right);
  }
}
</style>
