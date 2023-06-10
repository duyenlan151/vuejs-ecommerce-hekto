<template>
  <svg
    :stroke="currentColor"
    :fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="25"
    width="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M32 144h448M112 256h288M208 368h96"
    ></path>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      currentColor: "#000",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>