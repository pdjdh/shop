<template>
  <div class='register-box'>
    <div class='terms-content'>
      <div class="box-title">
        <h1>创建您的三星帐户</h1>
      </div>
      <form>
        <div class="box-msgs clearfix">
          <ul>
            <li v-for="(msg,ind) in msgItems"
                :key="msg.msgId">
              <msg-input :msgId="msg.msgId"
                         :msgName="msg.msgName"
                         :msgTitle="msg.msgTitle"
                         :testRE="msg.testRE"
                         :warnMsg="msg.warnMsg"
                         :type='msg.type'
                         :ref="msg.msgId"
                         :ind="ind"
                         :changeRE="msg.msgName==='pwd'?changeRE: ()=>{}"
                         @checkValue="checkValue"></msg-input>
            </li>
          </ul>

        </div>
        <input type="button"
               class="agree-btn"
               :disabled='!showBtn'
               value="同意"
               @click="register">

      </form>
    </div>
  </div>
</template>

<script>
import MsgInput from './MsgInput.vue'

export default {
  name: 'RegisterMsgBox',
  data () {
    return {
      msgItems: [{
        msgId: 'msg01',
        msgName: 'account',
        msgTitle: '手机号',
        testRE: /^[1][3,5,7,8][0-9]\d{8}$/,
        warnMsg: '手机号格式错误',
        type: 'text'
      }, {
        msgId: 'msg02',
        msgName: 'pwd',
        msgTitle: '密码',
        testRE: /^[a-zA-Z]{1}[a-zA-Z0-9]{8,15}$/,
        warnMsg: '密码格式错误',
        type: 'password'
      }, {
        msgId: 'msg03',
        msgName: 'repwd',
        msgTitle: '确认密码',
        testRE: /^[a-zA-Z]{1}[a-zA-Z0-9]{8,15}$/,
        warnMsg: '密码不一致',
        type: 'password'
      }],
      success: [false, false, false],
      showBtn: false
    }
  },
  watch: {
    success (newValue) {
      for (const k in newValue) {
        if (newValue[k] === false) {
          this.showBtn = false
          return
        }
      }
      this.showBtn = true
    }
  },
  methods: {
    checkValue (ind, res) {
      this.success.splice(ind, 1, res)
    },
    changeRE () {
      this.msgItems[2].testRE = new RegExp('^' + this.$refs.msg02[0].msgValue + '$')
    },
    register () {
      /*
       注册代码

      */
      this.$router.push('/user/login')
    }
  },
  computed: {

  },
  components: {
    MsgInput
  },
  props: {
    agreeAll: {
      type: Boolean
    }
  },

  beforeRouteEnter (to, from, next) {
    if (to.params.agreeAll) {
      next()
    } else {
      next({ name: 'RegTerms' })
    }
  }

}
</script>

<style lang="less" scoped>
.register-box {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 640px;
  height: 700px;
  border: 2px solid #d5d5d5;
  border-radius: 20px;
  background-color: #fff;
  @media screen and (max-width: 780px) {
    width: 100%;
    border: none;
    border-radius: 0%;
    top: 0;
  }
  .terms-content {
    width: 400px;
    margin: 0 auto;
    .box-title {
      margin-top: 80px;
      text-align: center;
      h1 {
        color: #0072de;
        font-size: 40px;
        font-weight: 500;
        margin: 0 auto;
      }
    }
    .box-msgs {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      ul {
        li {
          margin-top: 70px;
        }
      }
    }
    .agree-btn {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 40px;
      border: none;
      border-radius: 20px;
      margin: 0 auto;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      background-color: #3e91ff;
      cursor: pointer;
      &:disabled {
        background-color: #97c5f0;
        cursor: not-allowed;
      }
    }
  }
}
</style>>
