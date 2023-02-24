<template>
  <div class="input" @click="setInputFocus">
    <font-awesome-icon
      class="searchIcon"
      icon="magnifying-glass"
      @click="setInputFocus"
    />
    <input
      class="html-input"
      type="text"
      placeholder="Rechercher une UV..."
      spellcheck="false"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    resetInput() {
      this.$emit("update:modelValue", "");
      this.setInputFocus();
    },
    setInputFocus() {
      this.$el.children[1].focus();
    },
  },
  computed: {
    hidden() {
      return !this.modelValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 15em;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 0.4em;
  padding: 0.2em;
  border: 2px solid var(--accent-color);
  font-size: 1.4rem;
  margin: auto;
  margin-bottom: 1em;
  cursor: text;
}

.searchIcon {
  padding: 0.2em;
  color: var(--accent-color);
}

.resetButton {
  width: 1em;
  height: 1em;
  cursor: pointer;

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
  caret-color: var(--accent-color);
  color: var(--accent-color);
  margin-left: 0.2em;
  min-width: 10em;
}
</style>
