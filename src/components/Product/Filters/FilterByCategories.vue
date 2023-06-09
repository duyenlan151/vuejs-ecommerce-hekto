<template>
  <div class="my-2 border-b">
    <p class="text-blue-1 text-xl px-3 py-2">Categories</p>
    <div
      class="flex items-center p-3 py-2"
      v-for="item in categories"
      :key="item?._id"
      @click="handleFilterByCategory(item.slug)"
    >
      <input
        :id="item.slug"
        :name="item.slug"
        type="checkbox"
        :value="item.slug"
        :checked="item.slug === category"
        disabled
        class="`border-green-1 mr-2 mt-[2px] !text-green-1 focus:border-green-1 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 ${className}`"
      />
      <label :for="item.slug" class="cursor-pointer text-sm font-lato">
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script>
import { filterCategories } from "./Filter.props.ts";
import { mapActions, mapGetters } from "vuex";

import { ACTIONS, STATE } from "@/store/modules/master";
export default {
  data() {
    return {
      filterCategories,
      categoryFalse: false,
      category: String(this.$route.query.category)
        ? this.$route.query.category
        : "",
    };
  },

  created() {
    this.init();
  },

  computed: {
    ...mapGetters("categories", [
      STATE.getAllCategories,
      STATE.getTotalDocs,
      STATE.getLoading,
    ]),

    categories() {
      return this[STATE.getAllCategories];
    },
  },

  methods: {
    ...mapActions("categories", [ACTIONS.getAllCategoriess]),

    async init() {
      await this[ACTIONS.getAllCategoriess]();
    },

    handleFilterByCategory(category) {
      this.category = category;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          category,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>