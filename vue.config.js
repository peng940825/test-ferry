module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test/dist'
    : '/',
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
