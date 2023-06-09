<template>
  <section class="py-[129px] bg-white">
    <div class="container mx-auto lg:px-0 px-4">
      <h5
        class="text-center text-blue-2 lg:text-5xl md:lg:text-4xl text-3xl font-bold mb-20 tracking-wide"
      >
        Lasted Blogs
      </h5>
      <div
        class="grid justify-center items-center mx-auto lg:gap-10 md:gap-6 gap-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-flow-row"
      >
        <blog-item
          v-for="blog in dataBlogs"
          :key="blog.id"
          :title="blog.title"
          :desc="blog.desc"
          :author="blog.author"
          :date="blog.date"
          :thumbnail="blog.thumbnail[0]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { dataBlogs } from "@/utils/sample-data";
import BlogItem from "./BlogItem.vue";
export default {
  components: {
    BlogItem,
  },

  data() {
    return {
      dataBlogs,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>