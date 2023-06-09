<template>
  <div class="bg-white py-2">
    <filter-by-categories />
    <filter-by-price />
    <filter-by-rating />
  </div>
</template>

<script>
import FilterByCategories from "./Filters/FilterByCategories.vue";
import FilterByPrice from "./Filters/FilterByPrice.vue";
import FilterByRating from "./Filters/FilterByRating.vue";
export default {
  components: { FilterByPrice, FilterByRating, FilterByCategories },
};
</script>

<style lang="scss" scoped>
</style>