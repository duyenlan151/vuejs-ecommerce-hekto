<template>
  <div
    variants="{popUp}"
    class="relative group shadow-lg min-h-[320px] p-5 flex justify-center flex-col items-center text-center"
  >
    <div class="mx-auto">{{ icon }}</div>
    <p class="text-xl text-blue-1 pt-[20px] pb-[15px]">{{ title }}</p>
    <p class="text-blue-2 opacity-30 font-lato leading-relaxed">{{ desc }}</p>
    <div
      class="absolute left-0 bottom-0 h-[2px] w-full transform !scale-x-0 group-hover:!scale-x-100 transition-width origin-center delay-100 ease-in-out duration-500 bg-orange-1"
    ></div>
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
    icon: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>