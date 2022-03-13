<template>
  <div>
    <h1>Privacy Policy</h1>
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