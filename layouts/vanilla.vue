<template>
  <div class="content">
    <page-header></page-header>
    <Nuxt />
    <page-footer></page-footer>
  </div>
</template>

<script>
import navigation from "assets/data/nav.json";

const { pages } = navigation;
const pagesByPath = new Map();
console.log(pages)
//pages.forEach(page => pagesByPath.set(page.path, page));
for (const page of pages) {
  console.log(page.path)
  pagesByPath.set(page.path, page);
}
  console.log(pagesByPath.keys())

export default {
  layout: "default",
  mounted() {
    const route = this.$route.path;
    const page = pagesByPath.get(route);
    console.log(route)
  if (!page) return;
  console.log(this.$t(page.titleId));
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