<script>
export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleClick() {
      this.clickHandler();
    },
  },
};
</script>

<template>
  <button @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<style lang="scss">
@import "../components/styles/variables.scss";

button {
  @each $property, $value in $button-style {
    #{$property}: $value;
  }
  &:hover {
    background: $background-li-default;
    color: $background-li-clicked;
  }
}
</style>
