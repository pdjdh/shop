import Vue from 'vue'
import VueRouter from 'vue-router'

// user页
const User = () => import(/* webpackChunkName: "user" */ '../views/user/User.vue')
const LoginPage = () => import(/* webpackChunkName: "user" */ '../views/user/LoginPage.vue')
const RegisterPage = () => import(/* webpackChunkName: "user" */ '../views/user/RegisterPage.vue')
const RegisterTermsBox = () => import(/* webpackChunkName: "user" */ '../components/user/RegisterTermsBox.vue')
const RegisterMsgBox = () => import(/* webpackChunkName: "user" */ '../components/user/RegisterMsgBox.vue')

const HomePage = () => import(/* webpackChunkName: "store" */ '../views/store/HomePage.vue')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: HomePage

}, {
  path: '/user',
  name: 'User',
  component: User,
  children: [{
    path: 'login',
    name: 'Login',
    component: LoginPage
  }, {
    path: 'register',
    name: 'Register',
    component: RegisterPage,
    redirect: '/user/register/terms',
    children: [{
      path: 'terms',
      name: 'RegTerms',
      component: RegisterTermsBox
    }, {
      path: 'msg',
      name: 'RegMsg',
      component: RegisterMsgBox,
      props: route => ({ agreeAll: route.params.agreeAll })
    }]
  }]
}

]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
