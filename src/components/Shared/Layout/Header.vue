<template>
  <div
    class="md:flex hidden items-center justify-between bg-white py-4 lg:px-0 px-2 border border-b border-primary"
  >
    <div class="flex items-center justify-between container mx-auto">
      <div class="md:flex items-center">
        <h1 class="text-4xl font-bold mr-20">
          <a href="/">Hekto</a>
        </h1>
        <a class="mx-3 text-base" href="/"> Home </a>
        <a class="mx-3 text-base" href="/products"> Products </a>
        <a class="mx-3 text-base" href="/blog"> Blog </a>
        <a class="mx-3 text-base" href="/contact"> Contact </a>
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