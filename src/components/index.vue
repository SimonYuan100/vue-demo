<template>
  <div class="info">
    <img src="../assets/logo.png" alt="">
    <p>首页</p>
    <router-link :to="{ path: '/test/hello'}">hello页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      title: '信息填写页面',
      submit: 'submit',
      isShow: true,
      userName: ''
    };
  },
  created: function () {
  //   var state = { 'page_id': 1, 'user_id': 5 };
  //   window.history.pushState(state, '首页', '/test/hello');
    // location.reload();
    console.group('created 创建完毕状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);// undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);// 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message);// 已被初始化
  },
  methods: {
    going () {
      let param = {name: this.userName};
      this.$http.get('/someAddress', {params: param}).then(response => {
        console.log(response.data); // 成功调取的数据
      },
        response => {
          console.log('调取接口失败');
        });
      // this.$http.post('/someAddress', param).then(response => {}, response => {})
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
.isShow{
  display: block
}
</style>
