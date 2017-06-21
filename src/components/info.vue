<template>
  <div class="info">
    <img src="../assets/logo.png" alt="">
    <h3 v-text="title"></h3>
    <input type="text" placeholder="请输入姓名">
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      title: '信息填写页面'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
