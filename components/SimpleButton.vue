<template>
  <a class="simple-button" :class="type" :href="target" :title="alt">
    <!-- TODO: use render(), so the <a> tag can also optionally be a <nuxt-link> component. -->
    <span class="simple-button-icon prefixed-icon" v-if="prefixedIcon">
      <component v-bind:is="prefixedIcon + '-icon'"></component>
    </span>
    <slot></slot>
    <span class="simple-button-icon suffixed-icon" v-if="suffixedIcon">
      <component v-bind:is="suffixedIcon + '-icon'"></component> </span
  ></a>
</template>

<script>
import eastIcon from "~/assets/icons/material-east.svg?inline";
import caretDownIcon from "~/assets/icons/material-keyboard-arrow-down.svg?inline";
const iconKeys = ["east", "caret-down"];

export default {
  components: { eastIcon, caretDownIcon },
  props: {
    target: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      validator: function (value) {
        return ["primary", "secondary", "invisible"].includes(value);
      },
      default: "secondary",
    },
    prefixedIcon: {
      type: String,
      validator: function (value) {
        return iconKeys.includes(value);
      },
    },
    suffixedIcon: {
      type: String,
      validator: function (value) {
        return iconKeys.includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  box-sizing: border-box;
  padding: 0.5em 1em;
  margin: 0;
  letter-spacing: 0.02em;
  white-space: nowrap;
  border-radius: 0.4em;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: $dark-10;
  }

  &.primary {
    color: $white;
    background-color: $orange;

    &:hover,
    &:focus {
      color: $white;
      background-color: $red;
    }
  }

  &.secondary {
    color: $white;
    background-color: $black;

    &:hover,
    &:focus {
      color: $white;
      background-color: $orange;
    }

    &:active {
      color: $white;
      background-color: $red;
    }
  }
}

.simple-button-icon {
  width: 1em;
  height: 1em;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  &.prefixed-icon {
    margin-right: 0.5em;
  }

  &.suffixed-icon {
    margin-left: 0.5em;
  }
}
</style>