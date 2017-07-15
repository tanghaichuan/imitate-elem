<template>
  <div class="cart-control">
  	<transition name="move">
  		<div class="cart-decrease" v-show="food.count" @click="decreaseCart">
	    	<span class="inner icon-remove_circle_outline"></span>
	    </div>
  	</transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
export default {
  name: 'cartControl',
  data() {
    return {
      
    }
  },
  props: {
  	food: {
  		type: Object
  	}
  },
  methods: {
    addCart(event) {
    	if(event._constructed){
        	return;
      	}
    	if(!this.food.count){
    		//this.food.count = 1;
    		this.$set(this.food, "count", 1);
    		//Vue.set(this.food, "count", 1);  // 添加到vue.data上，以追踪数据
    	}
    	else{
    		this.food.count++;
    	}
    },
    decreaseCart(event) {
    	if(event._constructed){
        	return;
      	}
      	if(this.food.count) {
      		this.food.count--;
      	}
    }
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
.cart-control{
	.fs(0);
	.cart-decrease{
		display: inline-block;
		.pd(12,12,12,12);
		transition: all 0.4s linear;
		&.move-enter-active,&.move-leave-active{
			opacity: 1;
			transform: translate3D(0, 0, 0);
		}
		.inner{
			.fs(48);
			.lh(48);
			color: rgb(0, 160, 220);
		}
		&.move-enter, &.move-leave-to{
			opacity: 0;
			transform: translate3D(24px, 0, 0);
		}	
	}
	.cart-count{
		display: inline-block;
		vertical-align: top;
		.width(24);
		.pt(12);
		.lh(48);
		text-align: center;
		.fs(20);
		color: rgb(147, 153, 159);
	}
	.cart-add{
		display: inline-block;
		.pd(12,12,12,12);
		.fs(48);
		.lh(48);
		color: rgb(0, 160, 220);
	}
}
</style>
