<template>
  <div className="my-2 border-b">
    <p className="text-blue-1 text-xl px-3 py-2">Price</p>
    <div className="flex flex-col px-3 pt-0 mb-4">
      <a
        v-for="item in filterPrice"
        :key="item.id"
        @click="handleFilterByPrice(item.value)"
        :className="`${
          price === item.value && 'text-pink-1'
        } my-2 font-lato text-sm hover:text-pink-1 cursor-pointer transition ease-in-out duration-300`"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script>
import { filterPrice } from "./Filter.props.ts";
export default {
  data() {
    return {
      filterPrice,
      price: String(this.$route.query.price) ? this.$route.query.price : "",
    };
  },

  methods: {
    handleFilterByPrice(price) {
      this.price = price;

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          price,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>