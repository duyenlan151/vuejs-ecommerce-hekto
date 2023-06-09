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
      const {
        query: { price, rating, sort, category },
      } = this.$route;
      this.getAllProductsByParams({ price, rating, sort, category });
    },
  },

  computed: {},

  methods: {
    ...mapActions("products", [ACTIONS.getAllProducts]),

    async init() {
      console.log("get all products");
      await this[ACTIONS.getAllProducts]();
    },

    async getAllProductsByParams(params) {
      await this[ACTIONS.getAllProducts](params);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>