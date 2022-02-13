<template>
  <div>
    <page-header></page-header>
    <project-thumbnail
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
    ></project-thumbnail>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "~/components/PageFooter.vue";
import PageHeader from "~/components/PageHeader.vue";
import ProjectThumbnail from "~/components/ProjectThumbnail.vue";
export default {
  components: { PageHeader, PageFooter, ProjectThumbnail },
};
</script>

<style>
</style>