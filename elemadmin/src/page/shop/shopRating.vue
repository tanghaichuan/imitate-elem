<template>
  <div class="shop-rating">
    <div class="rating-content">
      <div class="overview">
        <div class="overleft">
          <h1 class="score">3.9</h1>
          <div class="title">综合评价</div>
          <div class="rank">高于周边商家69.2%</div>
        </div>
        <div class="overright">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :score="4.1"></star>
            <span class="score">3.6</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :score="4.1"></star>
            <span class="score">3.6</span>
          </div>
          <div class="delivery-wrapper">
            <div class="title">送达时间</div>
            <div class="time">44分钟</div>
          </div>
        </div>
      </div>
      <feedback></feedback>
      <rating-list></rating-list>
    </div>
  </div>
</template>

<script>
import star from '../../components/common/star'
import feedback from './feedback'
import ratingList from './ratingList'
export default {
  name: 'shopRating',
  data() {
    return {

    }
  },
  components: {
    star,
    feedback,
    ratingList
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
.shop-rating{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .rating-content{
    .overview{
      display: flex;
      .pt(36);
      .pb(36);
      .overleft{
        .pb(12);
        .pt(12);
        flex: 0 0 137*2/75*1rem;
        .width(137*2);
        border-right: 1px solid rgba(7, 17, 27, 0.1);
        text-align: center;
        line-height: 1.5;
        .score{
          font-size: .8rem;
          line-height: 1;
          font-weight: 400;
          color: #f60;
          display: block;
        }
        .title{
          line-height: 1.5;
          font-size: .36rem;
          color: #666;
        }
        .rank{
          font-size: .266667rem;
          color: #999;
          font-weight: 400;
        }
      }
      .overright{
        flex: 1;
        .pl(48);
        .score-wrapper{
          .lh(30);
          .fs(0);
          display: flex;
          align-items: center;
          .title{
            display: inline-block;
            .fs(24);
            color: rgb(7, 17, 27);
          }
          .star{
            display: inline-block;
            .ml(24);
            .mr(24);
          }
          .score{
            display: inline-block;
            .fs(30);
            .pb(10);
            color: rgb(255, 153, 0);
          }
        }
        .delivery-wrapper{
          .pt(4);
          .title{
            display: inline-block;
            .fs(24);
            color: rgb(7, 17, 27);
            .lh(36);
            .mr(20);
          }
          .time{
            display: inline-block;
            .fs(28);
            color: rgb(147, 153, 159);
            .lh(36);
          }
        }
      }
    }
  }
}
</style>
