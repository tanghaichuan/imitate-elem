<template>
	<div class="rating-list">
		<ul>
			<li class="index-comment">
				<div class="comment-block-container">
					<small class="comment-block-time">2017-07-27</small>
					<img src="../../common/img/rating-avatar.png" width="10px" height="10px" class="comment-block-avatar" alt="">
					<div class="comment-block-content">
						<h3 class="comment-block-username">匿名用户</h3>
						<star :score="3"></star>
						<div>
							<ul class="comment-block-foods">
								<li>香汁鲐</li>
							</ul>
						</div>	
					</div>
				</div>
			</li>
		</ul>
		<div class="no-ratings" v-show="!food.ratings || !food.ratings.length">
			
		</div>
	</div>
</template>
<script>
import {goods} from './data'
import star from '../../components/common/star'
export default {
	name: 'ratingList',
	data () {
		return {
			food: goods[0].foods[0]
		}
	},
	components: {
		star
	},
	created(){
		
	}
}
</script>
<style scoped lang="less">
@import '../../common/less/common.less';
.rating-list{
	background-color: #fff;
    padding: .266667rem .32rem 0;
    font-size: .36rem;
	.index-comment{
		padding: .4rem 0;
    	border-bottom: .013333rem solid #ddd;
		.comment-block-container{
			position: relative;
    		padding-left: 1.2rem;
		}
		.comment-block-time{
			position: absolute;
    		top: .133333rem;
    		right: 0;
    		font-size: .32rem;
    		color: #999;
		}
		.comment-block-avatar{
			position: absolute;
		    top: 0;
		    left: 0;
		    width: .8rem;
		    height: .8rem;
		    border-radius: 50%;
		    max-width: 100%;
		}
		.comment-block-content{
			.lh(31);
			font-size: .346667rem;
		}
		.comment-block-username{
			font-size: .346667rem;
		    margin-top: 0;
		    margin-bottom: .133333rem;
		    color: #666;		
		}
		.comment-block-foods li{
			display: inline-block;
		    font-size: .293333rem;
		    color: #999;
		    border: 1px solid #ddd;
		    padding: .106667rem .266667rem;
		    margin: .093333rem;
		    border-radius: .08rem;
		    max-width: 1.6rem;
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		}
	}
}


</style>