import { productsPath } from "../paths";

export const home = {
  path: productsPath,
  name: "products",
  component: () =>
    import(/* webpackChunkName: "thankyou" */ "@/views/Products/Products.vue"),
};
