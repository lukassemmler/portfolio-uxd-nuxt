<template>
  <div class="icon-item-container">
    <div class="icon-item">
      <span class="icon icon-product"><slot></slot></span>
      <span class="icon-item-label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-item-container {
  width: 6em;
  height: 6em;

  &.small {
    font-size: 0.8em;
  }
}

.icon-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  //background-color: $dark-05;
  transition: background-color 0.07s ease-out;
  border-radius: 0.5rem;

  &:hover {
    background-color: $dark-10;

    .icon-product svg {
      //fill: $dusk-90;
    }
  }
}

.icon-product,
.icon-item-label {
  display: inline-block;
}

.icon-item-label {
  font-size: 0.8em;
  text-align: center;
  height: 1em;
  margin-top: 0.2em;
}

.icon-product {
  width: 3em;
  height: 3em;

  svg {
    width: 100%;
    fill: currentColor;
  }
}

.icon-item-list {
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  padding: 0;
  margin: 0 0 2em 0;

  &.centered {
    justify-content: center;
  }
}
</style>