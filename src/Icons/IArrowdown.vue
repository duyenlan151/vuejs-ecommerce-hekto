<template>
  <svg
    :stroke="currentColor"
    :fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
  </svg>
</template>

<script>
export default {
  props: {
    currentColor: {
      type: String,
      default: () => "#000",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>