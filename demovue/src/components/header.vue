<template>
    <div class="header">
            <div class="header-top">
                <span><p style="font-size: 14px;color: #939393;line-height:50px;">24/7 Support   国内销售热线  中国</p></span>
            </div>
            <div class="header-nav">
                <div class="nav-logo">
                    <router-link to='/'><img src="../assets/logo_6.png" alt="senke"></router-link>
                </div>
                <span class="nav-list">
                    <ul>
                        <li><router-link to='/'>首页</router-link></li>
                        <li>产品中心&nbsp;<span></span></li>
                        <li>公司新闻&nbsp;<span></span></li>
                        <li>关于森科&nbsp;<span></span></li>
                        <li>人力资源</li>
                    </ul>
                </span>
            </div>
        </div>
</template>
<script>
export default {
    name:'Header'
}
</script>

<style>
    .header{
        height: 100px;
        width:100%;
    }
    .header-top{
        height: 50px;
        width: 100%;
        background-color: #270101;
        box-shadow: 0 5px 5px gray
    }
    .header-nav{
        height: 50px;
        width: 100%;
    }
    .nav-logo{
        width:220px;
        height: 0px;
        margin-left:20%;
    }
    .nav-logo img{
        width:140px;
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
        color: #363738;
    }
    li span:before{
        content: "\f107";
    }
</style>

