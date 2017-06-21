<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
	  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
	  <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
	</el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.breadcrumb,.el-breadcrumb{
  padding-left: 10px;
  height: 44px;
  line-height: 44px;
}
</style>
