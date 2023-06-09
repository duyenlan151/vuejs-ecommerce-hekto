

<template>
  <LayoutMain>
    <template #content> <router-view /></template>
  </LayoutMain>
</template>


<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutMain from "@/components/Shared/Layout/LayoutMain.vue";
</script>
