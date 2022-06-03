<template>
  <nuxt-link :to="localePath('/')" class="logo-link" ref="link"
    ><span
      class="lukas-logo"
      :class="{ inverted }"
      v-html="$t('label_logo')"
    ></span
  ></nuxt-link>
</template>

<script>
export default {
  expose: ["focus"],
  props: {
    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    focus: function () {
      this.$refs.link.$el.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.lukas-logo {
  @extend %white-font-on-dark-background;
  width: auto;
  height: 2.5em;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: $gray-90;
  padding: (0.5 * $sp) $sp;
  border-radius: 0.5rem;
  text-align: center;
  white-space: nowrap;

  &.inverted {
    background: none;
    outline: 0.1em solid $white;
  }

  &:hover,
  &:focus {
    background-color: $orange;
    color: $black;
  }
}

.logo-link {
  display: inline-block;
}
</style>