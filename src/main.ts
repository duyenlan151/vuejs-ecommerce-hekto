import { createApp } from "vue";
import "./styles/style.css";
import "nprogress/nprogress.css";

import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import { clickOutside } from "./directives/ClickoutSide";

const app = createApp(App);
app
  .use(store)
  .directive("click-outside", clickOutside)
  .use(router)
  .mount("#app");
