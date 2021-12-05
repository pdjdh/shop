<template>
  <div class='register-bg-color'>
    <top></top>
    <div class='register-bg'>
      <router-view></router-view>

    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from '../../components/user/Top.vue'
import Bottom from '../../components/user/Bottom.vue'

export default {
  name: 'RegistPage',
  components: {
    Top,
    Bottom

  }
}
</script>

<style lang="less" >
.register-bg-color {
  width: 100%;
  min-width: 500px;
  height: auto;
  background-color: #f2f2f2;
  .register-bg {
    position: relative;
    width: 100%;
    height: 800px;
    @media screen and (max-width: 780px) {
      height: 700px;
    }
  }
}
</style>
