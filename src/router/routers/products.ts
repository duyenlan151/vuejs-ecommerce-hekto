import { productsPath } from "../paths";

export const products = {
  path: productsPath,
  name: "products",
  component: async () =>
    await import(
      /* webpackChunkName: "products" */ "@/views/Products/Products.vue"
    ),
};
