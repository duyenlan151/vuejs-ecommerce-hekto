import { DataCategoryModel } from "@/models";
import { categoryService } from "@/services/Admin";
import { ACTIONS, MUTATIONS, STATE } from "./master";

interface CategoriesProps {
  categories: Partial<DataCategoryModel>;
  loading: boolean;
}

const state: CategoriesProps = {
  categories: {},
  loading: false,
};

const getters = {
  [STATE.getAllCategories]: ({ categories }: CategoriesProps) => {
    return categories.data;
  },

  [STATE.getTotalDocs]: ({ categories }: CategoriesProps) => {
    return categories.totalDocs;
  },

  [STATE.getLoading]: ({ loading }: CategoriesProps) => {
    return loading;
  },
};

const mutations = {
  [MUTATIONS.setLoading]: (state, payload) => {
    state.loading = payload;
  },
  [MUTATIONS.setCategories]: (state, payload) => {
    state.categories = payload;
  },
};

const actions = {
  [ACTIONS.getAllCategoriess]: async ({ commit }) => {
    commit(MUTATIONS.setLoading, true);
    try {
      const result = await categoryService.getAllCategory();
      commit(MUTATIONS.setCategories, result);
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
