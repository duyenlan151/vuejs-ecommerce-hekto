import { homePath } from "../paths";

export const login = {
  path: "/login",
  name: "login",
  component: () =>
    import(/* webpackChunkName: "login" */ "@/views/Login/Login.vue"),
};
