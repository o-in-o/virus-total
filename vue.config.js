const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        http: false,
        https: false,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
      @import "@/style/_variables.scss";
      `,
      },
    },
  },
});
