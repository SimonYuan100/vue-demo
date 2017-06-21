<template>
  <div class="info">
    <img src="../assets/logo.png" alt="">
    <h3 v-text="title"></h3>
    <input type="text" placeholder="请输入姓名" v-model="userName">
    <div :class="{isShow: isShow}" @click="going()">{{submit}}</div>
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
  created () {
    // doSomething
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
