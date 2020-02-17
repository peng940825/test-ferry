module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variable.scss";
          @import "@/scss/_mixins.scss";
        `,
      },
    },
  },
};
