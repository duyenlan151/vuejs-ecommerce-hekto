<template>
  <product-list-page />
</template>

<script>
// import { signIn } from "next-auth/react";
import { mapActions, mapGetters } from "vuex";

import { ACTIONS } from "@/store/modules/master";
import ProductListPage from "@/components/Product/ProductListPage.vue";
export default {
  components: { ProductListPage },
  setup() {},

  created() {
    this.init();
  },

  watch: {
    $route(to, from) {
      const newQuery = to.query;
      // const oldQuery = from.query;
      const { price, rating, sort, category } = newQuery;

      this.getAllProductsByParams({ price, rating, sort, category });
      // Kiểm tra xem query nào đã thay đổi
      // for (const key in newQuery) {
      //   if (newQuery.hasOwnProperty(key) && newQuery[key] !== oldQuery[key]) {
      //     if (!["row", "col"].includes(newQuery[key])) {
      //       this.getAllProductsByParams({ price, rating, sort, category });
      //       // Thực hiện hành động tương ứng khi query thay đổi
      //     }
      //   }
      // }
    },
  },

  computed: {},

  methods: {
    ...mapActions("products", [ACTIONS.getAllProducts]),

    async init() {
      this.getAllProductsByParams();
    },

    async getAllProductsByParams(params) {
      await this[ACTIONS.getAllProducts](params);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>