<template>
  <router-link to="/about">
    <font-awesome-icon icon="arrow-left" />
    <span>Back</span>
  </router-link>
</template>

<script>
export default {
  name: "BackHomeButton",
};
</script>

<style scoped lang="scss">
a {
  float: left;
}
</style>
