import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Item from './assets/components/item/index.vue';
import Todo from './assets/components/todo/index.vue';


const routes = [
  {path: '/', component: Item},
  { name: 'view', 
    path: '/view/:title', 
    component: Todo}  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

