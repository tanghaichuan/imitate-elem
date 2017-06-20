<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './common/less/main.less';
html,body,#app{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
}
</style>
