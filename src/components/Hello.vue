<template>
  <div class='hello'>
    <img src='../assets/logo.png' alt=''>
    <h1>{{ msg }}</h1>
    <h2>Vue-demo</h2>
    <router-link :to="{ path: '/info', query: { openid: openid}}">信息填写页面</router-link>
  	<router-link :to="{ path: '/dom', query: { openid: openid}}">dom页面</router-link>
    <a @click='goInfo()'>支付页面</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'hahahahaha',
      openid: '666666666',
      orderid: '88888888'
    };
  },
  beforeCreate: function () {
    console.group('beforeCreate 创建前状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);// undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);// undefined
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  created: function () {
    console.group('created 创建完毕状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);// undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);// 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message);// 已被初始化
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + (this.$el));// 已被初始化
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);// 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message);// 已被初始化
  },
  mounted: function () {
    console.group('mounted 挂载结束状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);// 已被初始化
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);// 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message);// 已被初始化
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  updated: function () {
    console.group('updated 更新完成状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
