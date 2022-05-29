<template>
  <nuxt-link :to="localePath('/')" class="logo-link"
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
  width: auto;
  box-sizing: border-box;
  display: inline-block;
  background-color: $gray-90;
    padding: $sp ($sp * 1.5);
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