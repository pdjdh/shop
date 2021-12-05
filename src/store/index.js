import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const RegisterMsg = {
  namespaced: true,
  state: () => ({
    pastnum: 0

  }),
  mutations: {
    incPast (state) {
      state.pastnum++
    },
    redPast (state) {
      if (state.pastnum > 0) { state.pastnum-- }
    },
    resetPast (state) {
      state.pastnum = 0
    }
  },
  actions: {},
  getters: {
    success (state) {
      return state.pastnum === 3
    }
  }
}
const StoreMsg = {
  namespaced: true,
  state: () => ({
    product: null,
    seckill: null,
    menu: null,
    new: null,
    hot: null
  }),
  actions: {
    getMsg (context) {
      axios.get('/product')
        .then(function (response) {
          context.commit('setPriduct', response.data.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('/seckill')
        .then(function (response) {
          context.commit('setSeckill', response.data.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('/menu')
        .then(function (response) {
          context.commit('setMenu', response.data.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('/newAndHot')
        .then(function (response) {
          context.commit('setNewAndHot', response.data.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mutations: {
    setPriduct (state, msg) {
      msg.forEach(element => {
        element.selected = false
        element.categoryInfoList.forEach(ele => {
          ele.selected = false
          ele.spuInfoList.forEach(e => {
            e.selected = false
          })
        })
      })
      state.product = msg
    },
    setSeckill (state, msg) {
      state.seckill = msg
    },
    setMenu (state, msg) {
      state.menu = msg
    },
    setNewAndHot (state, msg) {
      state.new = msg.NEW
      state.hot = msg.HOT
    }
  }

}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    RegisterMsg: RegisterMsg,
    StoreMsg: StoreMsg
  }
})
