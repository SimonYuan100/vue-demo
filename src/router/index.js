import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import info from '@/components/info';
import payment from '@/components/payment';
import dom from '@/components/dom';
import index from '@/components/index';
// var evn = 'test';
var evn = 'testLoacl';
var preFixed = '';

if (evn === 'test') preFixed = '/test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: preFixed + '/',
      name: 'index',
      component: index
    },
    {
      path: preFixed + '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: preFixed + '/info',
      name: 'info',
      component: info
    },
    {
      path: preFixed + '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: preFixed + '/dom',
      name: 'dom',
      component: dom
    }
  ]
});
