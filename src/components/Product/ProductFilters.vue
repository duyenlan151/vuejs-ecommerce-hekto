<template>
  <div class="bg-white py-2">
    <filter-by-price />
    <filter-by-rating />
  </div>
</template>

<script>
import FilterByPrice from "./Filters/FilterByPrice.vue";
import FilterByRating from "./Filters/FilterByRating.vue";
export default {
  components: { FilterByPrice, FilterByRating },
};
</script>

<style lang="scss" scoped>
</style>