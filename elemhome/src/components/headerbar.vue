<template>
  <div class="headerbar">
  	<el-row>
		<el-col :span="5">
			<breadcrumb></breadcrumb>
		</el-col>
	  	<el-col :span="5" :offset="14">
			<el-dropdown 
		    @command="handleCommand" 
		    trigger="click"
		    menu-align='start'
		    @visible-change="change"
		    >
		      <span class="el-dropdown-link userInfo">
		        <img src="../common/img/avator.jpeg" width="30" height="30" class="avator">
		        <span class="username">起个名字真难</span>
		        <i ref="icon" class="el-icon-arrow-up"></i>
		      </span>
		      <div class="singOut">
		      	<a href="javascript:void(0)">
		    	  <i class="el-icon-setting"></i>
		    	  <span>退出</span>
		    	</a>
		      </div>
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item command="home">首页</el-dropdown-item>
		        <el-dropdown-item>设置</el-dropdown-item>
		      </el-dropdown-menu>
		    </el-dropdown>
	  	</el-col>
  	</el-row>
	
  </div>
</template>

<script>
import breadcrumb from './breadcrumb';
export default {
  name: 'headerbar',
  data () {
    return {
      deg: 0
    }
  },
  components: {
  	breadcrumb
  },
  methods: {
  	handleCommand(command) {
  		if(command === "home"){

  		}
  	},
  	change(val){
  		if(val === true) {
  			let icon = this.$refs.icon;
  			this.deg += 180; 
  			icon.style.transition = "transform .2s ease-in-out";
  			icon.style.transform = "rotate("+this.deg+"deg)";
  		}else{
  			let icon = this.$refs.icon;
  			this.deg -= 180; 
  			icon.style.transform = "rotate("+this.deg+"deg)";
  		}	
  	},
  	watch: {
  		iconRotate(val){
  			console.log(val);
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../common/less/config';
.headerbar{
	.clearfix;
	background-color: #EFF2F7;
}
.el-dropdown-menu{
	li{
		text-align: center;
		font-size: 12px;
	}
}
.userInfo{
	margin: 3px 0;
	height: 36px;
	display: flex;
	align-items: center;
	float: left;
	width: 151px;
	margin-right: 13px;
	border-right: 1px solid;
	border-right-color: #d9dbdb;
	.username{
		margin-right: 3px;
		font-style: "微软雅黑";
		font-size: 13px;
	}
	&:hover{
		cursor:pointer;
	}
	.el-icon-arrow-down{

	}
}
.singOut{
	position: relative;
	float: left;
	line-height: 42px;
	span,a{
		color: #48576a;
		font-size: 13px;
	}
	.el-icon-setting{
		position: relative;
		left: 2px;
	}
}
.avator{
	border-radius: 50%;
	margin-right: 6px;
}
</style>
