<template>
	<div class="shop-details">
		<header class="detail-header">
			<span class="icon-arrow_lift" @click="showShopDetails"></span>
			<h1>商家详情</h1>
		</header>
		<div class="details-content">
			<div class="shop-info">
				<section class="section">
					<h3 class="section-title">活动与属性</h3>
					<div>
						<div class="activity-containerWrap activity-container">
							<i class="activity-activityIcon" style="
							color: rgb(255, 255, 255);
    						border-color: rgb(240, 115, 115);
    						background-color: rgb(240, 115, 115);
							">减</i>
							<span class="activity-description">
								<span>满30减5</span>
							</span>
						</div>
						<div class="activity-containerWrap activity-container">
							<i class="activity-activityIcon" style="
							color: rgb(255, 255, 255);
    						border-color: rgb(240, 115, 115);
    						background-color: rgb(240, 115, 115);
							">减</i>
							<span class="activity-description">
								<span>满30减5</span>
							</span>
						</div>
						<div class="activity-containerWrap activity-container">
							<i class="activity-activityIcon" style="
							color: rgb(255, 255, 255);
    						border-color: rgb(240, 115, 115);
    						background-color: rgb(240, 115, 115);
							">减</i>
							<span class="activity-description">
								<span>满30减5</span>
							</span>
						</div>
					</div>
				</section>
				<section class="section">
					<h3 class="section-title">商家实景</h3>
					<a>
						<img src="../../common/img/rating-avatar.png" alt="">
						<span class="album-albumDesc">门面(1)张</span>
					</a>
				</section>
				<section class="section">
					<h3 class="section-title">商家信息</h3>
					<ul class="detail-list">
						<li>欢迎光临！</li>
						<li>地址：北京市东城区北京站西街1号</li>
						<li>营业时间：07:00-21:30</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
	name: 'shopDetails',
	data() {
		return {
			
		}
	},
	computed: {

	},
	methods: {
		...mapMutations([
	      'TOGGLE_SHOPDETAILS'
	    ]),
	    showShopDetails() {
	      this.TOGGLE_SHOPDETAILS();
	    }
	}
}
</script>
<style scoped lang="less">
@import '../../common/less/common.less';
.shop-details{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	overflow: auto;
	background: #fff;
	z-index: 999;
	width: 100%;
	height: 100%;
	.detail-header{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		background: #2196f3;
		color: #fff;
		height: 1.173333rem;
    	line-height: 1.173333rem;
		.icon-arrow_lift{
			position: absolute;
			left: .106667rem;
    		top: .32rem;
			font-size: .533333rem;
			font-weight: 400;
      		color:#fff;
		}
	}
	.details-content{
		padding-top: 1.173333rem;
		height: 100%;
		box-sizing: border-box;
		overflow: auto;
	}
	.shop-info{
    	padding-top: .266667rem;
    	background-color: #eee;
    	font-size: .346667rem;
    	overflow-y: auto;
	}
	.section{
		.detail-list li{
		    display: flex;
		    justify-content: space-between;
		    margin-right: -.4rem;
		    padding: .4rem .133333rem .4rem 0;
		}
		.clearfix;
		a{
			position: relative;
		    float: left;
		    overflow: hidden;
		    margin-top: .32rem;
		    margin-right: .186667rem;
		    width: 2.106667rem;
		    height: 2.106667rem;
			img{
				.width(158);
				.height(158);
				display: block;
			}
			.album-albumDesc{
				display: block;
			    position: absolute;
			    bottom: 0;
			    width: 100%;
			    text-align: center;
			    height: .48rem;
			    line-height: .48rem;
			    color: #eee;
			    background-color: rgba(0,0,0,.6);
			}
		}
		margin-bottom: .266667rem;
	    padding: 0 .4rem .4rem;
	    font-size: .346667rem;
	    background-color: #fff;
	    color: #666;
		.section-title{
			margin: 0 -.4rem;
		    padding: .213333rem .4rem;
		    border-bottom: 1px solid #eee;
		    color: #333;
		    font-weight: 400;
		    font-size: .4rem;
		    line-height: .6rem;
		}
		
		.activity-container{
			&.activity-containerWrap:not(:last-child){
				margin: .4rem 0;
			}
			line-height: .426667rem;
			display: flex;
			font-size: .266667rem;
			.activity-description{
			    flex: 1;
			    display: block;
			    width: 0;
			}
		}
		.activity-activityIcon{
			margin-top: .066667rem;
			margin-right: .133333rem;
		    font-size: .266667rem;
		    font-style: normal;
		    line-height: 1;
		    height: .293333rem;
		    display: inline-block;
		    box-sizing: border-box;
		    text-align: center;
		    border: 1px solid;
		    border-radius: .04rem;
		}
	}
}
</style>