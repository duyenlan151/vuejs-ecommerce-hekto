import NProgress from "@/utils/nprogress";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

NProgress.configure({
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

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
