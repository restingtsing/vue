<template>
    <div class="content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/img/banner1.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/banner2.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/banner3.jpg" alt=""></div>
            </div>
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
        <div class="comp_intro"></div>
        <div class="hot_product"></div>
        <div class="news"></div>
    </div>
</template>

<script>
import Swiper from '../assets/js/swiper.min.js'
export default {
    name:'IndexPage',
    data(){
        return{

        }
    },
    mounted(){
        var swiper1 = new Swiper('.swiper-container',{
            loop:true,
            speed:800,
            autoplay:{
                delay:3000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
}
</script>
<style scoped>
@import '../assets/css/swiper.min.css';
    .content{
        height: 2000px;
        width: 100%;
        background: #ffffff;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom,#fff, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom,#fff, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     }
     .swiper-container{
         width:100%;
    }
</style>

