/*import Vue from 'vue'
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
}).$mount('#app')*/
