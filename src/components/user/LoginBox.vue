<template>
  <div class='login-content '>
    <div class="login-content-wapper">
      <div class="login-l">
        <div class="l-item1">
          <img class="logo-title"
               src="../../static/img/login/samsung_logo.34c0d994.png">
        </div>
        <div class="l-item2 welcome">欢迎登录三星网上商城</div>
        <div class="l-item3">
          <img class="logo-bg"
               src="../../static/img/login/bg.8b03ecec.jpg">
        </div>
      </div>
      <div class="login-r">
        <div class='login-box'>
          <div class='login-title'>账号密码登录</div>
          <div class="login-phone">
            <img src="../../static/img/login/icon-people.png">
            <input type="tel"
                   name="tel"
                   id="tel"
                   placeholder="请输入手机号码"
                   v-model="tel">
          </div>
          <div class="login-pwd">
            <img src="../../static/img/login/icon-lock.png">
            <input type="password"
                   name="pwd"
                   id="pwd"
                   placeholder="请输入密码"
                   v-model="pwd">

          </div>
          <button class="login-btn msg-tip-btn"
                  @click="login">登陆</button>
          <div class="login-tip">注：使用三星账号登录商城或将其他账号绑定三星账号，
            可享受积分福利。还没有三星账号？<span class="register">
              <router-link :to="{name: 'Register'}">立即注册&gt;&gt;</router-link>
            </span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tipHandle } from '../../assets/msg/msg'
export default {
  name: 'LoginBox',
  data () {
    return {
      tel: '15111111111',
      pwd: 'asdasd123',
      telPE: /^[1][3,5,7,8][0-9]\d{8}$/,
      pwdPE: /^[a-zA-Z]{1}[a-zA-Z0-9]{8,15}$/
    }
  },
  computed: {
    testTel () {
      return this.telPE.test(this.tel)
    },
    testPwd () {
      return this.pwdPE.test(this.pwd)
    }
  },
  methods: {
    login () {
      if (!this.testTel) {
        tipHandle('账号格式错误', true, 8000)
        return
      }
      if (!this.testPwd) {
        tipHandle('密码格式错误', true, 8000)
        return
      }
      this.$router.push({ name: 'Home' })
    }

  }
}
</script>

<style lang='less' scoped>
.login-content {
  width: 100%;
  height: 100%;
  min-width: 400px;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  @media screen and (max-width: 768px) {
    min-width: 100%;
    min-height: 100%;
  }
  .login-content-wapper {
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 600px;
    background-color: #000;
    .login-l {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 40%;
      height: 100%;
      .l-item1 {
        height: 7%;
        .logo-title {
          height: 100%;
        }
      }

      .l-item2 {
        font-size: 2vw;
        font-weight: 700;
        color: #fff;
        text-align: center;
      }
      .l-item3 {
        .logo-bg {
          width: 100%;
        }
      }
    }
    .login-r {
      width: 45%;
      height: 100%;
      .login-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #fff;

        .login-title {
          margin-top: 30px;
          text-align: center;
          font-size: 1.8vw;
          font-weight: 700;
        }

        .login-phone {
          .input-style();
        }
        .login-pwd {
          .input-style();
        }
        .login-btn {
          width: 70%;
          height: 50px;
          color: #fff;
          font-size: 25px;
          background: #000;
          border: 1px solid #000;
          border-radius: 36px;
          cursor: pointer;
        }
        .login-tip {
          width: 60%;
          margin-bottom: 30px;
          font-size: 10px;
          color: #000;
          .register {
            color: #228aff;
            cursor: pointer;
          }
        }
      }
    }
  }

  .input-style() {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #f9f9f9;
    border-radius: 10px;
    img {
      height: 20px;
      height: 20px;
    }
    input {
      margin-left: 20px;
      height: 100%;
      width: 80%;
      border: none;
      outline: none;
      font-size: 1.5vw;
    }
    @media screen and (max-width: 780px) {
      input {
        font-size: 3vw;
      }
    }
  }

  @media screen and (max-width: 780px) {
    .login-content-wapper {
      width: 100%;
      height: 100%;
      .login-l {
        display: none;
      }
      .login-r {
        width: 100%;
        min-width: 300px;
        .login-box {
          border-radius: 0;
          .login-title {
            font-size: 8vw !important;
          }
        }
      }
    }
  }
}
</style>
