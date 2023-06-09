// path: src/router/routes.ts

import { RouteRecordRaw } from "vue-router";

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
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Products/Products.vue"),
    meta: {
      layout: "LayoutMain",
    },
  },
  // {
  //   path: "/blog",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/Products/Products.vue"),
  //   meta: {
  //     layout: "LayoutMain",
  //   },
  // },
  // {
  //   path: "/contact",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/Products/Products.vue"),
  //   meta: {
  //     layout: "LayoutMain",
  //   },
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/Products/Products.vue"),
  //   meta: {
  //     layout: "LayoutMain",
  //   },
  // },

  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () =>
  //     import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
  //   meta: {
  //     layout: 'Dashboard',
  //   },
  // },
];

export default routes;
