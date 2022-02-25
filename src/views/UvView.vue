<template>
  <div class="uv">
    <h1>This is the {{ $route.params.name.toUpperCase() }} UV page</h1>
  </div>
</template>

<script>
export default {
  name: "UvView",
};
</script>
