<template>
  <div class="skip-link">
    <a :href="'#' + anchor">{{ label }}</a>
  </div>
</template>

<script>
export default {
  name: "skip-link",
  props: {
    anchor: {
      type: String,
      default: 'main'
    },
    label: {
      type: String,
      default: 'Skip to main content'
    },
  },
};
</script>

<style lang="scss" scoped>
.skip-link {
  @apply absolute top-0 inset-x-0 text-center z-50 transform -translate-y-full;
  a {
    @apply inline-block outline-none text-xs tracking-wide text-white opacity-50 px-4 py-2 transform duration-300 
    focus:translate-y-full focus:underline;
  }
}
</style>