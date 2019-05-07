<template>
    <div class="header">
            <div class="header-top">
                <span style="font-size: 14px;color:#fff;line-height:50px;">24/7 Support   国内销售热线</span>
                <span class="lang" style="color:#fff;">CN 
                    <ul >
                        <li v-for="item in langList">{{item}}</li>
                    </ul>
                </span>
            </div>
            <div class="header-nav">
                <div class="nav-logo">
                    <router-link to='/'><img src="../assets/img/logo_6_1.png" alt="senke"></router-link>
                </div>
                <span class="nav-list">
                    <ul>
                        <li><router-link to='/'>首页</router-link></li>
                        <li><router-link to="/">产品中心&nbsp;</router-link><span></span></li>
                        <li><router-link to="/">公司新闻&nbsp;</router-link><span></span></li>
                        <li><router-link to="/">关于森科&nbsp;</router-link><span></span></li>
                        <li><router-link to="/">人力资源</router-link></li>
                    </ul>
                </span>
            </div>
        </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            langList:['EN','FR','ESP']
        }
    }
}
</script>

<style scopde>
    .header{
        height: 100px;
        width:100%;
    }
    .header-top{
        height: 50px;
        width: 100%;
        background-color: #181414;
        z-index:2;
        background: linear-gradient(to bottom, #16222a,#3a6073);
    }
    .header-nav{
        height: 50px;
        width: 100%;
        background: linear-gradient(to bottom,#3a6073,#fff );
        z-index:1;
    }
    .nav-logo{
        width:220px;
        height: 0px;
        margin-left:20%;
        line-height:70px;
    }
    .nav-logo img{
        width:200px;
    }
    .nav-list{
        margin-left: 32%;
        height: 50px;
    }
    .nav-list ul{
        display: inline-block;
        padding-top: 20px;
    }
    .nav-list ul li{
        float: left;
        margin-left:30px;    
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
        color:#000000;
    }
    li span:before{
        content: "\f107";
    }
    .lang{
        float: right;
        margin-right: 20%;
        line-height: 50px;
    }
    .lang ul{
        display: none;
        width:23.7px;
        color: rgb(102, 26, 3);
    }
</style>

