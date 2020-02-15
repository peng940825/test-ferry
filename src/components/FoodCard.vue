<template>
  <div class="food-card">
    <el-row class="row" type="flex" justify="center">
      <el-col class="card" :xs="10" :sm="7" :md="5" :xl="4"
        v-for="(item, index) in foodList" :key="index">
        <el-image :src="item.imgUrl" style="width: 100%; height: 100%"></el-image>
        <!-- <div class="img" :style="{ backgroundImage: `url( ${item.imgUrl} )` }">
          <span>還有 {{ item.num }} 份</span>
        </div> -->
        <div class="content">
          <p class="price">${{ item.price }}</p>
          <p class="name">{{ item.name }}</p>
          <p class="desc">{{ item.desc }}</p>
          <el-button type="success" size="small">
            選購
            <i class="el-icon-shopping-cart-2 el-icon--right"></i>
          </el-button>
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
      return this.$store.state.foodList.find((item, index) => index === this.$store.state.currentSelectIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.food-card {
  @include size(100%, auto);
  margin-top: 2rem;
  margin-bottom: 3rem;
  // @include size(100%, calc(100vh - 28rem));

  .row {
    flex-wrap: wrap;

    .card {
      height: 100%;
      margin: 0 1rem 2rem 1rem;
      box-shadow: 0 0.25rem 0.125rem -0.125rem rgba(0, 0, 0, 0.25),
        0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.15), 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.15);

      .img {
        max-height: 20rem;
        min-height: 10rem;
        background-size: cover;
        background-position: center;
        position: relative;

        span {
          @include absolute(1rem, 1rem);
          color: #fff;
          font-size: 1.5rem;
          filter: drop-shadow(darkgreen 2px 2px 1px);
        }
      }

      .content {
        padding: 1rem;

        .price {
          color: #9e9e9e;
          font-size: 1.5rem;
        }

        .name {
          font-weight: bold;
          font-size: 1.75rem;
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .desc {
          margin-bottom: 1rem;
        }

        .el-button {
          width: 100%;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
