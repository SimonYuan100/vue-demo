import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import info from '@/components/info';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
});
