<template>
  <input
    name="table-search"
    v-model="search"
    placeholder="Rechercher une UV..."
  />
  <table v-if="filteredUvs.length > 0" class="readingHelp">
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.name"
          @click="sortBy(column)"
        >
          <span>{{ column.label }}</span>
          <font-awesome-icon
            v-if="sort.key == column.name"
            :icon="sortIcon"
            class="sortIcon"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="uv in sortedUvs"
        :key="uv.id"
        @click="goToUvView(uv.name.toLowerCase())"
      >
        <td v-for="column in columns" :key="column.name">
          {{ formatCell(uv, column) }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="notFound">
    Aucune UV ne correspond à votre recherche...
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000/uvs";

export default {
  name: "TheDataTable",
  components: {},
  data() {
    return {
      search: "",
      filters: {},
      sort: { key: null, dir: null },
      uvs: [],
      columns: [
        { name: "name", label: "nom" },
        { name: "title", label: "intitulé", orderable: false },
        {
          name: "note",
          label: "note",
          defaultOrderDir: "desc",
        },
      ],
    };
  },
  created() {
    this.populateUvs();
    this.sort = {
      key: this.columns[0].name,
      dir: this.columns[0].defaultOrderDir || "asc",
    };
  },
  computed: {
    filteredUvs() {
      let filteredUvs = this.uvs;
      if (this.search != "") {
        let sv = this.search.toUpperCase();
        filteredUvs = filteredUvs.filter((item) => {
          if (item.name.startsWith(sv)) return true;
        });
      }
      return filteredUvs;
    },
    sortedUvs() {
      let sortedUvs = this.filteredUvs;
      sortedUvs = sortedUvs.sort((a, b) => {
        if (a[this.sort.key] > b[this.sort.key]) return 1;
        if (a[this.sort.key] < b[this.sort.key]) return -1;
        return 0;
      });
      if (this.sort.dir == "desc") sortedUvs.reverse();
      return sortedUvs;
    },
    sortIcon() {
      return "sort-" + (this.sort.dir == "asc" ? "down" : "up");
    },
  },
  methods: {
    formatCell(uv, column) {
      let content = uv[column.name];
      if (column.name == "note") {
        return content.toFixed(2);
      }
      return content;
    },
    sortBy(column) {
      if (column.orderable == false) return;
      this.sort.key == column.name
        ? this.toogleSortDir()
        : (this.sort = {
            key: column.name,
            dir: column.defaultOrderDir || "asc",
          });
    },
    toogleSortDir() {
      this.sort.dir = this.sort.dir == "asc" ? "desc" : "asc";
    },
    goToUvView(name) {
      this.$router.push({ name: "uv", params: { name: name } });
    },
    async populateUvs() {
      try {
        const res = await axios.get(baseURL);
        this.uvs = res.data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  font-size: 1em;
  margin-bottom: 2em;
}

table {
  cursor: pointer;
  text-align: initial;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2em;

  &.readingHelp tbody tr:nth-child(even) {
    background-color: #f5f7fa;

    &:hover {
      background-color: #e7ebf0;
    }
  }

  th,
  td {
    padding: 0.5em 1em;
  }

  th {
    color: rgb(107, 114, 128);
    text-transform: uppercase;
    font-weight: 500;
    text-align: left;
    border-top: solid 1px #e5e7eb;
    border-bottom: solid 2px #d4d7dd;
    background-color: #f5f7fa;
    position: relative;

    &:hover {
      background-color: #e2e6ec;
    }
  }

  tbody tr {
    border-bottom: solid 1px #e5e7eb;

    &:hover {
      background-color: #f6f7f8;
      color: #5b6064;
    }
  }
}

.notFound {
  margin-bottom: 2em;
}

.monospace {
  font-family: Roboto Mono;
}

.sortIcon {
  position: absolute;
  right: 0.6em;
}
</style>
