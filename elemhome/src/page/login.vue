<template>
  <div class="login">
  	<transition name="slide-fade">
  		<div class="form_tip" v-show="showFrom">
   			<p>仿elem后台管理系统</p>
   		</div>
  	</transition>
   	<transition name="slide-fade">
   			<section class="form_container" v-show="showFrom">
   			   		<el-form ref="loginForm" :model="loginForm" :rules="rules">
   						<el-form-item prop="username">
   							<el-input 
   							placeholder="用户名" 
   							v-model="loginForm.username"
   							></el-input>
   						</el-form-item>
   						<el-form-item prop="password">
   							<el-input 
   							type="password" 
   							placeholder="密码"
   							v-model="loginForm.password"
   							></el-input>
   						</el-form-item>
   						<el-form-item>
   							<el-button 
   							type="primary" 
   							class="submit_btn"
                :autofocus="true"
   							@click="submitForm('loginForm')"
   							>登陆</el-button>
   						</el-form-item>
   					</el-form> 
   					<p class="tip">超级管理员账号：admin 密码：123456</p>
   			   	</section>
   		</transition>	
   	
  </div>
</template>

<script>
import {login} from '@/api/api';

export default {
  name: 'login',
  data () {
    return {
    	showFrom:false,
       	loginForm:{
      		username:'',
      		password:''
      	},
      	rules:{
      		username:[
      			{ 
      				required:true,
              message:'请输入用户名',
              trigger:'blur'
      			}
      		],
      		password:[
      			{ 
      				required:true,
              message:'请输入密码',
              trigger:'blur'
      			}
      		]
      	}
    }
  },
  methods:{
  	async submitForm(loginForm){
  		this.$refs.loginForm.validate(async valid => {
  			if(valid){
  				const data = {
  					username: this.loginForm.username,
  					password: this.loginForm.password
  				}
  				const res = await login(data);
  				//console.log(res);
  				if(res.status === 1){
  					this.$message({
				        type: 'success',
				        message: '登录成功'
				    });
            // 将管理员登录信息记录在sessionStorage
            sessionStorage.setItem('username', res.data.username);
				    this.$router.push('home');
  				}else{
  					this.$message({
  						type: 'error',
		           message: '登录失败'
  					});
  				}
  			}else{
  				this.$notify.error({
					title: '错误',
					message: '请输入正确的用户名密码',
					offset: 100
				});
				return false;
  			}
  		})
  	},
    async enterSubmit(ev){
      if(ev.key === 'Enter' ){
        this.submitForm(this.loginForm);
      }
    }
  },
  mounted(){
  	this.showFrom = true;
    document.addEventListener('keydown', this.enterSubmit);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.enterSubmit);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.slide-fade-enter-active, .slide-fade-leave-active {
	  transition: all 1s;
}
.slide-fade-enter, .slide-fade-leave-active {
	transform:translateY(-30px);
	opacity: 0;
}
.login{
	position: fixed;
	left: 0;
	background-color: #2c3338;
	width:100%;
	height: 100%;
	z-index: -1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	section{
		width: 320px;
		height: 210px;
		padding: 25px;
		border-radius: 5px;
		background-color: #fff;
		.submit_btn{
			width: 100%;
		}
	}
}
.form_tip{
	position: absolute;
	top: 150px;
	margin:0 auto; 
	p{
		font-size: 30px;
		font-family: "微软雅黑";
		color:#fff;
	}		
}
</style>
