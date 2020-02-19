<template>
  <div class="food-card">
    <el-row class="row" type="flex" justify="center">
      <el-col class="card" :xs="10" :sm="8" :md="5" :xl="4"
        v-for="(item, index) in foodList" :key="index"
      >
        <el-image :src="item.imgUrl" style="width: 100%; height: 100%"></el-image>

        <div class="sentiment" v-if="item.num === 0">
          <img src="../assets/icons/sentiment.png" alt="">
          <p>沒有囉</p>
        </div>

        <div class="priority" v-else-if="item.num < 3 && item.num > 0">
          <img src="../assets/icons/priority.png" alt="">
          <p>剩下 {{ item.num }} 份</p>
        </div>

        <p class="enough" v-else>還有 {{ item.num }} 份</p>


        <div class="content">
          <p class="price">${{ item.price }}</p>
          <p class="name">{{ item.name }}</p>
          <p class="desc">{{ item.desc }}</p>
          <div class="btn-buy" @click="buy(item, index)" v-if="item.num > 0">
            <p>買</p>
            <i class="el-icon-shopping-cart-2"></i>
          </div>
          <div class="btn-buy disabled" v-else>
            <p>買</p>
            <i class="el-icon-shopping-cart-2"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    foodList() {
      // eslint-disable-next-line max-len
      return this.$store.state.foodList.find((item, index) => index === this.$store.state.currentTab);
    },
  },
  methods: {
    buy(item, index) {
      this.$store.commit('ADD_TO_CART', { item, index });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/_dinner.scss';
</style>
