<template>
  <div class="button">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style>
</style>