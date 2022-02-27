<template>
  <header id="header">
    <img id="logo" alt="UVweb logo" src="../assets/img/logo.png" />
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
#header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 100%;
    width: 240%;
    height: 22px;
    left: -70%;
    right: -70%;
    background: -webkit-radial-gradient(
      50% -3%,
      ellipse cover,
      rgba(00, 00, 00, 0.2),
      rgba(97, 97, 97, 0) 30%
    );
    background: radial-gradient(
      ellipse at 50% -3%,
      rgba(00, 00, 00, 0.2),
      rgba(97, 97, 97, 0) 30%
    );
  }
}

#logo {
  margin: 40px 0;
}
</style>
