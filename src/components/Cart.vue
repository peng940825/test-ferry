<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
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
              <button class="delete" @click="remove(scope.row, scope.$index)">
                <img src="../assets/icons/delete.png" alt="">
              </button>
            </template>
          </el-table-column>
        </el-table>
        <p class="amount">總金額：{{ amount }}</p>
        <div class="btn-confirm">
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
    remove(row, index) {
      this.cartList.splice(index, 1);
      this.$store.commit('AMEND_CART_NUM', { status: 'remove', num: row.num });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  margin-top: 2rem;
  margin-bottom: 5rem;

  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .el-icon-circle-plus {
    cursor: pointer;
    font-size: 2rem;
    color: #4caf50;
    margin-right: 1rem;
  }

  .el-icon-remove {
    cursor: pointer;
    font-size: 2rem;
    color: #fb8c00;
  }

  .delete {
    cursor: pointer;
    padding: 4px;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: red;

    img {
      width: 24px;
      margin-bottom: -3px;
    }
  }

  .amount {
    text-align: end;
    margin-top: 0.5rem;
  }

  .btn-confirm {
    @include size(100%, 2.25rem);
    @include flex-align-justify(center, space-between);
    cursor: pointer;
    color: #fff;
    padding: 0 1rem;
    margin-top: 1rem;
    font-size: 1.25rem;
    box-shadow: $shadow;
    border-radius: 0.125rem;
    background-color: #4caf50;
  }
}
</style>
