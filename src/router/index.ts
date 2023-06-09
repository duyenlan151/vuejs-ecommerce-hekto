import { createRouter, createWebHistory } from "vue-router";
import { home, login } from "./routers";
import NProgress from "@/utils/nprogress";

NProgress.configure({
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

const routes = [
  home,
  login,
  {
    path: "/products",
    // component: Home,
    component: () =>
      import(
        /* webpackChunkName: "thankyou" */ "@/views/Products/Products.vue"
      ),
  },
  // {
  //     path: '/about',
  //     component: About
  // },
  // {
  //     path: '/contact',
  //     component: Contact
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  // if (to.name) {
  // Start the route progress bar.
  NProgress.setColor("#fb2e86");
  NProgress.start();
  // }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
