<template>
  <div class="content">
    <page-header></page-header>
    <Nuxt />
    <page-footer></page-footer>
  </div>
</template>

<script>
import navigation from "assets/data/nav.json";
import { getMetaData } from "~/assets/lib/meta-data";

function getPagesByPath(pages) {
  const pagesByPath = new Map();
  pages.forEach((page) => pagesByPath.set(page.path, page));
  for (const page of pages)
    pagesByPath.set(page.path, page);
  return pagesByPath;
}

export default {
  layout: "default",
  data: function () {
    return {
      pageTitle: null,
      metaDescription: null,
      metaKeywords: null,
      metaAuthor: null,
      metaColor: null,
      thumbnailSrc: null,
      thumbnailAlt: null,
    };
  },
  created() {
    const { pages } = navigation;
    const pagesByPath = getPagesByPath(pages);
    const route = this.$route.path;
    const routePage = pagesByPath.get(route);
    if (!routePage)
      console.warn(`Could not find page meta data for route '${route}'. `);
    const page = routePage ?? {};
    //console.log("route:", route);
    //console.log("title id:", page);
    //console.log("title id:", this.$t(page.titleId));
    const { titleId, metaAuthorId, metaDescriptionId, metaKeywordsId, metaColor, thumbnailSrc, thumbnailAltId } = page;
    this.pageTitle = titleId ? `${this.$t(titleId)} \u2013 Lukas Semmler` : "Lukas Semmler";
    this.metaDescription = metaAuthorId;
    this.metaKeywords = metaDescriptionId;
    this.metaAuthor = metaKeywordsId;
    this.metaColor = metaColor ?? "#4a4a4a";
    this.thumbnailSrc = thumbnailSrc ?? "/thumbnail/Thumbnail Design Booklet.jpg";
    this.thumbnailAlt = thumbnailAltId ?? "alt_thumbnail_general";
  },
  head() {
    return getMetaData({
      url: this.$config.baseUrl + this.$route.path,
      siteName: this.$t("label_site-name"),
      title: this.pageTitle,
      titleTemplate: "%s",
      description: this.$t(this.metaDescription),
      keywords: this.$t(this.metaKeywords),
      author: this.$t(this.metaAuthor),
      thumbnail: this.thumbnailSrc,
      thumbnailAlt: this.$t(this.thumbnailAlt),
      themeColor: this.metaColor,
    });
  },
};
</script>

<style lang="scss">
@import "~/assets/style/_general.scss";
@import "~/assets/style/_layout-container.scss";
@import "~/assets/style/_layout-flex.scss";
@import "~/assets/style/_layout-grid.scss";
@import "~/assets/style/_layout-column.scss";
@import "~/assets/style/_button.scss";
@import "~/assets/style/_animation.scss";
</style>