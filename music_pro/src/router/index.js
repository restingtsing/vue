import Vue from 'vue'
import Router from 'vue-router'
import Singer from '../components/singer/singer.vue'
import Recommend from '../components/recommend/recommend.vue'
import Search from '../components/search/search.vue'
import Rank from '../components/rank/rank.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/singer',
      component:Singer
    },
    {
      path: '/rank',
      component:Rank
    },
    {
      path: '/search',
      component:Search
    },
    {
      path: '/recommend',
      component:Recommend
    },
  ]
})
