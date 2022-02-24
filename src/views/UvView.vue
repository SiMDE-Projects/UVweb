<template>
  <BackHomeButton />
  <div class="uv">
    <h1>This is the {{ $route.params.name.toUpperCase() }} UV page</h1>
  </div>
</template>

<script>
import BackHomeButton from "@/components/BackHomeButton.vue";

export default {
  name: "UvView",
  components: {
    BackHomeButton,
  },
};
</script>
