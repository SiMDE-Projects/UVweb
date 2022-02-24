<template>
  <BackHomeButton />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import BackHomeButton from "@/components/BackHomeButton.vue";

export default {
  name: "AboutView",
  components: {
    BackHomeButton,
  },
};
</script>
