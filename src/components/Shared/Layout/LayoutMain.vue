<template>
  <div>
    <header>
      <top-navbar />
      <header-comp />
    </header>
    <main>
      <router-view />
    </main>
    <footer-comp />
  </div>
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
