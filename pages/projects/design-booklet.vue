<template>
  <project-template
    background="bg-gradient-gray"
    headerBackground="bg-blue-black"
    :title="$t('meta-title_design-booklet')"
    :meta-name="$t('project-summary-name_design-booklet')"
    :meta-tasks="$t('project-summary-tasks_design-booklet')"
    :meta-format="$t('project-summary-format_design-booklet')"
    :meta-lecture="$t('project-summary-client_design-booklet')"
    :meta-date="$t('project-summary-date_design-booklet')"
    :meta-title="$t('meta-title_design-booklet')"
    :meta-author="$t('meta-author_design-booklet')"
    :meta-description="$t('meta-description_design-booklet')"
    :meta-keywords="$t('meta-keywords_design-booklet')"
    :project-tools="[
      { iconId: 'AdobeIndesign', label: $t('label_product_adobe-indesign') },
      { iconId: 'AdobeIllustrator', label: $t('label_product_adobe-illustrator') },
      { iconId: 'AdobePhotoshop', label: $t('label_product_adobe-photoshop') },
    ]"
    nav-id="projects.designBooklet"
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
    </template>
    <template v-slot:content>
      <!-- TODO Fix links in project pagination -->
      <section id="section-overview" class="section">
        <div class="container small">
          <h2 id="overview" class="sr-only">{{ $t("heading_overview") }}</h2>
          <p>
            {{ $t("text_design-booklet").join("") }}
          </p>
        </div>
      </section>
    </template>
  </project-template>
</template>

<script>
import IconItem from "~/components/IconItem.vue";
import MediaGallery from "~/components/MediaGallery.vue";
import ProjectMeta from "~/components/ProjectMeta.vue";
import ProjectTools from "~/components/ProjectTools.vue";
import ProjectTemplate from "~/components/ProjectTemplate.vue";

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