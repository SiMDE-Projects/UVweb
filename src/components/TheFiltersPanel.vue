<template>
  <div class="container">
    <div
      class="filter-group"
      v-for="(filterGroup, index) in filterGroups"
      :key="index"
    >
      <span class="filter-group-name">{{ filterGroup.name }}</span>
      <div class="filters-container">
        <button
          class="filterBtn"
          :class="{ active: filter.active }"
          @click="setActiveFilter(filterGroup, filter)"
          v-for="(filter, index) in filterGroup.filters"
          :key="index"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltersPanel",
  data() {
    return {
      filterGroups: [
        {
          name: "Branche",
          exclusive: true,
          filters: [
            { name: "TC", active: false },
            { name: "GI", active: false },
            { name: "GB", active: false },
            { name: "IM", active: false },
          ],
        },
        {
          name: "Catégorie",
          exclusive: true,
          filters: [
            { name: "CS", active: false },
            { name: "TM", active: false },
            { name: "TSH", active: false },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveFilter(filterGroup, filter) {
      if (filter.active) {
        filter.active = false;
        return;
      }
      filterGroup.filters.forEach((f) => {
        f.active = false;
      });
      filter.active = true;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  text-align: left;
}
.filters-container {
  display: flex;
  gap: 0.3em;
  margin: 0.2em auto 0.6em;
}

.filterBtn {
  font-family: Roboto, sans-serif;
  border: 2px solid #aaa;
  background-color: white;
  font-size: 1.2em;
  border-radius: 0.4em;
  padding: 0.3em 0.5em;
  color: #aaa;
  cursor: pointer;
  transition-property: color border-color;
  transition-duration: 0.3s;
  font-weight: 500;

  &:hover {
    border-color: #ccc;
    color: #ccc;
  }

  &.active {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
}

.filter-group-name {
  text-transform: uppercase;
  font-weight: 700;
  color: #aaa;
  font-size: 0.9em;
}
</style>
