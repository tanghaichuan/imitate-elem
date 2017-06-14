<template>
  <div class="hello">
    <div v-for="(x,index) in list">
      <p :data="index">{{x}}</p>
    </div>
    <a href="javascript:void(0)" >加载更多</a>
  </div>
</template>

<script>
import extend from '../mixins/extend';

export default {
  name: 'hello',
  mixins: [
    extend
  ],
  data () {
    return {
      list:[
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  methods:{
    getDate(){
      let arr=[6,7,8]
      return arr;
    },
    getMore(){
      let newData=this.getDate();
      this.list.push(...newData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    margin: 10px;
    background-color: #ccc;
    font-size: 60px;
    color: #fff
  }
  a{
    font-size: 60px;
  }
</style>
