<template>
  <div
    class="lang-menu"
    :class="{ expanded, inverted }"
    v-click-outside="onOutsideClick"
  >
    <div class="lang-menu-current-lang">
      <a
        id="lang-menu-open-link"
        href="#lang-menu"
        :title="$t('label_select-language')"
        @click.prevent="onOpenLinkClick"
      >
        <div class="current-lang-row">
          <span class="icon icon-flag"><icon-flag /></span>
          <span class="lang-label" v-html="$t(langLabelId)"></span>
          <span class="icon icon-dropdown">
            <icon-arrow-down />
          </span>
        </div>
      </a>
    </div>
    <div class="lang-menu-options">
      <ul>
        <li>
          <nuxt-link
            class="lang-menu-option-single"
            :to="switchLocalePath('de')"
            v-html="$t('label_lang_const_german')"
          ></nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="lang-menu-option-single"
            :to="switchLocalePath('en')"
            v-html="$t('label_lang_const_english')"
          ></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconFlag from "~/assets/icons/material-flag.svg?inline";
import IconArrowDown from "~/assets/icons/material-keyboard-arrow-down.svg?inline";

export default {
  components: { IconFlag, IconArrowDown },
  props: {
    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      expanded: false,
    };
  },
  computed: {
    langLabelId: function () {
      const locale = this.$i18n.locale;
      switch (locale) {
        case "en":
          return "label_lang_const_english";
        case "de":
          return "label_lang_const_german";
        default:
          return "label_lang_default";
      }
    },
  },
  methods: {
    onOpenLinkClick: function () {
      this.expanded = !this.expanded;
    },
    onOutsideClick: function () {
      if (!this.expanded) return;
      this.expanded = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-menu {
  position: relative;
  margin-left: auto;

  &:target,
  &.expanded {
    background-color: $dark-05;

    .lang-menu-options {
      display: block;
    }

    .icon-dropdown {
      transform: rotate(180deg);
    }
  }
  &.inverted {
    color: $bright-60;
    #lang-menu-open-link {
      color: $bright-60;
      &:hover {
        color: $white;
      }
    }
  }
}

.lang-menu-current-lang {
  &:hover {
    background-color: $dark-10;
  }
}

#lang-menu-open-link {
  display: inline-flex;
  align-items: center;
  padding: $sp 0.5rem;
  text-decoration: none;
  color: $gray-50;

  &:hover {
    color: $orange;
  }

  &:active {
    background-color: $dark-05;
  }
}

.lang-menu-options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: none;
  background-color: $white;
  box-shadow: 0 0.3rem 1rem $dark-20;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .lang-menu-option-single {
    position: relative;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding: $sp 0.5rem;
    text-align: center;
    color: $gray-60;

    &:hover,
    &:focus {
      color: $white;
      background-color: $orange;
    }

    &.link-active:before {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 0.25em;
      height: 100%;
      background-color: $orange;
      border-radius: 0 1.125em 1.125em 0;
      content: "";
    }
  }
}

.current-lang-row {
  display: inline-flex;
  flex-flow: row nowrap;
}

.icon-flag,
.icon-dropdown {
  fill: currentColor;
}

.icon-flag {
  margin-right: 0.25em;
}

.icon-dropdown {
  transition: transform 0.05s linear;
}
</style>