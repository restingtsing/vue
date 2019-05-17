// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './common/stylus/index.styl'
import '../static/swiper-3.4.2.min.css'
import lazyLoader from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(lazyLoader,{
  loading:require('./common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:p=>p(App)
})
