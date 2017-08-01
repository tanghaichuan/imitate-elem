<template>
  <div class="headerbar">
  	<el-row>
		<el-col :span="7">
			<breadcrumb></breadcrumb>
		</el-col>
	  	<el-col :span="7" :offset="0" style="width:65%;text-align:right">
			<el-dropdown 
		    @command="handleCommand" 
		    trigger="click"
		    menu-align='start'
		    @visible-change="change"
		    >
		      <span class="el-dropdown-link userInfo">
		        <img src="../common/img/avator.jpeg" width="30" height="30" class="avator">
		        <span class="username">{{adminInfo.username}}</span>
		        <i ref="icon" class="el-icon-arrow-up"></i>
		      </span>
		      <div class="singOut">
		      	<a href="javascript:void(0)" @click="singout">
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
import {mapActions, mapState} from 'vuex'
import {singout} from '@/api/api';
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
  created() {
  	if(!this.adminInfo.username){
  		this.getLoginData();
  	}
  },
  computed: {
  	...mapState(['adminInfo'])
  },
  methods: {
  	...mapActions(['getLoginData']),
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
  	async singout() {
  		try {
  			let res = await singout();
  			if(res.status === 1 ){
  				this.$message({
	                type: 'success',
	                message: '退出成功'
	            });
	            sessionStorage.removeItem('username');	 // 移除session记录的登录状态
	            this.getLoginData();     				 // 将登录状态置空
	            this.$router.push('/');
  			}else{
				this.$message({
	            	type: 'error',
	            	message: "退出失败"
	        	});
			}
  		}catch(err) {
  			console.error(err);
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
	display: inline-block;
	text-align: right;
	margin: 3px 13px 0 0;
	padding-right: 15px;
	height: 36px;
	display: flex;
	align-items: center;
	float: left;
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
	.el-icon-arrow-up{
		margin-top: 2px;
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
