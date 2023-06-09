<template>
  <div
    class="md:flex hidden items-center justify-between bg-white py-4 lg:px-0 px-2 border border-b border-primary"
  >
    <div class="flex items-center justify-between container mx-auto">
      <div class="md:flex items-center">
        <h1 class="text-4xl font-bold mr-20">
          <router-link to="/">Hekto</router-link>
        </h1>
        <router-link class="mx-3 text-base" to="/"> Home </router-link>
        <router-link class="mx-3 text-base" to="/products">
          Products
        </router-link>
        <router-link class="mx-3 text-base" to="/blog"> Blog </router-link>
        <router-link class="mx-3 text-base" to="/contact">
          Contact
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style lang="scss" scoped>
</style>