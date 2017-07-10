<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
  	
  }
}
</script>

<style lang="less"> 
@import './common/less/reset.less';
@import './common/less/config.less';
body{
	height: 100%;
	width: 10rem;
	margin: 0 auto;
	position: relative;
  z-index: -1;
  overflow: hidden;
}
</style>
