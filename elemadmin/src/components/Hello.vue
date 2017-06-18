<template>
  <div class="hello">
    <p>从后台获取数据</p>

  </div>
</template>

<script>
import extend from '../mixins/extend';

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
  created() {
    this.$http.get('/api/test')
        .then(res => {
          console.log(res.bodyText);
        },err => {
          console.log(err);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
