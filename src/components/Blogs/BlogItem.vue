<template>
  <div
    class="shadow-xl overflow-hidden lg:max-w-full mb-6 max-w-[90%] mx-auto hover:shadow-none group transition delay-100 ease-in-out duration-500"
  >
    <div
      class="relative lg:w-[400px] max-w-full w-full h-[250px] flex justify-center rounded-md overflow-hidden relative justify-center items-center"
    >
      <!-- <Image
        :src="thumbnail"
        sizes="(max-width: 500px) 100vw, (max-width: 500px)"
        fill
        loading="lazy"
        alt="{thumbnail[0]}"
        class="object-cover object-center "
      /> -->
      <img
        :src="thumbnail"
        sizes="(max-width: 500px) 100vw, (max-width: 500px)"
        fill
        loading="lazy"
        :alt="thumbnail"
      />
      <!-- {/* <img class="mx-auto scale-1 w-full" src={thumbnail[0]} alt="profile picture" /> */} -->
    </div>
    <div class="p-3.5">
      <!-- {/* Heading */} -->
      <div class="flex lg:flex-none flex-wrap items-center mb-2">
        <div class="flex items-center pr-7">
          <!-- <IPencil /> -->
          <span class="ml-2 text-blue-1 text-sm">{{ author }}</span>
        </div>
        <div class="flex items-center">
          <!-- <IDate /> -->
          <span class="ml-2 text-blue-1 text-sm">{{ date }}</span>
        </div>
      </div>
      <p
        class="tracking-normal text-lg text-blue-1 py-3 font-extrabold group-hover:text-pink-1 transition delay-100 ease-in-out duration-200"
      >
        {{ title }}
      </p>
      <!-- {/* Description */} -->
      <p class="text-grey-3 font-lato-light font-bold tracking-normal">
        {{ desc }}
      </p>
      <!-- {/* Button read more */} -->
      <button
        class="relative mt-7 mb-3 text-blue-1 leading-4 group-hover:text-pink-1 transition delay-100 ease-in-out duration-300"
      >
        Read More
        <span
          class="absolute left-0 -bottom-[2px] h-[1px] w-0 group-hover:w-full bg-pink-1 transition-width delay-100 ease-in-out duration-200"
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>