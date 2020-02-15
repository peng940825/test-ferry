<template>
  <div id="app">
    <header>
      <div class="banner">
        <p>Great Dinner Everyday</p>
        <div class="shopping-cart-icon">
          <el-badge type="success" :value="1">
            <i class="el-icon-shopping-cart-2"></i>
          </el-badge>
        </div>
      </div>

      <div class="menu-bar">
        <div class="title" v-for="(item, index) in titleList" :key="index" @click="s(index)">
          {{ item }}
        </div>
      </div>
    </header>

    <main>
      <FoodCard />
    </main>

    <footer>
      <span>© 2020 一 Jun</span>
    </footer>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import FoodCard from '@/components/FoodCard.vue';

export default {
  components: {
    FoodCard,
  },
  computed: {
    titleList() {
      return this.$store.state.titleList;
    },
  },
  methods: {
    s(index) {
      this.$store.dispatch('switchTitle', index);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .banner {
    @include size(100%, 20rem);
    @include flex-align-justify(flex-end, center);
    @include img('./assets/images/banner.jpg', cover, center);
    position: relative;

    p {
      color: #fff;
      font-size: 3rem;
      margin-bottom: 3rem;
      filter: drop-shadow(darkgreen 2px 2px 1px);
    }

    .shopping-cart-icon {
      @include size(4.375rem, 4.375rem);
      @include flex-align-justify(center, center);
      position: absolute;
      top: 0;
      right: 0;
      background-color: #212121;
      margin-right: 1rem;

      i {
        cursor: pointer;
        color: #fff;
        font-size: 1.75rem;
      }
    }
  }

  .menu-bar {
    @include size(100%, 3rem);
    display: flex;
    background-color: #000;

    .title {
      @include size((100% / 3), 100%);
      @include flex-align-justify(center, center);
      cursor: pointer;
      color: #fff;
      font-size: 1.25rem;
    }
  }

  footer {
    @include size(100%, 3rem);
    @include flex-align-justify(center, center);
    color: #fff;
    background: #212121;
    position: fixed;
    bottom: 0;
  }
}


// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
