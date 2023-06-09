<template>
  <div
    class="grid justify-center items-center mx-auto gap-6 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 grid-flow-row"
  >
    <product-shopex-item
      v-for="(item, index) in dataShopex"
      :title="item.title"
      :desc="item.desc"
      :icon="item.icon"
      :key="item.id + '-' + index"
    />
  </div>
</template>

<script>
import { dataShopex } from "@/utils/sample-data";
import ProductShopexItem from "./ProductShopexItem.vue";

export default {
  components: { ProductShopexItem },

  data() {
    return {
      dataShopex,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>