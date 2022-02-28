<template>
  <div class="uv">
    <h1>This is the {{ $route.params.name.toUpperCase() }} UV page</h1>
    <!-- <div class="interest">
      <span>Intéret</span>
      <StackedBarChart :datas="barDatas" />
    </div> -->
  </div>
</template>

<script>
import StackedBarChart from "@/components/StackedBarChart.vue";

export default {
  name: "UvView",
  components: {
    StackedBarChart,
  },
  data() {
    return {
      // barDatas: [
      //   { order: 0, value: "Nul", count: 2 },
      //   { order: 1, value: "Peu intéressant", count: 9 },
      //   { order: 2, value: "Intéressant", count: 9 },
      //   { order: 3, value: "Trés intéressant", count: 3 },
      //   { order: 4, value: "Passionnant", count: 1 },
      // ],
    };
  },
};
</script>
