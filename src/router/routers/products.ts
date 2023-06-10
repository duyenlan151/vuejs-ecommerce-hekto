import pageMeta, { convertMetaData } from "@/content/meta";
import { productsPath } from "../paths";

export const products = {
  path: productsPath,
  name: "products",
  component: () =>
    import(/* webpackChunkName: "products" */ "@/views/Products/Products.vue"),
  meta: {
    layout: "LayoutMain",
    ...pageMeta.products,

    metaTags: convertMetaData(pageMeta.products),
  },
};
