<template>
  <div class="content">
    <page-header
      ><template v-slot:announcement>
        <alert-banner
          intro="Holy Smokes!"
          message="I dropped my sandwich."
        ></alert-banner></template
    ></page-header>
    <Nuxt />
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {};
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