<template>
  <div>
    {{$route.name}}
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    // $nuxtI18nHead might be null when running the static generation and could crash: https://i18n.nuxtjs.org/seo#setup
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
  mounted() {
console.log(this.$nuxt.$route.name);
//console.log(this.$nuxt.$route.name);
alert("bobo");
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
@import "~/assets/style/_background.scss";
@import "~/assets/style/_decoration.scss";
@import "~/assets/style/_icon.scss";
@import "~/assets/style/_page.scss";
@import "~/assets/style/_ratio-box.scss";
</style>