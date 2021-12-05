<template>
  <div class="msg">
    <input :id='msgId'
           :name='msgName'
           :type="type"
           class="msg-input"
           v-model.trim="msgValue"
           @change="changeRE">
    <label :for="msgId"
           class="title"
           :class="hasVal">{{msgTitle}}</label>
    <div v-show="showWarn"
         class='warn'>
      {{warnMsg}}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msgValue: '',
      inc: false,
      showWarn: false
    }
  },
  computed: {
    hasVal () {
      return this.msgValue !== '' ? 'title-sel' : ''
    }
  },
  watch: {
    msgValue () {
      this.showWarn = !this.testRE.test(this.msgValue)
    },
    testRE () {
      this.msgValue = ''
    },
    showWarn () {
      this.$emit('checkValue', this.ind, !this.showWarn)
    }

  },
  beforeDestroy () {

  },
  props: ['msgId', 'msgName', 'msgTitle', 'warnMsg', 'testRE', 'type', 'changeRE', 'checkValue', 'ind']
}
</script>

<style lang="less" scoped>
.msg {
  position: relative;
  width: 500px;
  height: 40px;
  font-size: 20px;
  margin-top: 20px;
  color: #909090;
  .title {
    position: absolute;
    left: 0px;
    bottom: 10px;
    transition: all 0.2s;
  }
  .msg-input {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 1px solid #8c8c8c;
    outline: none;
    color: #909090;

    &:focus {
      color: #0072de;
      border-bottom: 3px solid #0072de;
      ~ .title {
        color: #0072de;
        font-size: 15px;
        bottom: 35px;
      }
    }
    ~ .title-sel {
      font-size: 15px;
      bottom: 35px;
    }
  }
  .warn {
    width: 100%;
    height: auto;
    margin-top: 10px;
    color: #d0021b;
    font-size: 15px;
    transition: all 0.2;
  }
}
</style>
