

<template>
  <LayoutMain>
    <router-view />
  </LayoutMain>
</template>


<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutMain from "@/components/Shared/Layout/LayoutMain.vue";
import TopNavbarVue from "@/components/Shared/Layout/TopNavbar.vue";
import HeaderComp from "@/components/Shared/Layout/Header.vue";
import FooterComp from "@/components/Shared/Layout/Footer.vue";
</script>
