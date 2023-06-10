// path: src/router/routes.ts
import { RouteRecordRaw } from "vue-router";
import { home, products, login, blog, contact } from "./routers";

const routes: Array<RouteRecordRaw> = [home, products, login, blog, contact];

export default routes;
