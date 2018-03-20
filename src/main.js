import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueFire from 'vuefire';

import './firebase';

import {
  store
} from './store/store'

import {
  routes
} from './routes'

Vue.use(VueRouter);
Vue.use(VueFire);

export const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
