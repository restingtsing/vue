import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const First = {template:`<div>first page</div>`}
const Second = {template:`<div>second page</div>`}
const Home = {template:`<div>home page</div>`}

const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:Home},
        {path:'/first',component:First},
        {path:'/second',component:Second}
    ]
})
new Vue({
    router,
    template:`<div id="r">
                <h1>导航</h1>
                    <ul>
                        <li>
                            <router-link to="/">home</router-link>
                        </li>
                        <li>
                            <router-link to="/first">first</router-link>
                        </li>
                        <li>
                            <router-link to="/second">second</router-link>
                        </li>
                    </ul>
                    <router-view></router-view>
                </div>`
}).$mount('#app')

