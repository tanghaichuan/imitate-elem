<template>
  <div class="home">
  	<el-row>
  		<el-col :span="4" style="height:100%;background-color:rgb(50, 64, 87);">
    		<navmenu></navmenu>
    	</el-col>	
    	<el-col :span="20">
    		<router-view></router-view>
    	</el-col>	
    </el-row>
  </div>
</template>

<script>
import contain from './contain';
import navmenu from './navmenu';
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
  	contain,
  	navmenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home,.el-row{
	height: 100%;
}
</style>
