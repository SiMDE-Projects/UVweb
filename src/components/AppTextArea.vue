<template>
  <textarea
    @input="$emit('input', value)"
    class="textarea"
    v-model="value"
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
      let el = this.$el;
      let em = parseFloat(getComputedStyle(el).fontSize);
      this.$el.style.height = "auto";
      this.$nextTick(() => {
        let contentHeight =
          el.scrollHeight +
          em -
          window
            .getComputedStyle(el)
            .getPropertyValue("padding-top")
            .slice(0, -2) -
          window
            .getComputedStyle(el)
            .getPropertyValue("padding-bottom")
            .slice(0, -2);
        if (this.minHeight && contentHeight < this.minHeight)
          contentHeight = this.minHeigh;
        this.$el.style.height = contentHeight + "px";
      });
      return this;
    },
  },
  mounted() {
    this.resize();
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  font-size: 1em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
}
</style>
