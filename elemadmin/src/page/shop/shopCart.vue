<template>
  <div class="shop-cart">
    <transition name="fade">
      <div class="list-mask" ref="listMask" @click="hideList" v-show="listShow"></div>
    </transition> 
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div :class="['logo', {'highlight':totalCount}]">
            <span :class="['icon-shopping_cart', {'highlight':totalCount}]"></span>
          </div>
          <div :class="['num',{'highlight':totalCount}]" v-show="totalCount">{{totalCount}}</div>
        </div>
        <div :class="['price',{'highlight':totalPrice}]">￥{{totalPrice}}</div>
        <div class="desc">另需配送费{{minPrice}}</div>
      </div>
      <div class="content-right">
        <div :class="['pay', payClass]" @click.stop.prevent="pay">
          {{payDesc}}
        </div>
      </div>
    </div>
    <!--抛物线小球-->
    <div class="ball-container">
      <div v-for="ball in balls" v-show="ball.show" class="ball">
        <div class="inner"></div>
      </div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="empty">清空</span>  
        </div>
        <div class="list-content" ref="cartList">
          <ul>
            <li class="food" v-for="food in selectFoods">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cart-control :food="food"></cart-control>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import cartControl from './cartControl'
import BSroll from 'better-scroll'
export default {
  name: 'shopCart',
  data() {
    return {
      minPrice: 10,
      balls: [
        {
          show:false,
        },
        {
          show:false,
        },
        {
          show:false,
        },
        {
          show:false,
        },
        {
          show:false,
        }
      ],
      fold: true //折叠
    }
  },
  components:{
    cartControl
  },
  props:{
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach( food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach( food => {
        count += food.count;
      })
      return count;
    },
    payDesc() {
      if(this.totalPrice ===0) {
        return `￥${this.minPrice}元起送`;
      }else if(this.totalPrice < this.minPrice){
        let diff = this.minPrice - this.totalPrice;
        return `还差${diff}元起送`;
      }else{
        return '去结算';
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough';
      } else {
        return 'enough';
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false
      }
      if(!this.fold) {
        this.$nextTick( () => {
          if(!this.scroll) {
            let cartList = this.$refs.cartList;
            this.scroll = new BSroll( cartList, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        })
      }
      return !this.fold;
    }
  },
  methods: {
    toggleList() {
      if(!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      })
    },
    hideList() {
      this.fold = true;
    },
    pay() {
      if(this.totalPrice < this.minPrice) {
        return
      }
      console.log("pay");
    }
  },
  mounted() {
    this.$nextTick(() => {
      let temp = document.getElementsByClassName("shop")[0].offsetHeight;
      this.$refs.listMask.style.height = temp+'px';
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
.list-mask{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1; 
  background: rgba(7, 17, 27, 0.6);
  &.fade-enter-active,&.fade-leave-active{
    transition: opacity .3s;
  }
  &.fade-enter,&.fade-leave-to{
    opacity: 0;
  }
}
.shop-cart{
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 10rem;
  .height(96);
  background: #141d27;
  .content{
    display: flex;
    background: #141d27;
    .fs(0);
    .content-left{
      flex:1;
      .logo-wrapper{
        display: inline-block;
        position: relative;
        top: -10/75*1rem;
        .mg(0, 24, 0, 24);
        .pd(12, 12, 12, 12);
        .width(112);
        .height(112); 
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;
        .logo{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #2b343c;
          text-align: center;
          &.highlight{
            background: rgb(0, 160, 220);
          }
          .icon-shopping_cart{
            .fs(48);
            color: #80858a;
            .lh(88);
            &.highlight{
              color: #fff;
            }
          }
        }
        .num{
          position: absolute;
          top: 0;
          right: 0;
          .width(48);
          .height(32);
          .lh(32);
          text-align: center;
          border-radius: 32/75*1rem;
          .fs(18);
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0, 4px, 8px, rgba(0, 0, 0, 0.4);
        }
      }
      .price{
        display: inline-block;
        vertical-align: top;
        .lh(48);
        .mt(24);
        box-sizing: border-box;
        .pr(24);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        .fs(32);
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
        &.highlight{
          color: #fff;
        }
      }
      .desc{
        display: inline-block;
        vertical-align: top;
        .ml(24);
        .mt(24);
        .lh(48);
        .fs(20);
        color: rgba(255, 255, 255, 0.4);
        
      }
    }
    .content-right{
      flex:0 0 210/75*1rem;
      .width(210);
      .pay{
        .height(96);
        .lh(96);
        text-align: center;
        .fs(24);
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        &.not-enough{
          background: #2b333b;
        }
        &.enough{
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }
  .ball-container{
    .ball{
      position: absolute;
      left: 64/75*1rem;
      bottom: 44/75*1rem;
      z-index: 200;
      &.drop-enter-active,&.drop-leave-active{
        transition: all .4s;
        .inner{
          .width(32);
          .height(32);
          border-right: 50%;
          background: rgb(0, 160, 220);
          transition: all .4s;
        }
      }
    }
  }
  .shopcart-list{
    position: absolute;
    left: 0;
    bottom:  70/75*1rem;
    z-index:-1;
    width: 100%;
    &.fold-enter-active,&.fold-leave-active{
      transition: all 0.5s;
      transform: translate3D(0, 0, 0);
    }
    &.fold-enter,&.fold-leave-to{
      transform: translate3D(0, 100%, 0);
    }
    .list-header{
      .height(80);
      .lh(80);
      .pd(0, 36, 0, 36);
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .title{
        float: left;
        .fs(28);
        color: rgb(7, 17, 27);
      }
      .empty{
        float: right;
        .fs(24);
        color: rgb(0, 160, 220);
      }
    }
    .list-content{
      .pd(0, 36, 0, 36);
      max-height: 217*2/75*1rem;
      background: #fff;
      overflow: hidden;
      .food{
        position: relative;
        .pd(24, 0, 24, 0);
        box-sizing: border-box;
        border-top: 1px solid rgba(7, 17, 27, 0.1);
        .name{
          .lh(48);
          .fs(28);
          color: rgb(7, 17, 27);
        }
        .price{
          position: absolute;
          right: 180/75*1rem;
          bottom:  24/75*1rem;
          .lh(48);
          .fs(28);
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper{
          position: absolute;
          right: 0;
          bottom: 12/75*1rem;
        }
      }
    }
  }
}
</style>
