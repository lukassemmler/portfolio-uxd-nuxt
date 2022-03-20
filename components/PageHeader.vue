<template>
  <header id="page-header" :class="{inverted}">
    <div class="container huge">
      <div class="page-header-inner">
        <lukas-logo :inverted="inverted"></lukas-logo>
        <header-nav :sites="navigation" :inverted="inverted"></header-nav>
        <lang-menu :inverted="inverted"></lang-menu>
      </div>
    </div>
  </header>
</template>

<script>
import navigation from "assets/data/nav.json";
import LukasLogo from "./LukasLogo.vue";
import HeaderNav from "./HeaderNav.vue";
import LangMenu from './LangMenu.vue';
export default {
  components: { LukasLogo, HeaderNav, LangMenu },
  props: {
    inverted: {
      type: Boolean,
      required: false,
    },
  },
  data: function () {
    return {
      navigation: navigation.trees.header,
    };
  },
};
</script>

<style lang="scss" scoped>
#page-header {
  position: relative;
  z-index: $z-index-header;
  // margin-top causes the <body> to be offset (because the header is on top of page)
  // So instead there is a vertical padding
  margin-bottom: $sp * 1;
  padding-top: $sp;
  padding-bottom: $sp;
  width: 100%;
  box-sizing: border-box;

  &.inverted {
    color: $white;

    a {
      color: $white;
    }
  }

  &.on-background {
    position: absolute;
    top: 0;
  }
}

.page-header-inner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: $sp;

    @media screen and (min-width: $breakpoint-semi-big) {
      margin-right: $sp * 1.5;
    }
  }
}

.full-name {
  display: none;

  @media screen and (min-width: $breakpoint-semi-big) {
    display: inline;
  }
}
</style>