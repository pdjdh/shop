<template>
  <div class="nav-box-i">
    <div class="tip">
      <transition name="fade">
        <h2 class="title" :key="title">{{ title }}</h2>
      </transition>
      <div class="close" @click="closefun">&#xe669;</div>
    </div>
    <div class="nav-box-inner clearfix">
      <div class="back-btn" @click="closefun">&#xe66f;</div>
      <div class="left-nav">
        <ul class="left-item">
          <transition-group name="fade">
            <template v-for="(i, ind) in leftData">
              <li
                class="small-left"
                :class="{ selected: i.selected, fade: fade }"
                :key="i.catgNm"
              >
                <span
                  @mouseenter="
                    addSelected(leftData, ind, $event),
                      changeMiddleData(ind, $event)
                  "
                  @click="
                    addSelected(leftData, ind, $event),
                      changeMiddleData(ind, $event)
                  "
                >
                  {{ i.catgNm }}
                </span>
                <div class="sub-item" :key="ind + 'sub'">
                  <li
                    v-for="(j, index) in i.spuInfoList"
                    class="small-middle"
                    :class="{ selected: j.selected }"
                    :key="j.prodNm"
                  >
                    <span
                      @mouseenter="addSelected(i.spuInfoList, index, $event)"
                    >
                      {{ j.prodNm }}
                    </span>
                  </li>
                </div>
              </li>
            </template>
          </transition-group>
        </ul>
      </div>
      <div class="middle-nav">
        <div class="scroll-box">
          <ul class="middle-item">
            <transition-group name="change">
              <li key="product-title">
                <span>全系列产品</span>
              </li>
              <li
                v-for="(i, ind) in middleData"
                :class="{ selected: i.selected }"
                :key="i.prodNm"
              >
                <span @mouseenter="addSelected(middleData, ind, $event)">{{
                  i.prodNm
                }}</span>
              </li>
            </transition-group>
          </ul>
        </div>
      </div>
      <div class="right-nav">
        <div class="right-container">
          <div class="right-img">
            <transition name="fade">
              <img :key="imgSrc" :src="imgSrc" />
            </transition>
          </div>
          <div class="small-title">{{ title }}</div>
          <span class="more-msg">了解更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBox',
  data () {
    return {
      fade: false,
      leftData: null,
      middleData: null
    }
  },
  props: ['showData', 'closefun', 'title', 'imgSrc'],
  methods: {
    addSelected (targetData, targetInd, event) {
      if (targetData === this.middleData) {
      } else if (event.type === 'mouseenter') {
        if (document.body.clientWidth <= 1080) {
          return
        }
      }
      targetData.forEach((element, index) => {
        if (index === targetInd) {
          if (
            targetData === this.leftData &&
            document.body.clientWidth <= 1080
          ) {
            element.selected = !element.selected
          } else {
            element.selected = true
          }
        } else {
          element.selected = false
        }
      })
    },
    changeMiddleData (ind, event) {
      if (event && event.type === 'mouseenter') {
        if (document.body.clientWidth <= 1080) {
          return
        }
      }
      this.middleData = this.leftData[ind].spuInfoList
    }
  },
  watch: {
    showData: {
      handler (val) {
        this.leftData = val
        this.changeMiddleData(0)
      }
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.change-enter-active {
  transition: all 0.5s;
}
.change-enter,
.fade-leave-to {
  margin-left: -100px;
  opacity: 0;
}
.li-style() {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 35px;
  span {
    display: inline-block;
    cursor: pointer;
  }
}
.scroll-box {
  width: 120%;
  height: 100%;
  overflow-y: scroll;
}
.back-btn {
  display: none;
}
@media screen and(max-width:1080px) {
  .back-btn {
    display: block;
    font-family: iconfont;
    font-size: 40px;
    margin-top: 10px;
    margin-left: 20px;
    cursor: pointer;
  }
}
.nav-box-i {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .tip {
    position: relative;
    width: 100%;
    height: 10%;
    max-width: 1440px;
    margin: 0 auto;
    font-size: 25px;
    font-weight: 700;
    .close {
      position: absolute;
      bottom: 0;
      right: 10px;
      font-family: iconfont;
      font-size: 40px;
      cursor: pointer;
    }
    .title {
      position: absolute;
      bottom: 0;
      left: 20px;
    }
  }
  .nav-box-inner {
    width: 100%;
    max-width: 1440px;
    height: 90%;
    margin: 0 auto;
    .left-nav {
      float: left;
      width: 23%;
      height: 100%;
      padding: 20px;
      padding-top: 50px;
      .left-item {
        li {
          position: relative;
          .li-style();
          &::after {
            content: "\e665";
            font-family: iconfont;
            font: 700;
            opacity: 0;
            position: absolute;
            top: 0;
            right: 0;
          }
          .sub-item {
            display: none;
          }
        }
        .selected::after {
          opacity: 1;
          transition: all 0.3s;
        }
      }
    }
    .middle-nav {
      float: left;
      width: 46%;
      height: 100%;
      padding: 20px;
      padding-top: 50px;
      overflow: hidden;
      .middle-item {
        li {
          .li-style();
          &:nth-child(1) {
            font-weight: 500;
          }
          span::after {
            position: relative;
            top: 5px;
            display: block;
            content: "";
            width: 0;
            height: 1px;
            margin: 0 auto;
            background-color: #000;
            transition: all 0.5s;
          }
        }
        .selected span::after {
          width: 100%;
        }
      }
    }
    .right-nav {
      float: left;
      width: 31%;
      height: 100%;
      .right-container {
        width: 100%;
        height: 80%;
        border-left: #dddddd 1px solid;
        .right-img {
          width: 330px;
          height: 330px;
          border-radius: 30px;
          margin: 0 auto;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .small-title {
          margin-top: 30px;
          margin-left: 60px;
          font-size: 25px;
          font-weight: 700;
          color: #000;
        }
        .more-msg {
          display: inline-block;
          margin-top: 10px;
          margin-left: 60px;
          font-size: 16px;
          font-weight: 700;
          color: #000;
          cursor: pointer;
          &::after {
            margin-top: 5px;
            display: block;
            content: "";
            width: 100%;
            height: 2px;
            margin: 5px auto;
            background-color: #000;
            &:hover {
              animation: underlinechange 0.3s;
            }
          }
          &:hover::after {
            animation: underlinechange 0.3s;
          }
        }
      }
    }
  }
  @media screen and(max-width:1080px) {
    width: 100%;
    overflow: auto;
    .tip {
      display: none;
    }
    .nav-box-inner {
      width: 100%;
      height: auto;
      .left-nav {
        width: 100%;
        height: auto;
        padding-top: 30px;

        .small-middle {
          font-weight: 500 !important;
          font-size: 16px !important;
          span::after {
            position: relative;
            top: 5px;
            display: block;
            content: "";
            width: 0;
            height: 1px;
            margin: 0 auto;
            background-color: #000;
            transition: all 0.5s;
          }
        }
        .selected {
          .sub-item {
            display: block !important;
            margin-top: 20px;
            .selected {
              &::after {
                content: "";
              }
              span::after {
                width: 100%;
              }
            }
          }
        }
      }
      .middle-nav {
        display: none;
      }
      .right-nav {
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
    }
  }
}

@keyframes underlinechange {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
