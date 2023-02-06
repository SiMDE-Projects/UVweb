<template>
  <div class="post">
    <h1>
      This is a post page for
      {{
        $route.params.name ? $route.params.name.toUpperCase() : "an unknown UV"
      }}
    </h1>
    <form v-on:submit.prevent="submitForm">
      <AppTextArea
        name="post"
        id="post"
        placeholder="Ton avis..."
        v-model="form.comment"
      />
      <div class="precisions">
        <font-awesome-icon icon="info-circle" />
        Ton avis sera soumis à modération une fois posté. Il est possible
        d'éditer un avis après soumission, peu importe qu'il ait déjà été validé
        par un modérateur ou non.
        <em class="text-error"
          >N'oublie pas que les propos injurieux sont proscrits sur UVweb.</em
        >
      </div>
      <button>Valider</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000/comments";

import AppTextArea from "@/components/AppTextArea.vue";
export default {
  name: "PostView",
  components: {
    AppTextArea,
  },
  data() {
    return {
      form: {
        comment: "",
      },
    };
  },
  methods: {
    debug() {
      console.log(this.form.comment);
    },
    submitForm() {
      axios
        .post(baseURL, this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#post {
  resize: none;
}

.precisions {
  color: gray;

  .text-error {
    color: orangered;
  }
}
</style>
