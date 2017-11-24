// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import vueENV from './envconfig';
import store from './store';

Vue.config.productionTip = false;

// 生产，测试环境的标示，策略是尽可能的降低 切换环境的变量，降低犯错的几率
Vue.prototype.VUEENV = vueENV;

// 应用VueResource
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
