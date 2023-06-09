import { loginPath } from "../paths";

export const login = {
  path: loginPath,
  name: "login",
  component: () =>
    import(/* webpackChunkName: "login" */ "@/views/Login/Login.vue"),
};
