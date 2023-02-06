<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <TheBackHomeButton v-show="this.$route.name != 'home'" />
      <router-view class="router-view" />
    </main>
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
:root {
  --text-color: #2c3e50;
  --disabled-color: #8a9bac;
}

html,
body {
  height: 100%;
}

.wrapper {
  min-height: calc(100% - 80px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  height: 100%;
  overflow: hidden;
}

.main {
  max-width: 900px;
  margin: auto;
}

.router-view {
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--text-color);

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
