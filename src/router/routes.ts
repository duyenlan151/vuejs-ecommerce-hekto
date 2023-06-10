// path: src/router/routes.ts
import { RouteRecordRaw } from "vue-router";
import { home, products } from "./routers";

const routes: Array<RouteRecordRaw> = [{ ...home }, { ...products }];

export default routes;
