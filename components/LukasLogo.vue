<template>
  <nuxt-link :to="localePath('/')"
    ><span class="lukas-logo" :class="inversed" v-html="$t('label_logo')"></span
  ></nuxt-link>
</template>

<script>
export default {
  props: {
    inversed: {
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
  text-align: center;
  white-space: nowrap;

  @media screen and (min-width: $breakpoint-semi-big) {
    width: auto;
    padding: $sp ($sp * 1.5);
  }

  &.inversed {
    background: none;
    outline: 0.1em solid $white;
  }

  &:hover, &:focus {
    background-color: $orange;
    color: $black;
  }
}
</style>