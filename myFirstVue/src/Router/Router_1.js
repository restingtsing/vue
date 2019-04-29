import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const index = {template:`<h1>this is index page</h1>`}
const first = {template:`<div>this is first page</div>`}
const second = {template:`<div>this is second page</div>`}
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',components:{
            default:index,
            left:first,
            right:second
            }
        }
    ]
})

new Vue({
    router,
    template:`<div>
        <router-link to='/'>this is index</router-link>
        <router-view></router-view>
        <router-view name="left" style="height:300px;weight:300px;float:left;background:red;"></router-view>
        <router-view name="right" style="height:300px;weight:300px;float:left;background:blue;"></router-view>
    </div>`
}).$mount('#app')