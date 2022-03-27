<template>
  <div>
    <header>
      <div class="container-small">
        <h1 v-html="$t('heading_privacy-policy')"></h1>
      </div>
    </header>
    
    <section id="section-data-protection" class="section">
      <div class="container-small">
        <h2
          id="data-protection"
          v-html="$t('heading_privacy-policy_data-protection')"
        ></h2>
        <div
          class="text"
          v-markdown="$t('text_privacy-policy_data-protection').join('')"
        ></div>
      </div>
    </section>

    <section id="section-log-files" class="section">
      <div class="container-small">
        <h2 id="log-files" v-html="$t('heading_privacy-policy_log-files')"></h2>
        <div
          class="text"
          v-markdown="$t('text_privacy-policy_log-files').join('')"
        ></div>
        <p v-markdown="$t('text_privacy-policy_source')"></p>
        <div v-html="'<h1>This is a great test!!!</h1>'"></div>
        <div v-test="'asdf'"></div>
        <div v-banana="'some-id'">I should have an id</div>
      </div>
    </section>
  </div>
</template>

<script>
import { getMetaData } from "~/assets/lib/meta-data";
export default {
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