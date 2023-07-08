<template>
  <project-template
    background="bg-gradient-pink"
    :title="$t('meta-title_3d-modelling')"
    :meta-name="$t('project-summary-name_3d-modelling')"
    :meta-tasks="$t('project-summary-tasks_3d-modelling')"
    :meta-format="$t('project-summary-format_3d-modelling')"
    :meta-lecture="$t('project-summary-client_3d-modelling')"
    :meta-date="$t('project-summary-date_3d-modelling')"
    :meta-title="$t('meta-title_3d-modelling')"
    :meta-author="$t('meta-author_3d-modelling')"
    :meta-description="$t('meta-description_3d-modelling')"
    :meta-keywords="$t('meta-keywords_3d-modelling')"
    :project-tools="[{ iconId: 'Blender', label: $t('label_product_blender') }]"
    nav-id="projects.3dModelling"
  >
    <template v-slot:header>
      <!-- TODO: Add Sculptris as project tool -->
      <div class="container huge">
        <div class="pillar-container gapped-v gapped-h">
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="rounded"
                src="3d-modelling/Donuts.jpg"
                :alt="$t('alt_3d-modelling_donuts')"
                ratio="16-by-9"
                sizes="xs:400px sm:640px md:960px lg:1200px"
              ></simple-image>
            </div>
          </div>
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="rounded"
                src="3d-modelling/Man Bust.jpg"
                :alt="$t('alt_3d-modelling_man-bust')"
                ratio="16-by-9"
                sizes="xs:400px sm:640px md:960px lg:1200px"
              ></simple-image>
            </div>
          </div>
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="rounded"
                src="3d-modelling/Light Bulbs.jpg"
                :alt="$t('alt_3d-modelling_light-bulbs')"
                ratio="16-by-9"
                sizes="xs:400px sm:640px md:960px lg:1200px"
              ></simple-image>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <section id="section-overview" class="section">
        <div class="container small">
          <h2 id="overview" class="sr-only">{{ $t("heading_overview") }}</h2>
          <p v-html="$t('text_3d-modelling_general').join('')"></p>
        </div>
      </section>
    </template>
  </project-template>
</template>

<script>
import ProjectTemplate from "~/components/ProjectTemplate.vue";
export default {
  components: {
    ProjectTemplate,
  },
};
</script>

<style lang="scss" scoped>
</style>