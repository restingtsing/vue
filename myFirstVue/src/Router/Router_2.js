import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const index = {template:`<div>this is index page</div>`}
const greet = {template:`<div>this is greet page</div>`}

const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:index},
        {path:'/greet/:a/:b',component:greet}
    ]
})
new Vue({
    router,
    template:`<div>
        <router-link to="/">index</router-link>
        <router-link to="/greet/rest/hehe">greet</router-link>
        <router-view></router-view>
    </div>`
}).$mount('#app')