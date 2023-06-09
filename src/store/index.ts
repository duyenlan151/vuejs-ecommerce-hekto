import { createStore } from "vuex";
import products from "./modules/products";
import categories from "./modules/categories";

// const debug = process.env.NODE_ENV !== "production";

const modules = {
  products,
  categories,
};

Object.keys(modules).forEach((module) => {
  modules[module].namespaced = true;
});

const store = createStore({
  modules,
});

export default store;
