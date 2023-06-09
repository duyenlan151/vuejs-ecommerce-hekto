import { DataProductModel } from "@/models/index";
import { productsService } from "@/services";
import { ACTIONS, MUTATIONS, STATE } from "./master";

interface ProductsProps {
  products: Partial<DataProductModel>;
  loading: boolean;
}

const state: ProductsProps = {
  products: {},
  loading: false,
};

const getters = {
  [STATE.getAllProducts]: ({ products }: ProductsProps) => {
    return products.data;
  },

  [STATE.getTotalDocs]: ({ products }: ProductsProps) => {
    return products.totalDocs;
  },
};

const mutations = {
  [MUTATIONS.setLoading]: (state, payload) => {
    state.loading = payload;
  },
  [MUTATIONS.setProducts]: (state, payload) => {
    state.products = payload;
  },
};

const actions = {
  [ACTIONS.getAllProducts]: async ({ commit }, payload) => {
    commit(MUTATIONS.setLoading, true);
    try {
      const result = await productsService.getAllProducts(payload);
      commit(MUTATIONS.setProducts, result);
    } catch (error) {
    } finally {
      commit(MUTATIONS.setLoading, false);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};

// export products
