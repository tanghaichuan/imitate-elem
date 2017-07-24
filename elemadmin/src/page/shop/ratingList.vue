<template>
	<div class="rating-list">
		<ul v-show="food.ratings && food.ratings.length">
			<li v-for="item in food.ratings" class="rating-item">
				<div class="user">
					<span class="name">{{item.username}}</span>
					<img src="" alt="" class="avatar">
				</div>
				<div class="time">{{item.rateTime}}</div>
				<p class="text">
					<span :class="{'icon-thumb_up':item.rateType===0,'icon-thumb_down':item.rateType===1}"></span>{{item.text}}
				</p>
			</li>
		</ul>
		<div class="no-ratings" v-show="!food.ratings || !food.ratings.length">
			
		</div>
	</div>
</template>
<script>
import {goods} from './data'
export default {
	name: 'ratingList',
	data () {
		return {
			food: goods[0].foods[0]
		}
	},
	created(){
		
	}
}
</script>
<style scoped lang="less">
@import '../../common/less/common.less';
.rating-list{
	.rating-item{
		.user{
			.name{
				
			}
			.avatar{
				.width(24);
				.height(24);
			}
		}
	}
}


</style>