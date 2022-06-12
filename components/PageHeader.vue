<template>
  <div class="page-header-container">
    <header id="page-header" :class="[{ inverted, fixed }, background]">
      <announcement-area
        class="page-header-announcement-global"
      ></announcement-area>
      <div v-if="slotHasContent" class="page-header-announcement-local">
        <div class="container huge">
          <slot></slot>
        </div>
      </div>
      <div class="page-header-mobile container huge">
        <simple-button
          :type="(inverted ? 'outline-bright' : 'secondary') + ' big'"
          old-type="secondary big"
          :target="localePath('/')"
          :alt="$t('meta-title_about')"
          ref="logoButton"
          >Lukas Semmler</simple-button
        >
        <simple-button
          class="flex-edge-right"
          :type="(inverted ? 'invisible-bright' : 'invisible-dark') + ' big'"
          prefixed-icon="menu"
          target="#mobile-menu"
          :alt="$t('meta-title_about')"
          @click.prevent="onMenuButtonClick"
          ref="menuButton"
          >Menü</simple-button
        >
      </div>
      <mobile-menu
        :inverted="inverted"
        :navigation="navigation"
        ref="mobileMenu"
        @hidden="onMobileMenuHidden"
      ></mobile-menu>
      <div class="page-header-desktop">
        <div class="container huge">
          <div class="page-header-inner">
            <simple-button
              :type="(inverted ? 'outline-bright' : 'secondary') + ' big'"
              old-type="secondary big"
              :target="localePath('/')"
              :alt="$t('meta-title_about')"
              ref="menuButton"
              >Lukas Semmler</simple-button
            >
            <header-nav :sites="navigation" :inverted="inverted"></header-nav>
            <lang-menu
              class="flex-edge-right"
              menu-id="lang-menu"
              :inverted="inverted"
            ></lang-menu>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import navigation from "assets/data/nav.json";
import LukasLogo from "./LukasLogo.vue";
import HeaderNav from "./HeaderNav.vue";
import LangMenu from "./LangMenu.vue";
import AnnouncementArea from "./AnnouncementArea.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: { LukasLogo, HeaderNav, LangMenu, AnnouncementArea, MobileMenu },
  props: {
    inverted: {
      type: Boolean,
      required: false,
    },
    background: {
      type: String,
      default: "bg-white",
      required: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      navigation: navigation.trees.header,
    };
  },
  computed: {
    slotHasContent: function () {
      // TODO migration Vue2 --> Vue3: Has to be a function call in Vue3, e.g. `this.$slots.announcement()`.
      // See https://stackoverflow.com/questions/44077277/only-show-slot-if-it-has-content#comment119538305_44077358
      return !!this.$slots.default && !!this.$slots.default[0];
    },
  },
  methods: {
    onMenuButtonClick: function () {
      this.$refs.mobileMenu.show();
    },
    onMobileMenuHidden: function () {
      // We have to focus the menu button when the close button in the mobile menu is clicked.
      // For compatibility reasons, the mobile menu will stay open whenever any element inside it is focused.
      // The `:focus-within` CSS selector is used, so the mobile menu is still usable when all JavaScript is disabled.
      this.$refs.menuButton.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.page-header-container {
  height: 5em;
  margin-bottom: $sp * 1;
}

#page-header {
  height: 5em;
  z-index: $z-index-header;
  // margin-top causes the <body> to be offset (because the header is on top of page)
  // So instead there is a vertical padding
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

  & + * {
    margin-top: 5em;
  }

  &.fixed {
    position: fixed;
  }

  @include breakpoint-upwards($breakpoint-big) {
    .page-header-mobile {
      display: none;
    }

    .page-header-desktop {
      display: block;
    }
  }
}

.page-header-mobile {
  display: flex;
  flex-direction: row;

  & > *:not(:last-child) {
    margin-right: $sp;
  }
}

.page-header-desktop {
  display: none;
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

.page-header-announcement-local {
  margin-bottom: 1em;
}
</style>