<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <div class="line">
          <i class="el-icon-success"></i>
          <span>已成功落單喇，多謝幫襯！！</span>
        </div>
        <div class="line">
          <i class="el-icon-message"></i>
          <span>請確認電郵將送到以下地址：{{ form.email }}</span>
        </div>
        <div class="line">
          <i class="el-icon-warning"></i>
          <span>系統將於 {{ time }} 秒後回到主頁。</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 5,
      form: null,
    };
  },
  created() {
    this.form = this.$route.params;
  },
  mounted() {
    setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        this.$store.commit('RESET_CART');
        this.$router.push('/dinner').catch(() => {});
      }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
  @import '@/scss/components/_thx.scss';
</style>
