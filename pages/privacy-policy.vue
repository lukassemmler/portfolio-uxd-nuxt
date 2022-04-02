<template>
  <div>
    <header>
      <div class="container small">
        <h1 v-html="$t('heading_privacy-policy')"></h1>
      </div>
    </header>

    <section id="section-data-protection" class="section">
      <div class="container small">
        <h2
          id="data-protection"
          v-html="$t('heading_privacy-policy_data-protection')"
        ></h2>
        <markdown-block
          :markup="$t('text_privacy-policy_data-protection').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-log-files" class="section">
      <div class="container small">
        <h2 id="log-files" v-html="$t('heading_privacy-policy_log-files')"></h2>
        <markdown-block
          :markup="$t('text_privacy-policy_log-files').join('')"
        ></markdown-block>
        <markdown-block
          :markup="$t('text_privacy-policy_source')"
        ></markdown-block>
      </div>
    </section>
  </div>
</template>

<script>
import { getMetaData } from "~/assets/lib/meta-data";
import MarkdownBlock from "~/components/MarkdownBlock.vue";
export default {
  components: { MarkdownBlock },
  layout: "vanilla",
  head() {
    return getMetaData({
      url: this.$config.baseUrl + this.$route.path,
      siteName: this.$t("label_site-name"),
      title: this.$t("meta-title_privacy-policy"),
      titleTemplate: "%s \u2013 Lukas Semmler",
      description: this.$t("meta-description_privacy-policy"),
      keywords: this.$t("meta-keywords_privacy-policy"),
      author: this.$t("meta-author_privacy-policy"),
      thumbnail: "/thumbnail/Thumbnail Design Booklet.jpg",
      thumbnailAlt: this.$t("alt_thumbnail_general"),
    });
  },
};
</script>

<style lang="scss" scoped>
</style>