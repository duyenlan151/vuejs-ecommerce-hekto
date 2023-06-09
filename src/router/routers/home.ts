import { homePath } from "../paths";

export const home = {
  path: homePath,
  name: "home",
  component: () =>
    import(/* webpackChunkName: "thankyou" */ "@/views/Home/Home.vue"),
};
