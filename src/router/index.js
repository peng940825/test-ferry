import Vue from 'vue';
import VueRouter from 'vue-router';

import Dinner from '../components/Dinner.vue';
import Cart from '../components/Cart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/dinner',
    name: 'Dinner',
    component: Dinner,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
