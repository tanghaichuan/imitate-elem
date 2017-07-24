<template>
	<div class="shop-details">
		<header class="detail-header">
			<span class="icon-arrow_lift" @click="showShopDetails"></span>
			<h1>商家详情</h1>
		</header>
		<div class="details-content">
			
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
}
</style>