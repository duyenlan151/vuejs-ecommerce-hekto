import Vue from "vue";
import { createApp } from "vue";
import "./styles/style.css";
import "nprogress/nprogress.css";

import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import { clickOutside } from "./directives/ClickoutSide";

import { createMetaManager, plugin as metaPlugin } from "vue-meta";

const metaManager = createMetaManager();

const app = createApp(App);

app.use(router);

app.use(metaManager);
app.use(metaPlugin); // optional, only needed for OptionsAPI (see below)

app.use(store);

app.directive("click-outside", clickOutside);

app.mount("#app");
