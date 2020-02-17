<template>
  <div id="app">
    <header>
      <div class="banner">
        <p>Great Dinner Everyday</p>
        <div class="shopping-cart-icon" @click="toCartPage">
          <el-badge type="success" :value="cartNum">
            <i class="el-icon-shopping-cart-2"></i>
          </el-badge>
        </div>
      </div>

      <div class="menu-bar">
        <div class="title" v-for="(item, index) in tabList" :key="index" @click="switchTab(index)">
          {{ item }}
        </div>
      </div>
    </header>

    <main>
      <router-view/>
    </main>

    <footer>
      <span>© 2020 一 Jun</span>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    tabList() {
      return this.$store.state.tabList;
    },
    cartNum() {
      return this.$store.state.cartNum;
    },
  },
  methods: {
    switchTab(index) {
      this.$store.commit('SWITCH_TAB', index);
    },
    toCartPage() {
      this.$router.push('/cart');
    },
  },
  mounted() {
    this.$store.commit('CREATE_CART_DATA');
  },
};
</script>

<style lang="scss">
@import '@/scss/components/_app.scss';
</style>
