<template>
  <div>This is cart page.</div>
</template>

<script>
export default {
  computed: {
    cartList() {
      return this.$store.state.cart.filter((item) => item.num > 0);
    },
  },
};
</script>
