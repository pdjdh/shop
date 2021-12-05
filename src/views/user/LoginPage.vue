<template>
  <login-box class="login-box"></login-box>
</template>

<script>
import LoginBox from '../../components/user/LoginBox.vue'
export default {
  name: 'LoginPage',
  components: { LoginBox }
}
</script>

<style lang="less" scoped>
.login-box {
  min-width: 500px;
}
</style>
