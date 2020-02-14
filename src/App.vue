<template>
  <div id="app">
    <header>
      <div class="banner">
        <p>Great Dinner Everyday</p>
      </div>

      <div class="menu-bar">
        <div class="title" v-for="(item, index) in titleList" :key="index">{{ item }}</div>
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
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .banner {
    @include size(100%, 20rem);
    @include flex-align-justify(flex-end, center);
    @include img('./assets/images/banner.jpg', cover, center);

    p {
      color: #fff;
      font-size: 3rem;
      margin-bottom: 3rem;
      filter: drop-shadow(darkgreen 2px 2px 1px);
    }
  }

  .menu-bar {
    @include size(100%, 3rem);
    display: flex;
    margin-bottom: 2rem;
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
