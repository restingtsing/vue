<template>
    <div>
        <Header></Header>
        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="footer"><p>copyright by resting</p></div>
    </div>
</template>

<script>
import Header from './header'
export default {
    name:'Layout',
    components:{Header},
    data(){
        return{
        }
    }
}
</script>

<style>
    *{
        margin:0px;padding: 0px;
    }
    li{
        list-style-type: none;
    }
    a:link { 
        color: #000000; 
        text-decoration: none; 
    } 
    a:visited {
        color: #000000;
        text-decoration: none; 
    } 
    a:hover {
        color: #812323; 
        text-decoration:none; 
    } 
</style>

