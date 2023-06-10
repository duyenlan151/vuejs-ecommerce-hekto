<template>
  <div
    class="bg-white py-4 px-3 mb-2 flex overflow-x-auto items-center border-b border-primary"
  >
    Filter:
    <div v-for="elm in FILTER_LIST" :key="elm.id">
      <div
        v-show="elm.isShow(this.filters)"
        @click="
          () => {
            const newFilters = elm.onRemove(this.filters);
            this.$router.push({
              path: this.$route.path,
              query: {
                ...newFilters,
              },
            });
          }
        "
        class="cursor-pointer whitespace-nowrap flex items-center ml-4 border border-primary py-1 px-5 rounded-3xl hover:bg-gray-100 transition delay-100 ease-in-out duration-500"
      >
        {{ elm.getLabel(this.filters) }}
        <span className="ml-2 -mr-2 cursor-pointer">
          <i-close-circle />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ICloseCircle from "@/Icons/ICloseCircle.vue";
import { FILTER_LIST } from "./Filter.props";
export default {
  components: { ICloseCircle },
  data() {
    return {
      FILTER_LIST,
      filters: {
        price: this.$route.query.price || "",
        rating: this.$route.query.rating || "",
        sort: this.$route.query.sort || "",
        category: this.$route.query.category || "",
      },
    };
  },

  watch: {
    $route(to, from) {
      const { query } = this.$route;
      this.filters = { ...query };
    },
  },

  methods: {
    onRemoveFilter(filters) {
      const newFilters = elm.onRemove(filters);
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          [key]: result,
        },
      });
      this.$router.push({
        path: this.$route.path,
        query: {
          ...newFilters,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>