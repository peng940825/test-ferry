/* eslint-disable camelcase */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const b_img_1 = require('../assets/images/best/img_1.jpg');
const b_img_2 = require('../assets/images/best/img_2.jpg');
const b_img_3 = require('../assets/images/best/img_3.jpg');
const b_img_4 = require('../assets/images/best/img_4.jpg');

const o_img_1 = require('../assets/images/onSale/img_1.jpg');
const o_img_2 = require('../assets/images/onSale/img_2.jpg');
const o_img_3 = require('../assets/images/onSale/img_3.jpg');

const r_img_1 = require('../assets/images/recommend/img_1.jpg');
const r_img_2 = require('../assets/images/recommend/img_2.jpg');

export default new Vuex.Store({
  state: {
    currentSelectIndex: 1,
    titleList: ['每日精選', '廚師推薦', '特價推廣'],
    foodList: [
      [
        {
          num: 5,
          price: 43,
          name: '泰式豬扒煲',
          desc: '巴西豬扒配泰式香料',
          imgUrl: b_img_3,
        },
        {
          num: 6,
          price: 35,
          name: '一口和牛',
          desc: '肉質鮮嫩，入口即溶。',
          imgUrl: b_img_1,
        },
        {
          num: 7,
          price: 28,
          name: '惹味煎蛋餅',
          desc: '咬落爽脆，充滿蛋香。',
          imgUrl: b_img_4,
        },
        {
          num: 7,
          price: 33,
          name: '日式便當',
          desc: '和式風味，簡單精緻。',
          imgUrl: b_img_2,
        },
      ],
      [
        {
          num: 8,
          price: 45,
          name: '純素沙律',
          desc: '素食人士必選。',
          imgUrl: r_img_1,
        },
        {
          num: 9,
          price: 38,
          name: '辣炒翠肉瓜',
          desc: '邊辣邊爽。',
          imgUrl: r_img_2,
        },
      ],
      [
        {
          num: 10,
          price: 50,
          name: '出爐麵包',
          desc: '每日限量。',
          imgUrl: o_img_1,
        },
        {
          num: 20,
          price: 48,
          name: '米紙壽司捲',
          desc: '別有一番風味。',
          imgUrl: o_img_2,
        },
        {
          num: 30,
          price: 52,
          name: '港式漢堡包',
          desc: '茶記味道，不輸老麥。',
          imgUrl: o_img_3,
        },
      ],
    ],
  },
  mutations: {
    SWITCH_TITLE(state, payload) {
      state.currentSelectIndex = payload;
    },
  },
  actions: {
    switchTitle(context, payload) {
      context.commit('SWITCH_TITLE', payload);
    },
  },
  modules: {},
});
