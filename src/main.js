import './assets/css/globe.css'
import './assets/msg/msg.css'
import './assets/css/normalize.css'
import './assets/msg/msg'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/static/font/iconfont.css'

import '../src/data/index'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
