<template>
  <div class="shop-rating">
    <div class="rating-content">
      <div class="overview">
        <div class="overleft">
          <h1 class="score">3.9</h1>
          <div class="title">综合评价</div>
          <div class="rank">高于周边商家69.2%</div>
        </div>
        <div class="overright"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'shopRating',
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
      }
    }
  }
}
</style>
