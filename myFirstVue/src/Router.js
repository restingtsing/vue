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
}).$mount('#app')*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const index = {template:`<h1>this is index page</h1>`}
const indexthird = {template:`<router-view><router-view>`}
const first = {template:`<h1>this is first page</h1>`}
const second = {template:`<h1>this is second page</h1>`}
const third = {template:`<h1>this is third page</h1>`}
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:indexthird,
            children:[
                {path:'/',name:'indexpage',component:index},
                {path:'third',name:'indexthirdpage',component:third}
            ]},
        {path:'/first',name:'firstpage',component:first},
        {path:'/second',component:second}
    ]
})

new Vue({
    router,
    template:`<div>
        <ul>
            <li><router-link to="/">index</router-link>
                <ol><li><router-link to="/third">third</router-link></li></ol>
            </li>
            <li><router-link :to="{name:'firstpage',params:{id:123}}">first</router-link></li>
            <li><router-link to="/second">second</router-link></li>
        <ul>
        <router-view></router-view><p>{{$route.name}}{{$route.params.id}}</p>
    </div>`
}).$mount('#app')

      
