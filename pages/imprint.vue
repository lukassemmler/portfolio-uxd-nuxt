<template>
  <div>
    <header>
      <div class="container small">
        <h1>{{ $t("heading_imprint") }}</h1>
      </div>
    </header>

    <section id="section-address" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_address')"
          id="address"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_address').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-contact" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_contact')"
          id="contact"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_contact').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-accountability-for-content" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_accountability-for-content')"
          id="accountability-for-content"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_accountability-for-content').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-accountability-for-links" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_accountability-for-links')"
          id="accountability-for-links"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_accountability-for-links').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-copyright" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_copyright')"
          id="copyright"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_copyright').join('')"
        ></markdown-block>
        <markdown-block :markup="$t('text_imprint_source')"></markdown-block>
      </div>
    </section>
    Test {{ $pagemeta('test-man')}}
  </div>
</template>

<script>
import MarkdownBlock from "~/components/MarkdownBlock.vue";
import { getMetaData } from "~/assets/lib/meta-data";
export default {
  components: { MarkdownBlock },
  layout: "vanilla",
  head() {
    return getMetaData({
      url: this.$config.baseUrl + this.$route.path,
      siteName: this.$t("label_site-name"),
      title: this.$t(""),
      titleTemplate: "%s \u2013 Lukas Semmler",
      description: this.$t("meta-description_imprint"),
      keywords: this.$t("meta-keywords_imprint"),
      author: this.$t("meta-author_imprint"),
      thumbnail: "/thumbnail/Thumbnail Design Booklet.jpg",
      thumbnailAlt: this.$t("alt_thumbnail_general"),
      themeColor: "#4a4a4a",
    });
  },
};
</script>

<style lang="scss" scoped>
</style>