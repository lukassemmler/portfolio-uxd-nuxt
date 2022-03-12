<template>
  <div class="container huge">
    <post-teaser
      class="horizontal"
      link="/projects/power-ui"
      :linkTitle="$t('project-link-title_power-ui')"
      src="thumbnail/Thumbnail Power-UI.jpg"
      :alt="$t('alt_thumbnail_power-ui')"
      ratio="4-by-3"
      sizes="xs:400px sm:640px md:960px lg:1200px"
      :title="$t('project-title-raw_power-ui')"
      :subtitle="$t('project-subtitle_power-ui')"
      :description="$t('project-description_power-ui').join(' ')"
      :tags="[
        $t('label_tag_ux-testing'),
        $t('label_tag_prototyping'),
        $t('label_tag_design-ui'),
        $t('label_tag_design-icon'),
        $t('label_tag_asset-creation'),
        $t('label_tag_coding-games'),
      ]"
    ></post-teaser>
    <post-teaser
      class="horizontal"
      link="/projects/data-visualization"
      :linkTitle="$t('project-link-title_data-visualization')"
      src="thumbnail/Thumbnail Data Visualization.jpg"
      :alt="$t('alt_thumbnail_data-visualization')"
      ratio="4-by-3"
      sizes="xs:400px sm:640px md:960px lg:1200px"
      :title="$t('project-title-raw_data-visualization')"
      :subtitle="$t('project-subtitle_data-visualization')"
      :description="$t('project-description_data-visualization').join(' ')"
      :tags="[
        $t('label_tag_user-survey'),
        $t('label_tag_sketches'),
        $t('label_tag_design-poster'),
      ]"
    ></post-teaser>
    <post-teaser
      class="horizontal"
      link="/projects/design-booklet"
      :linkTitle="$t('project-link-title_design-booklet')"
      src="thumbnail/Thumbnail Design Booklet.jpg"
      :alt="$t('alt_thumbnail_design-booklet')"
      ratio="4-by-3"
      sizes="xs:400px sm:640px md:960px lg:1200px"
      :title="$t('project-title-raw_design-booklet')"
      :subtitle="$t('project-subtitle_design-booklet')"
      :description="$t('project-description_design-booklet').join(' ')"
      :tags="[$t('label_tag_layout')]"
    ></post-teaser>
    <post-teaser
      class="horizontal"
      link="/projects/3d-modelling"
      :linkTitle="$t('project-link-title_3d-modelling')"
      src="thumbnail/Thumbnail 3D Modelling.jpg"
      :alt="$t('alt_thumbnail_3d-modelling')"
      ratio="4-by-3"
      sizes="xs:400px sm:640px md:960px lg:1200px"
      :title="$t('project-title-raw_3d-modelling')"
      :subtitle="$t('project-subtitle_3d-modelling')"
      :description="$t('project-description_3d-modelling').join(' ')"
      :tags="[$t('label_tag_3d-modelling')]"
    ></post-teaser>
    <post-teaser
      class="horizontal"
      link="/projects/steering-wheel"
      :linkTitle="$t('project-link-title_steering-wheel')"
      src="thumbnail/Thumbnail Steering Wheel.jpg"
      :alt="$t('alt_thumbnail_steering-wheel')"
      ratio="4-by-3"
      sizes="xs:400px sm:640px md:960px lg:1200px"
      :title="$t('project-title-raw_steering-wheel')"
      :subtitle="$t('project-subtitle_steering-wheel')"
      :description="$t('project-description_steering-wheel').join(' ')"
      :tags="[$t('label_tag_3d-modelling'), $t('label_tag_contest')]"
    ></post-teaser>
    <post-teaser
      class="horizontal"
      link="/projects/infotainment-system"
      :linkTitle="$t('project-link-title_infotainment-system')"
      src="thumbnail/Thumbnail Infotainment System.jpg"
      :alt="$t('alt_thumbnail_infotainment-system')"
      ratio="4-by-3"
      sizes="xs:400px sm:640px md:960px lg:1200px"
      :title="$t('project-title-raw_infotainment-system')"
      :subtitle="$t('project-subtitle_infotainment-system')"
      :description="$t('project-description_infotainment-system').join(' ')"
      :tags="[$t('label_tag_design-ui'), $t('label_tag_design-icon')]"
    ></post-teaser>
  </div>
</template>

<script>
import PageFooter from "~/components/PageFooter.vue";
import PageHeader from "~/components/PageHeader.vue";
import PostTeaser from "~/components/PostTeaser.vue";
export default {
  layout: "vanilla",
  components: { PageHeader, PageFooter, PostTeaser },
};
</script>

<style>
</style>