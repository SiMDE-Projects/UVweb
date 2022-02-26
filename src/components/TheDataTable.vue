<template>
  <input
    name="table-search"
    v-model="search"
    placeholder="Rechercher une UV..."
  />
  <table v-if="uvs.length > 0" class="readingHelp">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="uv in uvs"
        :key="uv.id"
        @click="goToUvView(uv.name.toLowerCase())"
      >
        <td v-for="column in columns" :key="column.name">
          {{ uv[column.name] }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="notFound">
    Aucune UV ne correspond à votre recherche...
  </div>
  <button @click="addUv">Ajouter</button>
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
      uvs: [],
      columns: [
        { name: "name", label: "nom" },
        { name: "title", label: "intitulé" },
      ],
    };
  },
  created() {
    this.populateUvs();
  },
  methods: {
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
  }

  tbody tr {
    cursor: pointer;
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
</style>
