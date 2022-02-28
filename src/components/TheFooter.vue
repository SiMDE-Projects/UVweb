<template>
  <footer>
    <div class="copyright">
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
  text-align: center;
  position: relative;
  color: rgb(87, 96, 106);

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -22px;
    width: 1500;
    height: 22px;
    left: -300px;
    right: -300px;
    background: radial-gradient(
      ellipse at 50% 120%,
      rgba(0, 0, 0, 0.2),
      rgba(97, 97, 97, 0) 30%
    );
    background: webkit-radial-gradient(
      ellipse at 50% 120%,
      rgba(0, 0, 0, 0.2),
      rgba(97, 97, 97, 0) 30%
    );
  }
}

.copyright {
  padding-top: 1em;
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
