import { homePath } from "../paths";

export const login = {
  path: "/login",
  name: "login",
  component: () =>
    import(/* webpackChunkName: "thankyou" */ "@/views/Login/Login.vue"),
};
