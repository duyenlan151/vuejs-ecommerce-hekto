<template>
  <svg
    :stroke="currentColor"
    :fill="currentColor"
    stroke-width="0"
    viewBox="0 0 1024 1024"
    height="25"
    width="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
    ></path>
  </svg>
</template>

<script>
export default {
  props: {
    currentColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>