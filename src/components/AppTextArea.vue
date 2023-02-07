<template>
  <textarea
    @input="$emit('input', value)"
    class="textarea"
    v-model="value"
    ref="textarea"
  ></textarea>
</template>

<script>
export default {
  name: "AppTextArea",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    resize() {
      this.textarea.style.height = "auto";
      this.textarea.style.height = this.textarea.scrollHeight + "px";
    },
  },
  mounted() {
    this.textarea = this.$refs.textarea;
    this.textarea.addEventListener("input", this.resize);
    this.resize();
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  font-size: 1em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  padding-bottom: 1em;
}
</style>
