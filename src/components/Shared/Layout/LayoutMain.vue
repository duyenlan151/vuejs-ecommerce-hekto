<template>
  <v-layout>
    <header>
      <top-navbar />
      <header-comp />
    </header>
    <v-main>
      <router-view />
    </v-main>
    <footer-comp />
  </v-layout>
</template>

<script>
import Banner from "./Banner.vue";
import Footer from "./Footer.vue";
import HeaderComp from "./Header.vue";
import FooterComp from "./Footer.vue";
import TopNavbar from "./TopNavbar.vue";
export default {
  name: "LayoutMain",

  components: {
    TopNavbar,
    HeaderComp,
    Banner,
    Footer,
    FooterComp,
  },
};
</script>

<style lang="scss" scoped></style>;
