

<template>
  <banner />
  <section class="py-[129px] bg-white">
    <box-section :title="'What Shopex Offer!'">
      <template #content> <product-shopex /></template>
    </box-section>
  </section>
  <blog-list />
</template>


<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutMain from "@/components/Shared/Layout/LayoutMain.vue";
import Banner from "@/components/Shared/Layout/Banner.vue";
import BoxSection from "@/components/Shared/Box/BoxSection.vue";
import ProductShopex from "@/components/Product/ProductShopex.vue";
import BlogList from "@/components/Blogs/BlogList.vue";
</script>
