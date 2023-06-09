<template>
  <div>
    <swiper-common :navigation="true"> </swiper-common>
  </div>
</template>

<script>
import SwiperCommon from "../Swiper/SwiperCommon.vue";
export default {
  name: "Banner",
  components: {
    SwiperCommon,
  },
};
</script>