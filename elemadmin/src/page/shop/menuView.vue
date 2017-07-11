<template>
  <div class="menue-view">
    <div class="menu-category">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text">
            <span v-show="item.type>0" :class="['icon','special']"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="menu-content"></div>
  </div>
</template>

<script>
import {goods} from './data'
export default {
  name: 'menueView',
  components: {

  },
  data() {
    return {
      goods:goods
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../common/less/common.less';
.menue-view{
  display: flex;
  position: absolute;
  top: 362.45/75*1rem;
  width: 100%;
  bottom: 92/75*1rem;
  overflow: hidden;
  .menu-category{
    flex: 0 0 160/75*1rem;
    .width(160);
    background: #f8f8f8;
    ul{
      .pd(0, 24, 0, 24);
    }
    .menu-item{
      display: table;
      .height(108);
      .width(112);
      .lh(28);
      border-bottom: 1px solid rgba(7,17,27,0.1);
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

  }
}
</style>
