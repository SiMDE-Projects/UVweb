<template>
  <div class="wrapper">
    <TheHeader />
    <TheBackHomeButton v-show="this.$route.name != 'home'" />
    <router-view />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheBackHomeButton from "@/components/TheBackHomeButton.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    TheBackHomeButton,
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

.wrapper {
  min-height: calc(100% - 100px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  margin: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
