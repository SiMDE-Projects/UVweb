<template>
  <div class="input">
    <input class="html-input" type="text" v-model="value" />
    <font-awesome-icon class="resetButton" @click="resetInput" icon="glasses" />
  </div>
</template>

<script>
export default {
  name: "AppInput",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    resetInput() {
      this.value = "";
    },
  },
};
</script>

<style>
.html-input {
  font-size: 1em;
  border: none;
}
</style>