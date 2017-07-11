<template>
  <div class="modal-container">
    <div class="modal-wrapper">
      <div class="bulletin-content">
        <h2 class="name">上品烧烤</h2>
        <div class="rating-star">
          <star :score="3.5"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul>
          <li v-for="item in supportType">
            <span :class="['icon',item.type]"></span>
            <span class="text">{{item.text}}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p>清真餐厅，24小时营业！</p>
        </div>
      </div>
    </div>
    <div class="bulletin-close" @click="toggleModal">
      <span class="icon-close"></span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import star from '../../components/common/star'
export default {
  name: 'modalContainer',
  components:{
    star
  },
  data() {
    return {

    }
  },
  computed:{
    supportType(){
      return [
        {type : "decrease", text : "在线支付满28减5，满50减10"}, 
        {type : "discount", text : "VC无限橙果汁全场8折"}, 
        {type : "guarantee", text : "单人精彩套餐"}, 
        {type : "invoice", text : "该商家支持发票，请下单写好发票抬头"}, 
        {type : "special", text : "已加入“外卖保”计划，食品安全保障"}
      ]
    }
  },
  methods: {
    ...mapMutations([
      'TOGGLE_MODAL'
    ]),
    toggleModal(){
      this.TOGGLE_MODAL();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
.modal-container{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 10rem;
  height: 100%;
  overflow: auto;
  background: rgba(7, 17, 27, 0.8);
  backdrop-filter: blur(10px);
  .modal-wrapper{
    min-height: 90%;
    .clearfix;
    .bulletin-content{
      .mt(128);
      .pb(128);
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      color: #fff;
      .name{
        .lh(32);
        text-align: center;
            font-size: 1.5em;
        font-weight: 700;
      }
      .rating-star{
        .mt(14);
        .pd(2,0,2,0);
        text-align: center;
      }
      .title{
        display: flex;
        width: 90%;
        margin: 0 auto;
        .mt(56);
       
        .line{
          flex:1;
          position: relative;
          top: -12/75*1rem;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .text{
          .pd(0,24,0,24);
          .fs(28);
          font-weight: 700;
        }
      }
      ul{
        width: 80%;
        margin: 0 auto;
        .mt(48);
        li{
          .pd(0, 24, 0, 24);
          .mb(24);
          .fs(0);
          display: flex;
          align-items:center;
          &:last-child{
            margin-bottom: 0;
          }
          .icon{
            display: inline-block;
            .width(24);
            .height(24);
            .mr(12);
          }
          .text{
            .lh(32);
            .fs(24);
          }
        }
      }
      .bulletin{
        width: 80%;
        margin: 0 auto;
        .mt(48);
        p{
          .pd(0, 24, 0, 24);
          .lh(48);
          .fs(24);
        }
      }
    }
  }
  .bulletin-close{
    position: relative;
    margin: -128/75*1rem auto;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid #888;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items:center;
    clear: both;
    .icon-close{
      color: #fff;
      .fs(32);
    }
  }
}
</style>
