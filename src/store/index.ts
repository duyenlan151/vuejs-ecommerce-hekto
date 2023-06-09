import { createStore } from "vuex";
import products from "./modules/products";

// const debug = process.env.NODE_ENV !== "production";

const modules = {
  products,
};

Object.keys(modules).forEach((module) => {
  modules[module].namespaced = true;
});

const store = createStore({
  modules,
});

export default store;
