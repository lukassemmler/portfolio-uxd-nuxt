<template>
  <transition name="fade-top">
    <div
      id="mobile-menu"
      class="mobile-menu"
      :class="{ inverted, visible }"
      ref="mobileMenu"
    >
      <div class="mobile-menu-content">
        <div class="mobile-menu-header container huge">
          <lukas-logo :inverted="inverted" ref="logo"></lukas-logo>
          <div class="mobile-menu-close flex-edge-right">
            <simple-button
              target="#"
              type="inherit round big-icon square"
              prefixedIcon="close"
              :aria-label="$t('component_banner_close')"
              role="button"
              @click.prevent="hide"
            ></simple-button>
          </div>
        </div>
        <div class="mobile-menu-main container huge">
          <header-nav
            class="vertical"
            :sites="navigation"
            :inverted="inverted"
          ></header-nav>
          <lang-menu
            class="flex-edge-right"
            menu-id="lang-menu-mobile"
            :inverted="inverted"
            @buttonBlurred="onBlur"
          ></lang-menu>
        </div>
      </div>
      <transition name="fade"
        ><a
          class="mobile-menu-backdrop"
          href="#"
          tabindex="-1"
          @click.prevent="hide"
        ></a
      ></transition>
    </div>
  </transition>
</template>

<script>
// TODO Fix animation not being shown when mobile menu gets displayed.
export default {
  export: ["show", "hide"],
  props: {
    inverted: {
      type: Boolean,
      required: false,
    },
    navigation: {
      type: Array,
      required: false,
    },
  },
  data: function () {
    return {
      visible: false,
    };
  },
  methods: {
    onBlur: function () {
      console.log("Blurred element!");
      // Trap the focus inside the mobile menu when it is opened, otherwise it can get very confusing.
      this.$refs.logo.focus();
    },
    show: function () {
      this.visible = true;
      this.$emit("shown");
    },
    hide: function () {
      this.visible = false;
      console.log("hide menu");
      this.$emit("hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu,
#mobile-menu {
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1.25em;

  &:target,
  &:focus-within,
  &.visible {
    display: block;
  }

  &.inverted {
    .mobile-menu-content {
      background-color: $black;
    }
  }
}

.mobile-menu-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  box-shadow: 0 1em 2em $dark-20;
  padding-top: 1em;
  padding-bottom: 1em;
}

.mobile-menu-content,
.mobile-menu-main {
  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
}

.mobile-menu-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mobile-menu-backdrop {
  background-color: $dark-50;
  display: block;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>