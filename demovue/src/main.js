// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:IndexPage}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render:p=>p(Layout)
})
