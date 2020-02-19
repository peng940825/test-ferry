import Vue from 'vue';
import VueRouter from 'vue-router';

import Dinner from '../components/Dinner.vue';
import Cart from '../components/Cart.vue';
import Delivery from '../components/Delivery.vue';
import Thx from '../components/Thx.vue';

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
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery,
  },
  {
    path: '/thx',
    name: 'Thx',
    component: Thx,
  },
  {
    path: '*',
    redirect: '/dinner',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
