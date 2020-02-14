<template>
  <div class="food-card">
    <el-row type="flex" justify="center">
      <el-col class="card" :span="4">
        <div class="img">
          <span>還有 5 份</span>
        </div>
        <div class="content">
          <p class="price">$43</p>
          <p class="name">一口和牛</p>
          <p class="description">肉質鮮嫩，入口即溶</p>
          <el-button type="success" size="small">選購</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.food-card {
  @include size(100%, calc(100vh - 28rem));

  .card {
    margin: 0 1rem;
    box-shadow: 0 0.25rem 0.125rem -0.125rem rgba(0, 0, 0, 0.25),
      0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.15), 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.15);

    .img {
      @include size(100%, 23rem);
      @include img('../assets/images/best/img-1.jpg', cover, center);
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

      .description {
        margin-bottom: 1rem;
      }

      .el-button {
        width: 100%;
        font-size: 1rem;
      }
    }
  }
}
</style>
