<template>
  <div>
    <page-header></page-header>
    <div class="container huge">
      <div class="pillar-container gapped-h gapped-v">
        <div class="pillar-row">
          <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
            <post-teaser
              class="centered"
              link="/projects/power-ui"
              :linkTitle="$t('project-link-title_power-ui')"
              src="thumbnail/Thumbnail Power-UI.jpg"
              :alt="$t('alt_thumbnail_power-ui')"
              ratio="4-by-3"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t('project-title-raw_power-ui')"
              :subtitle="$t('project-subtitle_power-ui')"
            ></post-teaser>
          </div>
          <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
            <post-teaser
              class="centered"
              link="/projects/data-visualization"
              :linkTitle="$t('project-link-title_data-visualization')"
              src="thumbnail/Thumbnail Data Visualization.jpg"
              :alt="$t('alt_thumbnail_data-visualization')"
              ratio="4-by-3"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t('project-title-raw_data-visualization')"
              :subtitle="$t('project-subtitle_data-visualization')"
            ></post-teaser>
          </div>
          <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
            <post-teaser
              class="centered"
              link="/projects/design-booklet"
              :linkTitle="$t('project-link-title_design-booklet')"
              src="thumbnail/Thumbnail Design Booklet.jpg"
              :alt="$t('alt_thumbnail_design-booklet')"
              ratio="4-by-3"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t('project-title-raw_design-booklet')"
              :subtitle="$t('project-subtitle_design-booklet')"
            ></post-teaser>
          </div>
          <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
            <post-teaser
              class="centered"
              link="/projects/3d-modelling"
              :linkTitle="$t('project-link-title_3d-modelling')"
              src="thumbnail/Thumbnail 3D Modelling.jpg"
              :alt="$t('alt_thumbnail_3d-modelling')"
              ratio="4-by-3"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t('project-title-raw_3d-modelling')"
              :subtitle="$t('project-subtitle_3d-modelling')"
            ></post-teaser>
          </div>
          <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
            <post-teaser
              class="centered"
              link="/projects/steering-wheel"
              :linkTitle="$t('project-link-title_steering-wheel')"
              src="thumbnail/Thumbnail Steering Wheel.jpg"
              :alt="$t('alt_thumbnail_steering-wheel')"
              ratio="4-by-3"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t('project-title-raw_steering-wheel')"
              :subtitle="$t('project-subtitle_steering-wheel')"
            ></post-teaser>
          </div>
          <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
            <post-teaser
              class="centered"
              link="/projects/infotainment-system"
              :linkTitle="$t('project-link-title_infotainment-system')"
              src="thumbnail/Thumbnail Infotainment System.jpg"
              :alt="$t('alt_thumbnail_infotainment-system')"
              ratio="4-by-3"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t('project-title-raw_infotainment-system')"
              :subtitle="$t('project-subtitle_infotainment-system')"
            ></post-teaser>
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "~/components/PageFooter.vue";
import PageHeader from "~/components/PageHeader.vue";
import PostTeaser from "~/components/PostTeaser.vue";
export default {};
</script>

<style>
</style>