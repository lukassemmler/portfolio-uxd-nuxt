<template>
  <dropdown-button
    menu-id="lang-menu"
    :menu="[
      {
        label: $t('label_lang_const_german'),
        link: switchLocalePath('de'),
      },
      {
        label: $t('label_lang_const_english'),
        link: switchLocalePath('en'),
      },
    ]"
    prefixed-icon="flag"
    menu-orientation="bottom-left"
    :title="$t('label_select-language')"
    :button-type="inverted ? 'invisible-bright' : 'invisible-dark'"
    ><span v-html="$t(langLabelId)"></span
  ></dropdown-button>
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
};
</script>

<style lang="scss" scoped>
</style>