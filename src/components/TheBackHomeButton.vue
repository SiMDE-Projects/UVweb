<template>
  <div class="container">
    <router-link to="/">
      <font-awesome-icon icon="arrow-left" />
      <span class="button-label">Back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackHomeButton",
};
</script>

<style scoped lang="scss">
.container {
  text-align: left;
}

a {
  color: rgb(87, 96, 106);
  text-decoration: none;

  &:hover {
    color: rgb(132, 142, 153);
  }
}

.button-label {
  margin-left: 0.3em;
}
</style>
