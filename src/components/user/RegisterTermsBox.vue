<template>
  <div class='register-box'>
    <div class='terms-content'>
      <div class="box-title">
        <h1>创建您的三星帐户</h1>
      </div>

      <ul class="box-terms">
        <li v-for="term in terms"
            :key="term.id">

          <input type="checkbox"
                 :id="term.id"
                 v-model="term.select">
          <label :for="term.id"
                 class='label-box'>
          </label>
          <label :for="term.id"
                 style="cursor: pointer;">{{term.text}}</label>
          <router-link :to="term.detail"
                       class="link"> 详细信息</router-link>
        </li>
        <div class="line-dashed"></div>

        <li>
          <input type="checkbox"
                 id="selectAll"
                 v-model="selectAll">
          <label for="selectAll"
                 class='label-box'>
          </label>
          <label for="selectAll">
            我已阅读并同意以上所有服务条款。
          </label>
        </li>
      </ul>

      <input type="button"
             class="agree-btn"
             :disabled='disableBtn'
             @click="toMsg"
             value="同意">

    </div>
  </div>

</template>

<script>
export default {
  name: 'RegisterTermsBox',
  data () {
    return {
      terms: [{
        id: '001',
        text: '条款和条件',
        select: false,
        detail: '/'
      }, {
        id: '002',
        text: '特殊条款',
        select: false,
        detail: '/'
      }, {
        id: '003',
        text: '三星帐户隐私声明',
        select: false,
        detail: '/'
      }, {
        id: '004',
        text: '个人敏感信息收集使用说明(核心功能）',
        select: false,
        detail: '/'
      }, {
        id: '005',
        text: '其他特殊情形',
        select: false,
        detail: '/'
      }],
      disableBtn: true
    }
  },
  computed: {
    selectAll: {
      get () {
        const sel = this.terms.filter((i) => {
          return i.select
        })
        return this.terms.length === sel.length
      },
      set (val) {
        this.terms.forEach((i) => {
          i.select = val
        })
      }
    }

  },
  methods: {
    change (e) {
      e.target.classList.toggle('agree-y')
    },
    toMsg () {
      if (this.selectAll) {
        this.$router.push({ name: 'RegMsg', params: { agreeAll: true } })
      }
    }
  },
  watch: {
    selectAll: {
      handler (newval, oldval) {
        this.disableBtn = !newval
      }
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
    .box-terms {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      font-size: 14px;
      .line-dashed {
        width: 116%;
        margin-top: 30px;
        margin-left: -8%;
        border-bottom: 1px dashed #8f8f8f;
      }
      li {
        position: relative;
        margin-top: 30px;
        input {
          display: none;
          & + .label-box {
            position: absolute;
            left: -25px;
            display: inline-block;
            border: 1px solid #8f8f8f;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            cursor: pointer;
            &:hover {
              border: 3px solid #3e91ff;
              opacity: 0.4;
            }
          }
          &:checked + .label-box {
            background-color: #3e91ff;
            border: 1px solid #3e91ff;
            &::after {
              position: absolute;
              top: 0;
              left: 0;
              content: "\e67e";
              font-family: "iconfont";
              font-size: 13px;
              color: #fff;
              font-weight: 700;
            }
          }
        }

        .link {
          display: block;
          font-weight: 700;
          text-decoration: underline;
          margin-top: 10px;
        }
      }
    }
    .agree-btn {
      position: absolute;
      bottom: 40px;
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
