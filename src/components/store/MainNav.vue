<template>
  <div class='main-nav-container'>
    <div class="mask"
         :class="{'mask-show': mask||show}"
         @mouseenter="removeSelected($event)"
         @click="removeSelected($event)"></div>
    <transition name="fade">
      <nav-box class="nav-box"
               v-show="mask ||show"
               :class="{'nav-box-show':mask}"
               :showData='categoryInfoList'
               :closefun='removeSelected'
               :title="title"
               :imgSrc='imgSrc'></nav-box>
    </transition>
    <div class='main-nav'>
      <div class='main-nav-inner'>
        <a href="/"
           class="main-nav-logo"></a>
        <transition name="fade">
          <ul class="main-nav-msg"
              :class="{'show':show}">
            <span class="close-btn"
                  @click="show=false">&#xe6ff;</span>
            <li v-for="(i,index) in product"
                class="msg-item"
                :class="{'selected': i.selected}"
                :key="i.catgId"
                @mouseenter="selectItem(index,$event),changeShowData(index)"
                @click="selectItem(index,$event),changeShowData(index)">
              <a>{{i.catgNm}}</a>
            </li>
            <li class="cut-line"></li>
            <li class="tool-msg">
              <router-link class="router-link"
                           :to="{name:'Login'}">登录</router-link>
            </li>
            <li class="tool-msg">
              400-071-8899
            </li>
            <li class="tool-msg">
              三星官网
            </li>
            <li class="tool-msg">
              盖乐世社区
            </li>
            <li class="tool-msg">
              三星网上商城VIP用户专属服务上线
            </li>
          </ul>
        </transition>
        <div class="main-nav-sub">

          <input id="search"
                 type="text">
          <label for="search"><span class="search-icon">&#xe67d;</span></label>
          <img class="shop"
               src="../../static/img/store/buycar.78c2442a.svg"
               alt="">
          <span class="more-icon"
                @click="show=true;">&#xe677;</span>
          <router-link :to="{name:'Login'}"
                       class="login-register">登录/注册
          </router-link>
        </div>
        <div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import NavBox from './NavBox.vue'

