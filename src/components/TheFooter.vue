<template>
  <footer>
    <div>
      <font-awesome-icon icon="code" /> with
      <font-awesome-icon icon="heart" /> by SiMDE.
    </div>
    <div class="links">
      <a href="mailto:simde@assos.utc.fr">Contact</a>
      <router-link to="/about">About</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped lang="scss">
footer {
  color: rgb(87, 96, 106);
}

.links {
  margin-top: 1em;
}

a {
  color: inherit;
  text-decoration: none;
  margin: 1em;

  &:hover {
    text-decoration: underline;
  }
}
</style>
