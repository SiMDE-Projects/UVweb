<template>
  <div class="container">
    <div class="dropdown">
      <div class="option" v-for="(index, option) in options" :key="index">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>