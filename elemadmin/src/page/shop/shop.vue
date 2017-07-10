<template>
  <div class="shop">
    <shop-header></shop-header>
    <div class="tab">
      <div class="tab-item">
        <span>商品</span>
      </div>
      <div class="tab-item">
        <span>评论</span>
      </div>
      <div class="tab-item">
        <span>商家</span>
      </div>
    </div>
  </div>
</template>

<script>
import shopHeader from './shopHeader'
export default {
  name: 'shop',
  data() {
    return {
    }
  },
  methods: {
    
  },
  components:{
    shopHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/config.less';
.shop{
  .tab{
    display: flex;
    width: 100%;
    .height(80);
    .lh(80);
    .tab-item{
      flex:1;
      text-align: center;
    }
  }
}
</style>