export default {
  components: { NavBox },
  data () {
    return {
      show: false,
      fade: false,
      mask: false,
      maskSmall: false,
      categoryInfoList: null,
      title: null,
      imgSrc: null
    }
  },
  methods: {
    selectItem (index, event) {
      if (event.type === 'mouseenter') {
        if (document.body.clientWidth <= 1080) {
          return
        }
      }
      this.mask = true
      this.product.forEach((element, ind) => {
        if (ind === index) {
          this.product[ind].selected = true
        } else {
          this.product[ind].selected = false
        }
      })
    },
    removeSelected (event) {
      if (!event) {
      } else if (event.type === 'mouseenter') {
        if (document.body.clientWidth <= 1080) {
          return
        }
      }
      this.mask = false
      this.product.forEach(element => {
        element.selected = false
      })
    },
    changeShowData (ind) {
      this.title = this.product[ind].catgNm
      this.imgSrc = this.product[ind].catgPic
      this.categoryInfoList = this.product[ind].categoryInfoList
    },
    initResize () {
      if (document.body.clientWidth > 1080) {
        this.show = false
      } else {
        if (this.mask === true) {
          this.mask = false
        }
      }
    }

  },
  computed: {
    ...mapState('StoreMsg', ['product'])

  },
  mounted () {
    window.addEventListener('resize', this.initResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.initResize)
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.mask {
  display: none;
  position: fixed;
  z-index: 6;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}
.mask-show {
  display: block;
  opacity: 1;
  @media screen and(max-width:1080px) {
    z-index: 1;
  }
}
.main-nav-container {
  position: relative;
  z-index: 3;
}
.nav-box {
  display: block;
  position: absolute;
  z-index: 7;
  left: 0;
  width: 100%;
  height: 660px;
  transition: all 0.3s ease;
  @media screen and(max-width:1080px) {
    position: fixed;
    height: 100vh;
    z-index: 9;
    right: 0;
    top: 0;
    left: auto;
    width: 420px;
    height: 100vh;
    opacity: 1;
    margin-right: -500px;
    transition: margin-right 0.3s ease-in;
  }
}
.nav-box-show {
  @media screen and(max-width:1080px) {
    display: block;
    margin-right: -20px;
  }
}

.main-nav {
  position: relative;
  z-index: 8;
  width: 100%;
  height: 75px;
  background-color: #fff;

  .main-nav-inner {
    width: 100%;
    max-width: 1440px;
    height: 75px;
    padding: 0 20px;
    margin: 0 auto;
    background-color: #fff;
    .main-nav-logo {
      float: left;
      display: block;
      width: 134px;
      height: 30px;
      margin-top: 16px;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #fff url("../../static/img/store/global-samsung-logo1.svg")
          no-repeat;
        background-size: 100% auto;
      }
    }
    .main-nav-msg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      float: left;
      height: 75px;
      margin-left: 4.44444444vw;
      font-size: 0.7vw;
      font-weight: 600;
      transition: all 0.3s;

      .close-btn {
        align-self: flex-end;
        display: none;
        height: 50px;
        margin: 10px 20px;
        font-family: iconfont;
        font-size: 30px;
        font-weight: 100;
        line-height: 50px;
        cursor: pointer;
      }
      .msg-item {
        padding: 10px 12px;
        color: #000;
        cursor: pointer;
      }
      .cut-line {
        display: none;

        width: 90%;
        height: 1px;
        margin: 20px auto;
        margin-bottom: 30px;
        background-color: #000;
      }
      .tool-msg {
        display: none;

        font-size: 16px;
        font-weight: 700;
        padding: 0 12px;
        margin: 0 20px 20px 20px;
        cursor: pointer;
      }
      .selected {
        border-radius: 20px;
        color: #fff;
        background-color: #000;
      }
      @media screen and (max-width: 1080px) {
        visibility: hidden;
        z-index: 1;
        flex-direction: column;
        justify-content: right;
        align-items: flex-start;
        position: fixed;
        right: 0;
        width: 400px;
        height: 0;
        background-color: #fff;
        opacity: 0;
        transition: opacity 0.3s;

        .close-btn {
          display: block;
        }
        .msg-item {
          font-size: 20px;
          font-weight: 500;
          margin: 0 20px 10px 20px;
          &::after {
            content: "\e702";
            position: absolute;
            right: 20px;
            font-family: iconfont;
          }
        }
        .cut-line {
          display: block;
        }
        .tool-msg {
          display: block;
        }
        .selected {
          font-weight: 700;
          color: #000;
          background-color: transparent;
        }
      }
    }
    .show {
      visibility: visible;

      height: 100vh;

      opacity: 1;
    }
    .main-nav-sub {
      float: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 355px;
      height: 75px;

      input {
        position: absolute;
        height: 30px;
        margin-left: 10px;
        border: none;
        outline: none;
        background-color: transparent;
        &:focus + label .search-icon {
          border: rgb(40, 121, 226) 2px solid;
        }
      }

      .search-icon {
        display: inline-block;
        width: 225px;
        height: 30px;
        padding: 0 10px;
        border: #f2f2f2 2px solid;
        font-family: iconfont;
        border-radius: 20px;
        text-align: right;
        line-height: 25px;
        cursor: pointer;
      }
      .shop {
        cursor: pointer;
      }

      .login-register {
        padding: 0 10px;
        text-decoration: none;
        color: #000;
        cursor: pointer;
      }

      .more-icon {
        padding: 0 10px;
        display: none;
        font-family: iconfont;
        font-size: 25px;
        font-weight: 700;
        cursor: pointer;
      }

      @media screen and(max-width:1080px) {
        width: auto;
        input {
          display: none;
        }
        label {
          .search-icon {
            width: auto;
            border: none;
            font-size: 25px;
            font-weight: 700;
          }
          margin: 0 10px;
        }

        .more-icon {
          display: block;
          margin: 0 10px;
        }
        .login-register {
          display: none;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
