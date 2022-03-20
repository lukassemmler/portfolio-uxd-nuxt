<template>
  <project-template
    background="bg-gradient-gray"
    :title="$t('meta-title_design-booklet')"
  >
    <template v-slot:header>
      <div class="container huge">
        <media-gallery gridModifiers="cols-2">
          <div class="cell">
            <simple-image
              class="rounded"
              src="design-booklet/Booklet Front.jpg"
              :alt="$t('alt_design-booklet_front')"
              ratio="3-by-2"
              sizes="xs:400px sm:640px md:960px lg:1200px"
            ></simple-image>
          </div>
          <div class="cell">
            <simple-image
              class="rounded"
              src="design-booklet/Booklet Sketches.jpg"
              :alt="$t('alt_design-booklet_sketches')"
              ratio="3-by-2"
              sizes="xs:400px sm:640px md:960px lg:1200px"
            ></simple-image>
          </div>
          <div class="cell">
            <simple-image
              class="rounded"
              src="design-booklet/Booklet Squares Heading.jpg"
              :alt="$t('alt_design-booklet_squares-heading')"
              ratio="3-by-2"
              sizes="xs:400px sm:640px md:960px lg:1200px"
            ></simple-image>
          </div>
          <div class="cell">
            <simple-image
              class="rounded"
              src="design-booklet/Booklet Spiralization.jpg"
              :alt="$t('alt_design-booklet_binding')"
              ratio="3-by-2"
              sizes="xs:400px sm:640px md:960px lg:1200px"
            ></simple-image>
          </div>
        </media-gallery>
      </div>
      <div class="container huge">
        <div class="pillar-container">
          <div class="pillar-row">
            <div class="pillar-col-8">
              <project-meta
                :name="$t('project-summary-name_design-booklet')"
                :tasks="$t('project-summary-tasks_design-booklet')"
                :format="$t('project-summary-format_design-booklet')"
                :lecture="$t('project-summary-client_design-booklet')"
                :date="$t('project-summary-date_design-booklet')"
              ></project-meta>
            </div>
            <div class="pillar-col-4">
              <project-tools
                :tools="[
                  { iconId: 'AdobeIndesign', label: 'Indesign' },
                  { iconId: 'AdobeIllustrator', label: 'Illustrator' },
                  { iconId: 'AdobePhotoshop', label: 'Photoshop' },
                ]"
              ></project-tools>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <!-- TODO Fix links in project pagination -->
      <project-pagination
        :previousTitle="$t('project-nav_data-visualization')"
        previousLink="projects/data-visualization"
        previousColor="bg-hover-blue"
        :nextTitle="$t('project-nav_3d-modelling')"
        nextLink="projects/3d-modelling"
        nextColor="bg-hover-pink"
      ></project-pagination>
    </template>
  </project-template>
</template>

<script>
import IconItem from "~/components/IconItem.vue";
import MediaGallery from "~/components/MediaGallery.vue";
import ProjectMeta from "~/components/ProjectMeta.vue";
import ProjectTools from "~/components/ProjectTools.vue";
import ProjectTemplate from "~/templates/project.vue";
export default {
  components: {
    ProjectTemplate,
    MediaGallery,
    ProjectMeta,
    IconItem,
    ProjectTools,
  },
};
</script>

<style lang="scss" scoped>
</style>