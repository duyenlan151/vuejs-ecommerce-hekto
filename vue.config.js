module.exports = {
  publicPath: "/",
  // devServer: {
  //   proxy: {
  //     "^/users": {
  //       target: "https://ecommerce-hekto-dl.vercel.app/api/",
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  devServer: {
    proxy: "https://ecommerce-hekto-dl.vercel.app/api/admin/products",
  },
  chainWebpack: (config) => {
    config.module.rule("images").set("parser", {
      dataUrlCondition: {
        maxSize: 4 * 1024, // 4KiB
      },
    });
  },
};
