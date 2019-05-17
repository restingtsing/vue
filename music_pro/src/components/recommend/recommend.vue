<template>
    <div class="recommend">
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
          <div class="swiper-container" ref="slider">
            <div class="swiper-wrapper" v-if="recommends.length">
              <div v-for="item in recommends" class="swiper-slide sliderimg">
                <a :href="item.linkUrl" >
                  <img @load="loadImg" :src="item.picUrl" :alt="item.id" ref="sliderImg" />
                </a>
              </div>
            </div>
            <div class="swiper-pagination" ></div>
          </div> 
        
          <!-- <slider>
           <div v-for="item in recommends" class="swiper-slide">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" :alt="item.id"> 
              </a>
           </div>
          </slider> -->
        </div> 
        <div class="loading-container" v-show="!discList.length">
          <Load></Load>  
        </div> 
      </scroll>
      <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item">
              <div class="icon">
                <a href="">
                   <img v-lazy="item.imgurl" width="60" height="60">
                </a>
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import Load from '../../base/loading/loading'
import Scroll from '../../base/scroll/scroll'
import Swiper from '../../../static/swiper-3.4.2.min.js'
import {getRecommend,getList} from '../../api/recommend'
import { ERR_OK } from '../../api/config'


export default {
  components:{Scroll,Load},
  data(){
    return{
      recommends:[],
      discList:[]
    }
  },
  created(){
    setTimeout(()=>{
      this._getList()
    },500)
    
    this._getRecommend()
    
  },
  mounted(){
    this.timer = setTimeout(()=>{
      this._setSliderWidth()
      var swiper1 = new Swiper('.swiper-container',{
        autoplay:3000,
        autoplayDisableOnInteraction : false,
        loop:true,
        pagination : '.swiper-pagination'
      })
    },200)
    window.addEventListener('resize',()=>{
        this._setSliderWidth()
    })
  },
  methods:{
    _setSliderWidth(){
        let img = this.$refs.sliderImg
        for(let i of img){
          i.style.width = "100%"
        }
    },
    _getRecommend(){
      getRecommend().then((res=>{
        if(res.code===ERR_OK){
          this.recommends =res.data.slider
        }
      }))
    },
    _getList(){
      getList().then((res=>{
        if(res.code === ERR_OK){
          this.discList = res.data.list
        }
      }))
    },
    loadImg(){
      if(!this.checkloading){
        this.$refs.scroll.refresh()
        this.checkloading = true
      }
    }
  },
  destroyed(){
    clearTimeout(this.timer)
  }
    
}
</script>

<style scoped>
</style>
<style lang="stylus" scoped>
@import '../../common/stylus/variable'
  .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
  .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
