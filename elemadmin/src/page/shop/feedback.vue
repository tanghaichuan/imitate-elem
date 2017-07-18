<template>
	<div class="feedback">
		<div class="rating-type">
			<span class="block positive active">{{desc.all}}<span class="count">47</span></span>
			<span class="block positive">{{desc.positive}}<span class="count">47</span></span>
			<span class="block negative">{{desc.negative}}<span class="count">47</span></span>
		</div>
		<div class="switch">
			<span class="icon-check_circle"></span>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>
<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default {
	name: 'feedback',
	data () {
		return {

		}
	},
	props: {
		ratings: {
			type: Array,
			default() {
				return []
			}
		},
		selectType: {
			type: Number,
			default: ALL
		},
		onlyContent: {
			type: Boolean,
			default: false
		},
		desc: {
			type: Object,
			default() {
				return {
					all: "全部",
		            positive: "推荐",
		            negative: "吐槽"
				}
			}
		}
	}
}
</script>
<style scoped lang="less">
@import '../../common/less/common.less';
.feedback{
	.rating-type{
		.pb(36);
		.ml(36);
		.mr(36);
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		font-size: 0;
		.block{
			display: inline-block;
			.pd(16, 24, 16, 24);
			.mr(16);
			border-radius: 1px;
			color: rgb(77, 85, 93);
			.lh(32);
			.fs(24);
			.count{
				.fs(16);
				.ml(4);
			}
			&.active{
				color: #fff;
			}
			&.positive{
				background: rgba(0, 160, 220, 0.2);
				&.active{
					background: rgb(0, 160, 220);
				}
			}
			&.negative{
				background: rgba(77, 85, 93, 0.2);
				&.active{
					background: rgb(77, 85, 93);
				}
			}
		}
	}
	.switch{
		.pd(24, 36, 24, 36);
		.lh(48);
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		color: rgb(147, 153, 159);
		font-size: 0;
		display: flex;
		align-items: center;
		.icon-check_circle{
			.fs(48);
			.mr(8);
		}
		.text{
			.fs(24);
		}
	}
}
</style>