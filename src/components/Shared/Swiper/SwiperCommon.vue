<template>
  <swiper
    :hashNavigation="{
      watchState: true,
    }"
    :pagination="{
      clickable: true,
    }"
    slide
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    :slidesPerView="1"
    :style="styleDefault"
  >
    <footer v-if="hasSlot('footer')">
      <h3>footer heading</h3>
      <slot name="footer">default footer slot</slot>
    </footer>
    <swiper-slide
      v-else
      v-for="(image, index) in images"
      :key="image.title + index"
      :title="image.title"
      class="lg:min-h-[500px] min-h-[250px]"
    >
      <!-- {{ image.bgImg }} -->
      <!-- src="@/assets/images/slider-img/fashion-banner.webp" -->
      <img
        :src="image.bgImg"
        sizes="(max-width: 500px) 100vw, (max-width: 500px)"
        fill
        loading="lazy"
        :alt="image.title"
        class="h-full w-full absolute"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { sliderContent } from "@/utils/sample-data";

const styleDefault = {
  ["--swiper-pagination-bullet-size"]: "8px",
  "--swiper-pagination-bullet-width": "4px",
  "--swiper-pagination-bullet-active-width": "24px",
  "--swiper-pagination-bullet-height": "4px",
  "--swiper-pagination-bullet-border-radius": "2px",
  "--swiper-pagination-color": "#000",
  "--swiper-pagination-bullet-inactive-color": "#b3b3b3",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
  "--swiper-navigation-color": "#000",
  "--swiper-navigation-size": "25px",
  // height: '500px',
  paddingBottom: "0 !important",
};

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      images: sliderContent,
      styleDefault,
    };
  },

  created() {},

  computed: {},

  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    },

    imageSrc(selectedItem) {
      return require(selectedItem);
    },
  },

  setup(props, { slots }) {
    const hasSlot = (name) => !!slots[name];
    return {
      modules: [Pagination, Navigation],
      hasSlot,
    };
  },
};
</script>
