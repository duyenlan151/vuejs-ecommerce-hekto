<template>
  <div>
    <swiper-common :navigation="true">
      <!-- <template #footer> I'm a footer </template> -->
    </swiper-common>
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