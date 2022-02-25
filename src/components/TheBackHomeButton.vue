<template>
  <router-link to="/">
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
  color: rgb(87, 96, 106);
  text-decoration: none;

  &:hover {
    color: rgb(132, 142, 153);
  }
}
</style>
