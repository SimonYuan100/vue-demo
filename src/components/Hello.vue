<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="">
    <h1>{{ msg }}</h1>
    <h2>Vue-demo</h2>
  	<router-link :to="{ path: '/info', query: { openid: openid}}">信息填写页面</router-link>
    <a @click="goInfo()">支付页面</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      openid: '666666666',
      orderid: '88888888'
    };
  },
  methods: {
    goInfo () {
      this.$router.push({
        path: '/payment',
        query: {orderid: this.orderid}
      });
    }
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
