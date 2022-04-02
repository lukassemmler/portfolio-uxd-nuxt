<template>
  <div class="markdown-block" v-html="markupProcessed"></div>
</template>

<script>
import {
  replacePlaceholders as renderPlaceholders,
  replaceLinksWithLocalizedLinks as renderLocalizedLinks,
} from "~/assets/lib/string-util";
export default {
  props: {
    markup: {
      type: String,
      required: true,
    },
    format: {
      type: Object,
      required: false,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    markupProcessed: function () {
      const { $md, localePath, format: placeholders, markup } = this;
      if ($md === undefined)
        throw new Error(
          `Cannot find instance property '$md'. Make sure you have '@nuxtjs/markdownit' installed. `
        );
      if (localePath === undefined)
        throw new Error(
          `Cannot find instance function 'localePath()'. Make sure you have '@nuxtjs/i18n' installed. `
        );
      let formattedMarkup = markup;
      if (placeholders !== null)
        formattedMarkup = renderPlaceholders(formattedMarkup, placeholders);
      formattedMarkup = renderLocalizedLinks(formattedMarkup, localePath);
      return $md.render(formattedMarkup);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>