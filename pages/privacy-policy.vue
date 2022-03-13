<template>
  <div>
    <h1>Privacy Policy</h1>
  </div>
</template>

<script>
export default {
  layout: "vanilla",
  head() {
    return {
      title: this.$t("meta-title_privacy-policy"),
      titleTemplate: "%s \u2013 Lukas Semmler",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta-description_privacy-policy"),
        },
        {
          property: "keywords",
          content: this.$t("meta-keywords_privacy-policy"),
        },
        {
          property: "author",
          content: this.$t("meta-author_privacy-policy"),
        },
        {
          property: "og:title",
          content: this.$t("meta-title_privacy-policy"),
          template: (chunk) => `${chunk} \u2013 Lukas Semmler`, // alternatively as template string: '%s - My page',
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:description",
          content: this.$t("meta-description_privacy-policy"),
        },
        {
          property: "og:image",
          content: this.$config.baseUrl + "/thumbnail/Thumbnail Design Booklet.jpg",
        },
        {
          property: "og:url",
          content: this.$config.baseUrl + this.$route.path,
        },
        {
          property: "og:site_name",
          content: this.$t("label_site-name"),
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image:alt",
          content: this.$t("alt_thumbnail_general"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>