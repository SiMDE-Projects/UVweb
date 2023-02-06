<template>
  <div class="input">
    <input class="html-input" type="text" v-model="value" />
    <font-awesome-icon
      class="resetButton"
      @click="resetInput"
      icon="xmark"
      :class="{ hidden }"
    />
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
      this.$el.children[0].focus();
    },
  },
  computed: {
    hidden() {
      return !this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: inline-block;
  border: solid 2px black;
  border-radius: 0.3em;
  padding: 1px 2px;
}

.resetButton {
  width: 1em;
  height: 1em;

  &:hover {
    color: grey;
  }

  &.hidden {
    visibility: hidden;
  }
}
.html-input {
  font-size: 1em;
  border: none;
  outline: none;
  padding: 0;
}
</style>
