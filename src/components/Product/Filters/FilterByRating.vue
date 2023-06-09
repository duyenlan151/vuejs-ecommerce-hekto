<template>
  <div className="my-2 border-b">
    <p className="text-blue-1 text-xl px-3 py-2">Price</p>
    <div className="flex flex-col px-3 pt-0 mb-4">
      <a
        v-for="rating in filterRating"
        :key="rating.id"
        @click="handleFilterByRating(rating.value)"
        className="flex items-center py-1 cursor-pointer"
      >
        <span v-for="(item, index) in new Array(5).fill('')" :key="index">
          <i-star-fill v-if="rating.value > index" />
          <i-star-outline v-else />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import IStarFill from "@/Icons/IStarFill.vue";
import { filterRating } from "./Filter.props.ts";
import IStarOutline from "@/Icons/IStarOutline.vue";
export default {
  components: { IStarFill, IStarOutline },
  data() {
    return {
      filterRating,
      rating: String(this.$route.query.rating) ? this.$route.query.rating : "",
    };
  },

  methods: {
    handleFilterByRating(rating) {
      this.rating = rating;

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          rating,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>