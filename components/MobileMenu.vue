<template>
  <div
    id="mobile-menu"
    class="mobile-menu"
    :class="{ inverted, hidden: !visible && closed }"
    ref="mobileMenu"
  >
    <transition name="fade-top" v-on:after-leave="onFadedOut">
      <div class="mobile-menu-content" v-show="visible">
        <div class="mobile-menu-header container huge">
          <simple-button
            :type="(inverted ? 'outline-bright' : 'secondary') + ' big'"
            old-type="secondary big"
            :target="localePath('/')"
            :alt="$t('meta-title_about')"
            ref="logo"
            >Lukas Semmler</simple-button
          >
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
    </transition>
    <transition name="fade"
      ><a
        v-show="visible"
        class="mobile-menu-backdrop"
        href="#"
        tabindex="-1"
        @click.prevent="hide"
      ></a
    ></transition>
  </div>
</template>

<script>
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
      // "Visible" is active from the start of the entering animation to the START of the leaving animation.
      // "Closed" is active from the start of the entering animation to the END of the leaving animation.
      // This is a weird workaround for using a multipart transition in this component, because otherwise the leaving
      // transition gets cut off.
      // For some reason, this does not occur when using a single animation in `<transition>`, but as written before,
      // we have a combined, multipart animation in this case.
      // Maybe there is a better way to this, but this workaround is enough for now.
      visible: false,
      closed: true,
    };
  },
  methods: {
    onBlur: function () {
      console.log("Blurred element!");
      // Trap the focus inside the mobile menu when it is opened, otherwise it can get very confusing.
      this.$refs.logo.focus();
    },
    onFadedOut: function () {
      console.log("Faded out!");
      this.closed = true;
    },
    show: function () {
      this.visible = true;
      this.closed = false;
      this.$emit("shown");
    },
    hide: function () {
      this.visible = false;
      this.$emit("hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu,
#mobile-menu {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1.25em;

  &.hidden {
    display: none;
  }

  &:target {
    // For some reason, the selector `&:focus-within` is not working to keep the mobile menu open when the lang menu is clicked.
    // This is intended as fallback if JavaScript could not be loaded. But there is no need to fix this now, as the user
    // can use the JavaScript-less lang menu when the desktop breakpoint is activated.
    &,
    .mobile-menu-content,
    .mobile-menu-backdrop {
      // It hurts my heart a little, but we have to use `!important` here.
      // When using `v-show="someExpression"`, if `someExpression` is falsy, an inline style with `display: none;` is inserted.
      // There is no cool specificity trick to work around that, so we will resort to using `!important` in this rare case.
      display: block !important;
    }
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
  background-color: $dark-80;
  display: block;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>