<template>
  <div>
    <page-header></page-header>
    <div class="pillar-container gapped-h gapped-v">
      <div class="pillar-row">
        <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
          <project-thumbnail
            src="placeholder.jpg"
            alt="alt"
            sizes="sm:640px md:960px lg:1200px"
            ratio="16-by-9"
            :title="$t('project-title-raw_power-ui')"
            link="/projects/power-ui"
            :linkTitle="$t('project-link-title_power-ui')"
            :tags="$t('alt_thumbnail_power-ui')"
          ></project-thumbnail>
          <!--
          {{> project-thumbnail 
              title=(str "project-title-raw_power-ui") 
              linkTo="projects/power-ui" 
              linkTitle=(str "project-link-title_power-ui") 
              tags=(str "project-subtitle_power-ui") 
              src="thumbnail/Thumbnail%20Power-UI.jpg" 
              alt=(str "alt_thumbnail_power-ui") 
              ratio="4-by-3" 
              isResized=true }}
              -->
        </div>
        <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
          <!--
          {{> project-thumbnail 
              title=(str "project-title-raw_data-visualization") 
              linkTo="projects/data-visualization" 
              linkTitle=(str "project-link-title_data-visualization") 
              tags=(str "project-subtitle_data-visualization") 
              src="thumbnail/Thumbnail%20Data%20Visualization.jpg" 
              alt=(str "alt_thumbnail_data-visualization") 
              ratio="4-by-3" 
              isResized=true }}
              -->
        </div>
        <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
          <!--
          {{> project-thumbnail 
              title=(str "project-title-raw_design-booklet") 
              linkTo="projects/design-booklet" 
              linkTitle=(str "project-link-title_design-booklet") 
              tags=(str "project-subtitle_design-booklet") 
              src="thumbnail/Thumbnail%20Design%20Booklet.jpg" 
              alt=(str "alt_thumbnail_design-booklet") 
              ratio="4-by-3" 
              isResized=true }}
              -->
        </div>
        <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
          <!--
          {{> project-thumbnail 
              title=(str "project-title-raw_3d-modelling") 
              linkTo="projects/3d-modelling" 
              linkTitle=(str "project-link-title_3d-modelling") 
              tags=(str "project-subtitle_3d-modelling") 
              src="thumbnail/Thumbnail%203D%20Modelling.jpg" 
              alt=(str "alt_thumbnail_3d-modelling") 
              ratio="4-by-3" 
              isResized=true }}
              -->
        </div>
        <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
          <!--
          {{> project-thumbnail 
              title=(str "project-title-raw_steering-wheel") 
              linkTo="projects/steering-wheel" 
              linkTitle=(str "project-link-title_steering-wheel") 
              tags=(str "project-subtitle_steering-wheel") 
              src="thumbnail/Thumbnail%20Steering%20Wheel.jpg" 
              alt=(str "alt_thumbnail_steering-wheel") 
              ratio="4-by-3" 
              isResized=true }}
              -->
        </div>
        <div class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4">
          <!--
          {{> project-thumbnail 
              title=(str "project-title-raw_infotainment-system") 
              linkTo="projects/infotainment-system" 
              linkTitle=(str "project-link-title_infotainment-system") 
              tags=(str "project-subtitle_infotainment-system") 
              src="thumbnail/Thumbnail%20Infotainment%20System.jpg" 
              alt=(str "alt_thumbnail_infotainment-system") 
              ratio="4-by-3" 
              isResized=true }}
              -->
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "~/components/PageFooter.vue";
import PageHeader from "~/components/PageHeader.vue";
import ProjectThumbnail from "~/components/ProjectThumbnail.vue";
export default {};
</script>

<style>
</style>