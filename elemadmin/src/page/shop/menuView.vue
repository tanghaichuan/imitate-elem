<template>
  <div class="menue-view">
    <div class="menu-category" ref="category">
      <ul>
        <li v-for="(item,index) in goods" :class="['menu-item',{'current':currentIndex === index}]" @click="selectMenu(index,$event)">
          <span class="text">
            <span v-show="item.type > 0" :class="['icon','special']"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="menu-content" ref="content">
      <ul>
        <li v-for="item in goods" class="content-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="thumb">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-wrapper">
                  <cart-control :food="food"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart :select-foods="selectFoods"></shop-cart>
  </div>
</template>

<script>
import {goods} from './data'
import BSroll from 'better-scroll'
import shopCart from './shopCart'
import cartControl from './cartControl'
export default {
  name: 'menueView',
  components: {
    shopCart,
    cartControl
  },
  data() {
    return {
      goods: goods,
      listHeight: [],
      scrollY: 0
    }
  },
  computed:{
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach( good => {
        good.foods.forEach( food => {
          if(food.count) {
            foods.push(food);
          }
        });
      });
      return foods; 
    }
  },
  methods: {
    _initScroll() {
      let category = this.$refs.category;
      let content = this.$refs.content;
      this.categoryScroll = new BSroll(category, {
        click: true
      });
      this.contentScroll = new BSroll(content, {
        probeType: 3,
        click: true,
        bounce: false
      });
      this.contentScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      })
    },
    _calculateHeight() {
      let contentList = this.$refs.content.getElementsByClassName("content-list-hook"); 
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < contentList.length; i++) {
        let item = contentList[i];
        height += item.clientHeight;
        this.listHeight.push(height);

      }
    },
    selectMenu(index,event) {
      if(event._constructed){
        return;
      }
      let contentList = this.$refs.content.getElementsByClassName("content-list-hook");
      let el = contentList[index];
      this.contentScroll.scrollToElement(el, 100);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._calculateHeight();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
.menue-view{
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .menu-category{
    flex: 0 0 160/75*1rem;
    .width(160);
    background: #f8f8f8;
    height: 67%;
    .menu-item{
      .pd(0, 24, 0, 24);
      display: table;
      .height(108);
      .width(112);
      .lh(28);
      border-bottom: 1px solid rgba(7,17,27,0.1);
      &.current{
        position: relative;
        .mt(-1);
        z-index: 10;
        background: #fff;
        font-weight: 700;
        .text{
          border: 0;
        }
      }
      .icon{
        margin: 0;
        .height(24);
        width: .346667rem;
      }
      .text{
        display: table-cell;
        .width(112);
        vertical-align: middle;
        .lh(26);
        font-size: .346667rem;
        color: #666;
      }
    }
  }
  .menu-content{
    flex:1;
    height: 67%;
    .title{
      .pl(28);
      .height(52);
      .lh(52);
      border-left: 2px solid #d9dde1;
      .fs(24);
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item{
      display: flex;
      .mg(36,36,36,36);
      .pb(36);
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      &:last-child{
        border: 0;
        margin-bottom: 0;
        
      }
      .thumb{
        flex: 0 0 114/75*1rem;
        .mr(10);
        img{
          .width(104);
          .height(104);
        }
      }
      .content{
        flex:1;
        position: relative;
        .name{
          .mg(4, 0, 16, 0);
          .height(28);
          .lh(28);
          .fs(28);
          color:rgb(7, 17, 27);
        }
        .desc,.extra{
          .lh(20);
          .fs(20);
          color: rgb(147, 153, 159);
        }
        .desc{
          .mb(16);
          .lh(24);
        }
        .extra{
          .count{
            .mr(24);
          }
        }
        .price{
          font-weight: 700;
          .lh(48);
          .now{
            .mr(16);
            .fs(28);
            color: rgb(240, 20, 20);
          }
          .old{
            text-decoration: line-through;
            .fs(20);
            color: rgb(147, 153, 159);
          }
        }
        .cart-wrapper{
          position: absolute;
          right: 0;
          bottom: 24/75*1rem;
        }
      }
    }
  }
}
</style>
