<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <p class="title">晚餐購物車</p>
        <el-table :data="cartList" style="width: 100%">
          <el-table-column prop="name" label="晚餐" min-width="125"></el-table-column>
          <el-table-column prop="price" label="單價" min-width="50"></el-table-column>
          <el-table-column prop="num" label="數量" min-width="50"></el-table-column>
          <el-table-column min-width="125">
            <template slot-scope="scope">
              <i class="el-icon-circle-plus" @click="plus(scope.row)"></i>
              <i class="el-icon-remove" @click="less(scope.row)"></i>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="小結" min-width="50"></el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <button class="delete" @click="remove(scope.row)">
                <img src="../assets/icons/delete.png" alt="">
              </button>
            </template>
          </el-table-column>
        </el-table>
        <p class="amount">總金額：{{ amount }}</p>
        <div class="btn-confirm" :class="{ active: !confirmStatus, disabled: confirmStatus }"
          @click="toDeliveryPage"
        >
          <i class="el-icon-tableware"></i>
          <p>確定</p>
          <i class="el-icon-fork-spoon"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    cartList() {
      return this.$store.state.cart.filter((item) => item.num > 0);
    },
    amount() {
      return this.cartList.reduce((acc, cur) => acc + cur.total, 0);
    },
    foodList() {
      return this.$store.state.foodList;
    },
    cartNum() {
      return this.$store.state.cartNum;
    },
    confirmStatus() {
      return this.cartNum === 0;
    },
  },
  methods: {
    plus(row) {
      const o = row;
      const target = this.foodList.flat().find((item) => item.name === o.name);
      if (target.num === 0) {
        alert('被您買光囉');
      } else {
        o.num += 1;
        o.total = o.price * o.num;
        target.num -= 1;
        this.$store.commit('AMEND_CART_NUM', 'plus');
      }
    },
    less(row) {
      const o = row;
      const target = this.foodList.flat().find((item) => item.name === o.name);
      o.num -= 1;
      o.total = o.price * o.num;
      target.num += 1;
      this.$store.commit('AMEND_CART_NUM', 'less');
    },
    remove(row) {
      const o = row;
      this.$store.commit('AMEND_CART_NUM', { status: 'remove', num: o.num });
      o.num = 0;
      o.total = o.price * o.num;
    },
    toDeliveryPage() {
      this.$router.push('/delivery').catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/_cart.scss';
</style>
