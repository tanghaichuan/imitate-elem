<template>
  <div class="home">
  	<el-row>
  		<el-col :span="4" style="height:100%;background-color:rgb(50, 64, 87);">
    		<navmenu></navmenu>
    	</el-col>	
    	<el-col :span="20">
    		<el-col :span="24">
				<headerbar></headerbar>
    		</el-col>
    		<el-col :span="24" style="padding: 25px 40px 0 40px;">
    			<router-view></router-view>
    		</el-col>
    	</el-col>
    </el-row>
  </div>
</template>

<script>
import contain from './contain';
import navmenu from './navmenu';
import headerbar from '@/components/headerbar';
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
  	contain,
  	navmenu,
  	headerbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home,.el-row{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
}
</style>
