// path: src/router/routes.ts
import { RouteRecordRaw } from "vue-router";
import { homePath, productsPath, loginPath } from "./paths";
import { home, products } from "./routers";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home/Home.vue"),
    meta: {
      layout: "LayoutMain",
    },
  },
  {
    path: "/products",
    name: "products",
    component: async () =>
      await import(
        /* webpackChunkName: "products" */ "@/views/Products/Products.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: async () =>
      await import(
        /* webpackChunkName: "products" */ "@/views/Login/Login.vue"
      ),
  },
];

export default routes;
