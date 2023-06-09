
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>


<script>
import LayoutMain from "@/components/Shared/Layout/LayoutMain.vue";

export default {
  components: {
    LayoutMain,
  },
  data() {
    return {
      layout: "",
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "LayoutMain"; // this is default layout if route meta is not set
      }
    },
  },
};
</script>
