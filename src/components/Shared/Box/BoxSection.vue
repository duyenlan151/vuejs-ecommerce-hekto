<template>
  <div :class="className + ' ' + 'container mx-auto lg:px-0 px-4'">
    <h2
      variants="{popUpFromBottomForText}"
      class="text-center text-blue-2 lg:text-5xl md:lg:text-4xl text-3xl font-bold mb-12 tracking-wide"
    >
      {{ title }}
    </h2>
    <!-- <template name="content"> </template> -->
    <!-- <footer v-if="hasSlot('content')"> -->
    <slot name="content">default footer slot</slot>
    <!-- </footer> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>