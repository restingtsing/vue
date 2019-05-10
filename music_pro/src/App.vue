<template>
  <div id="app">
    <m-header></m-header>
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Nav from './components/navs/navs'
  export default{
    components:{MHeader,Nav}
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
