<template>
  <div
    class="min-h-[230px] max-h-[230px] flex bg-white group transition delay-100 ease-in-out duration-500 flex items-center p-2"
  >
    <!-- {/* Image product */} -->
    <a
      :href="`/products/${_id}/${slug}`"
      class="relative block max-w-[214px] lg:min-w-[214px] min-w-[150px] h-[214px]"
    >
      <img
        fill
        loading="lazy"
        sizes="(max-width: 214px) 100vw, (max-width: 214px)"
        :src="images && images[0]?.path"
        :alt="(images && images[0]?.path) || name"
        class="scale-[80%] absolute left-0 h-full w-full object-contain transition-transform duration-300 ease-in-out !py-2"
      />
    </a>
    <div class="px-2 transition delay-100 ease-in-out duration-500">
      <!-- {/* Name Product */} -->
      <a
        :href="`/products/${_id}/${slug}`"
        class="line-clamp-2 transition delay-100 ease-in-out duration-500 text-gray-600 font-lato font-bold"
      >
        {{ title }}
      </a>
      <!-- {/* Price */} -->
      <div
        class="transition delay-100 ease-in-out duration-500 mt-1 text-blue-1 text-sm font-lato"
      >
        <span class="text-sub-title-1 text-sm">{{
          getSymbolCurrency(Number(price))
        }}</span>
        <span class="ml-2 text-sub-title text-xs line-through"></span>
      </div>
      <div class="text-sm text-sub-title mt-2">{{ rating }}/5</div>
      <!-- {/* ShortDescription */} -->
      <div
        class="line-clamp-1 transition delay-100 ease-in-out duration-500 mt-2 text-sub-title-3 text-sm"
      >
        {{ description }}
      </div>
      <!-- {/* Group Icons */} -->
      <div class="flex items-center mt-4">
        <!-- onClick={() => router.push(`/products/${_id}/${slug}`)} -->
        <div
          class="flex justify-center items-center rounded-full cursor-pointer mr-5"
        >
          <!-- <AiOutlineShoppingCart color={'#2F1AC4'} size={17} /> -->
        </div>
        <div
          class="flex justify-center items-center rounded-full cursor-pointer mr-5"
        >
          <!-- <AiOutlineHeart color={'#1389FF'} size={17} /> -->
        </div>
        <!-- onClick={() => router.push(`/products/${_id}/${slug}`)} -->
        <div
          class="flex justify-center items-center rounded-full cursor-pointer mr-5"
        >
          <!-- <AiOutlineZoomIn color={'#1389FF'} size={17} /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSymbolCurrency } from "@/utils/common";
export default {
  props: {
    _id: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
    title: {
      type: String,
    },
    rating: {
      type: Number,
    },
    slug: {
      type: String,
    },
  },

  data() {
    return {
      getSymbolCurrency,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>