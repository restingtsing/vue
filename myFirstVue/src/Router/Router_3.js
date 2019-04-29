import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = {template:`<div>this is index<router-view></router-view></div>`}
const user = {template:`<div>this is {{$route.params.username}}-{{$route.query.aaa}}</div>`}
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:index,children:[
            {path:'/:username',component:user}
        ]}
    ]
})

new Vue({
    el:'#app',
    router,
    template:`
        <div>
            <router-link to="/">index</router-link>
            <router-link :to="{path:'/rest00',query:{aaa:'bbb'}}">user</router-link>
            <router-view></router-view>
        </div>
    `
})