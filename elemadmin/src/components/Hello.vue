<template>
  <div class="hello">
    <p>从后台获取数据</p>
    <span class="icon-add_circle"></span>
  </div>
</template>

<script>
import extend from '../mixins/extend';
import {getTest} from '../api/api'

export default {
  name: 'hello',
  mixins: [
    extend
  ],
  data() {
    return {

    }
  },
  methods: {
    
  },
  async created() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../common/less/common.less';
</style>
