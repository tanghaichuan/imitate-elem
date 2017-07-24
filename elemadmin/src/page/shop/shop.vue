<template>
  <div class="shop">
    <shop-header></shop-header>
    <div class="tab">
      <div class="tab-item" @click="changeShowType='food'">
        <span :class="{activity_show:changeShowType==='food'}">商品</span>
      </div>
      <div class="tab-item" @click="changeShowType='rating'">
        <span :class="{activity_show:changeShowType==='rating'}">评论</span>
      </div>
    </div>
    <menu-view v-show="changeShowType==='food'"></menu-view>
    <shop-rating v-show="changeShowType==='rating'"></shop-rating>
    <modal-container v-show="showModal"></modal-container>
    <shop-details v-if="toggleShopDetails"></shop-details>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import shopHeader from './shopHeader'
import menuView from './menuView'
import shopRating from './shopRating'
import modalContainer from './modalContainer'
import shopDetails from './shopDetails'
export default {
  name: 'shop',
  components:{
    shopHeader,
    menuView,
    shopRating,
    modalContainer,
    shopDetails
  },
  data() {
    return {
      changeShowType:"food"
    }
  },
  computed:{
    ...mapState([
      'showModal',
      'toggleShopDetails'
    ])
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/config.less';
.shop{
  height: 100%;
  .tab{
    display: flex;
    width: 100%;
    .height(80);
    .lh(80);
    .tab-item{
      flex:1;
      text-align: center;
      font-size: .373333rem;
      color: #666;
      .activity_show{
        color: #3190e8;
        position: relative;
        &:after{
          content: "";
          position: absolute;
          bottom: -.16rem;
          left: -.066667rem;
          right: -.066667rem;
          height: .053333rem;
          background-color: #3190e8;
          border-radius: .04rem;
        }
      }
    }
  }
}
</style>
