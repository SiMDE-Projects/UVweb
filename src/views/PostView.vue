<template>
  <div class="post">
    <h1>This is a post page</h1>
    <form v-on:submit.prevent="submitForm">
      <AppTextArea
        name="post"
        id="post"
        placeholder="Ton avis..."
        v-model="form.comment"
      />
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

<style lang="sass" scoped>
#post
  resize: none
</style>
