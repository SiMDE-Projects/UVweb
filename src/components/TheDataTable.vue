<template>
  <AppInput
    name="table-search"
    v-model="search"
    placeholder="Rechercher une UV..."
    @input="debug"
  />
  <div v-if="filteredUvs.length > 0" class="tableOptionsBar">
    <font-awesome-icon
      class="button"
      @click="readingAid = !readingAid"
      :class="{ active: readingAid }"
      icon="glasses"
    />
  </div>
  <table v-if="filteredUvs.length > 0" :class="{ readingAid }">
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.name"
          @click="sortBy(column)"
        >
          <div class="wrapper">
            <div>{{ column.label }}</div>
            <font-awesome-icon
              :icon="sortIcon"
              class="sortIcon"
              :class="{ hidden: sort.key != column.name }"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="uv in sortedUvs"
        :key="uv.id"
        @click="goToUvView(uv.name.toLowerCase())"
      >
        <td
          v-for="column in columns"
          :key="column.name"
          :class="{ fixedWidth: column.fixedWidth }"
        >
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
import AppInput from "@/components/AppInput.vue";

import axios from "axios";
const baseURL = "http://localhost:3000/uvs";

export default {
  name: "TheDataTable",
  components: {
    AppInput,
  },
  data() {
    return {
      search: "",
      filters: {},
      sort: { key: null, dir: null },
      uvs: [],
      columns: [
        { name: "name", label: "nom", fixedWidth: true },
        { name: "title", label: "intitulé", orderable: false },
        {
          name: "note",
          label: "note",
          defaultOrderDir: "desc",
          fixedWidth: true,
        },
      ],
      readingAid: false,
    };
  },
  created() {
    this.populateUvs();
    this.sort = {
      key: "name",
      dir: "asc",
    };
  },
  computed: {
    filteredUvs() {
      let filteredUvs = this.uvs;
      if (this.search != "") {
        filteredUvs = filteredUvs.filter(
          (item) =>
            fuzzySearch(this.search, item.name) ||
            fuzzySearch(this.search, item.title)
        );
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
    debug() {
      console.log(this.search);
    },
    formatCell(uv, column) {
      let content = uv[column.name];
      if (column.name == "note") {
        let formatted = content.toFixed(2);
        if (formatted.length == 4) formatted = "\xa0" + formatted;
        return formatted;
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
      axios
        .get(baseURL)
        .then((res) => {
          console.log(res);
          this.uvs = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};

function fuzzySearch(needle, haystack) {
  let hlen = haystack.length;
  let nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  needle = needle.normalize("NFD").toLowerCase();
  haystack = haystack.normalize("NFD").toLowerCase();
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    let nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}
</script>

<style lang="scss" scoped>
input {
  font-size: 1em;
  margin-bottom: 2em;
}

.tableOptionsBar {
  text-align: right;

  .button {
    cursor: pointer;
    color: var(--disabled-color);
    font-size: 1.1em;
    margin: 0.4em;

    &:hover {
      color: #566b80;
    }

    &.active {
      color: var(--text-color);
    }
  }
}

table {
  cursor: pointer;
  text-align: initial;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 4em;

  &.readingAid tbody tr:nth-child(even) {
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

    &:hover {
      background-color: #e2e6ec;
    }

    .wrapper {
      display: flex;
    }
  }

  tbody tr {
    border-bottom: solid 1px #e5e7eb;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f6f7f8;
      color: #0b0c0c;
    }
  }
}

.notFound {
  margin-bottom: 2em;
}

.fixedWidth {
  font-family: Roboto Mono;
  text-align: center;
  width: 1px;
}

.sortIcon {
  margin-left: 0.5em;
}

.hidden {
  visibility: hidden;
}
</style>
