<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo highlight">
            <span class="icon-shopping_cart highlight"></span>
          </div>
          <div class="num">1</div>
        </div>
        <div class="price">￥0</div>
        <div class="desc">另需配送费￥4元</div>
      </div>
      <div class="content-right">
        <div class="pay not-enough">
          ￥20起送
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'shopCart',
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
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
}
</style>
