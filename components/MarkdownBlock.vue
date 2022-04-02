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
    tag: {
      type: String,
      required: false,
      default: "div",
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
  render(h) {
    // https://v2.vuejs.org/v2/guide/render-function.html
    return h(this.tag, {
      class: "markdown-block",
      domProps: {
        innerHTML: this.markupProcessed,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
</style>