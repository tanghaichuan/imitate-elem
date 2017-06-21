<template>
  <div class="contain">
  	<el-row :gutter="20">
		<el-col :span="6">
			<div class="bg-info">
				<span>注册用户</span>
				<div class="value">10000</div>
			</div>
		</el-col>
	  	<el-col :span="6">
	  		<div class="bg-success">
				<span>订单数量</span>
				<div class="value">10000</div>
			</div>
	  	</el-col>
	  	<el-col :span="6">
	  		<div class="bg-warning">
				<span>管理员</span>
				<div class="value">10000</div>
			</div>
	  	</el-col>
	  	<el-col :span="6">
	  		<div class="bg-danger">
				<span>API请求量</span>
				<div class="value">10000</div>
			</div>
	  	</el-col>
	</el-row>
	<ve-line style="margin-top:50px;"
	:data="chartData" 
	:settings="chartSettings" 
	tooltip-visible 
	legend-visible>
	</ve-line>
  </div>
</template>

<script>
export default {
  name: 'contain',
  data () {
    return {
      
    }
  },
  created() {
  	this.chartData = {
      columns: ['日期', '注册用户', '订单数量', '管理员', 'API请求量'],
      rows: [
        { 
        	'日期': '1月1日', 
        	'注册用户': 1523, 
        	'订单数量': 1523, 
        	'管理员': 1000, 
        	'API请求量': 1000 
        },
        { 
        	'日期': '1月2日', 
        	'注册用户': 1223, 
        	'订单数量': 1523, 
        	'管理员': 1100, 
        	'API请求量': 1300
        },
        { 
        	'日期': '1月3日', 
        	'注册用户': 2123, 
        	'订单数量': 1523, 
        	'管理员': 1200, 
        	'API请求量': 1500
        },
        { 
        	'日期': '1月4日', 
        	'注册用户': 4123, 
        	'订单数量': 1523, 
        	'管理员': 1300, 
        	'API请求量': 3200
        },
        { 
        	'日期': '1月5日', 
        	'注册用户': 3123, 
        	'订单数量': 1523, 
        	'管理员': 1400, 
        	'API请求量': 2000
        },
        { 
        	'日期': '1月6日', 
        	'注册用户': 7123, 
        	'订单数量': 1523, 
        	'管理员': 1500, 
        	'API请求量': 2200
        }
      ]
    },
    this.chartSettings = {
      dimension: ['日期'],
      metrics: [ '注册用户', '订单数量', '管理员', 'API请求量'],
      axisSite: {
        right: ['趋势']
      },
      yAxisName: ['总量', '趋势'],
      area: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bg-common{
	text-align: center;
	height: 100px;
	border-radius: 7px;
	span{
		font-size: 16px;
		color: #fbfbfb;
		display: block;
		height: 35px;
		line-height: 35px;
		border-bottom: 2px solid rgba(215,215,215,0.3);
	}
	.value{
		height: 63px;
		line-height: 63px;
		font-size: 24px;
		color: #fbfbfb;
	}
}
.bg-info{
	background-color: #20a0ff;
	.bg-common;
}
.bg-success{
	background-color: #13CE66;
	.bg-common;
}
.bg-warning{
	background-color: #F7BA2A;
	.bg-common;
}
.bg-danger{
	background-color: #FF4949;
	.bg-common;
}

</style>
