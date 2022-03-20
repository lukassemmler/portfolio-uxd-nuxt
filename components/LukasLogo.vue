<template>
  <nuxt-link :to="localePath('/')"
    ><span
      class="lukas-logo"
      :class="{ inverted }"
      v-html="$t('label_logo')"
    ></span
  ></nuxt-link>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.lukas-logo {
  @extend %white-font-on-dark-background;
  width: 3em;
  box-sizing: border-box;
  display: inline-block;
  background-color: $gray-90;
  padding: $sp ($sp * 0.5);
  border-radius: 0.5rem;
  text-align: center;
  white-space: nowrap;

  @media screen and (min-width: $breakpoint-semi-big) {
    width: auto;
    padding: $sp ($sp * 1.5);
  }

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
</style>