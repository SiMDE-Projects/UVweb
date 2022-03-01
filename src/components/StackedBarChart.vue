<template>
  <div class="stacked-bar-chart">
    <div class="bars">
      <div
        class="bar"
        v-for="(data, index) in datas"
        :key="index"
        :value="data.count"
        :style="{
          width: computedWidth(data.count),
          backgroundColor: computedColor(data.order),
        }"
      >
        {{ data.value }}
      </div>
    </div>
    <div class="info">
      <font-awesome-icon icon="sort-up" />
      <span>{{ middleValue }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StackedBarChart",
  props: {
    datas: {
      type: Array,
      required: true,
    },
  },
  methods: {
    computedWidth(count) {
      return (count / this.totalCount) * 100 + "%";
    },
    computedColor(rank) {
      colorScale = [
        "#ff0d0d",
        "#ff4e11",
        "#ff8e15",
        "#fab733",
        "#acb334",
        "69b34c",
      ];
      return colorScale[rank];
    },
  },
  computed: {
    totalCount() {
      let count = 0;
      this.datas.forEach((data) => {
        count += data.count;
      });
      return count;
    },
    middleValue() {
      let count = 0;
      let i = 0;
      while (count < this.totalCount / 2) {
        count += this.datas[i].count;
        console.log(count);
        console.log(this.totalCount / 2);
        i++;
      }
      console.log("oui");
      return this.datas[i - 1].value;
    },
  },
};
</script>

<style lang="scss" scoped>
.stacked-bar-chart {
  margin-bottom: 10px;
}

.bars {
  height: 24px;
  line-height: 24px;
}

.bar {
  height: 100%;
  color: transparent;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
}

.info {
  display: flex;
  flex-direction: column;

  span {
    margin-top: -0.3em;
  }
}

.bar {
  display: inline-block;
  overflow: hidden;
}
</style>
