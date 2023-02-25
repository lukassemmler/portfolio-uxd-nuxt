<template>
  <a
    class="simple-button"
    :class="type"
    :href="target"
    :title="alt"
    v-on="$listeners"
    ref="link"
  >
    <!-- TODO: use render(), so the <a> tag can also optionally be a <nuxt-link> component. -->
    <span class="simple-button-icon prefixed-icon" v-if="prefixedIcon">
      <component v-bind:is="prefixedIcon + '-icon'"></component>
    </span>
    <span v-if="slotHasContent">
      <slot></slot>
    </span>
    <span class="simple-button-icon suffixed-icon" v-if="suffixedIcon">
      <component v-bind:is="suffixedIcon + '-icon'"></component> </span
  ></a>
</template>

<script>
import eastIcon from "~/assets/icons/material-east.svg?inline";
import caretDownIcon from "~/assets/icons/material-keyboard-arrow-down.svg?inline";
import flagIcon from "~/assets/icons/material-flag.svg?inline";
import closeIcon from "~/assets/icons/material-close.svg?inline";
import menuIcon from "~/assets/icons/material-menu.svg?inline";
const iconKeys = ["east", "caret-down", "flag", "close", "menu"];

export default {
  components: { eastIcon, caretDownIcon, flagIcon, closeIcon, menuIcon },
  expose: ["focus"],
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
        const validTypes = [
          "primary",
          "secondary",
          "inherit",
          "invisible",
          "invisible-bright",
          "invisible-dark",
          "invisible-shadow",
          "round",
          "square",
          "big-icon",
          "big",
          "outline-bright",
        ];
        const types = value.split(" ");
        for (const type of types)
          if (!validTypes.includes(type)) {
            console.error(`Unknown button type '${type}'. `);
            return false;
          }
        return true;
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
  computed: {
    slotHasContent: function () {
      return !!this.$slots.default && !!this.$slots.default[0];
    },
  },
  methods: {
    focus: function () {
      this.$refs.link.focus();
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

    &:hover {
      color: $white;
      background-color: $red;
    }
  }

  &.secondary {
    color: $white;
    background-color: $gray-13;

    &:hover {
      color: $white;
      background-color: $orange;
    }

    &:active {
      color: $white;
      background-color: $red;
    }
  }

  &.inherit {
    color: inherit;

    &:hover {
      color: inherit;
    }
  }

  &.invisible {
    // This ruleset is intentionally left blank.
    // The invisible style is applied when no variant class is added to `.simple-button`.
  }

  &.invisible-bright {
    color: $white;

    &:hover {
      color: $white;
      background-color: $bright-20;
    }

    &:active {
      background-color: $bright-30;
    }
  }

  &.invisible-dark {
    color: $gray-13;

    &:hover {
      color: $gray-13;
      background-color: $dark-10;
    }

    &:active {
      background-color: $dark-20;
    }
  }

  &.invisible-shadow {
    color: $gray-13;
    box-shadow: 0 0.2em 1em $dark-10;
    border: none;

    &:hover {
      color: $gray-13;
      background-color: $dark-10;
    }

    &:active {
      background-color: $dark-20;
    }

    &[aria-selected="true"] {
      color: $white;
      background-color: $gray-13;
    }
  }

  &.round {
    border-radius: 1.25em;
  }

  &.big-icon {
    .simple-button-icon {
      width: 1.5em;
      height: 1.5em;
    }
  }

  &.square {
    width: 2.5em;
    height: 2.5em;
    padding: 0.5em;
  }

  &.big {
    height: 3em;
    padding: 0.75em 1.5em;

    &.square {
      width: 3em;
      padding: 0.75em;
    }
  }

  &.outline-bright {
    border: 0.1em solid $white;
    background-color: none;
    color: $white;

    &:hover,
    &:focus {
      background-color: $orange;
      color: $gray-13;
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

  & ~ * {
    margin-left: 0.5em;
  }

  * ~ & {
    margin-left: 0.5em;
  }
}
</style>