<template>
  <project-template
    background="bg-gradient-green"
    :title="$t('meta-title_steering-wheel')"
    :meta-name="$t('project-summary-name_steering-wheel')"
    :meta-tasks="$t('project-summary-tasks_steering-wheel')"
    :meta-format="$t('project-summary-format_steering-wheel')"
    :meta-lecture="$t('project-summary-client_steering-wheel')"
    :meta-colleagues="'Alexander Beidoun, Maximilian Götz'"
    :meta-date="$t('project-summary-date_steering-wheel')"
    :project-tools="[{ iconId: 'Cinema4d', label: 'Cinema 4D' }]"
    nav-id="projects.steeringWheel"
  >
    <template v-slot:header>
      <div class="container huge">
        <div class="pillar-container gapped-v gapped-h">
          <div class="pillar-row">
            <div class="pillar-col">
              <simple-image
                class="rounded"
                src="steering-wheel/Steering Wheel.jpg"
                :alt="$t('alt_steering-wheel_front-side')"
                ratio="3-by-2"
                sizes="xs:400px sm:640px md:960px lg:1200px"
              ></simple-image>
            </div>
          </div>
          <div class="pillar-row">
            <div class="pillar-col-bg-4">
              <simple-image
                class="rounded"
                src="steering-wheel/Steering Wheel Backside.jpg"
                :alt="$t('alt_steering-wheel_back-side')"
                ratio="3-by-2"
                sizes="xs:400px sm:640px md:960px lg:1200px"
              ></simple-image>
            </div>
            <div class="pillar-col-bg-4">
              <simple-image
                class="rounded"
                src="steering-wheel/Steering Wheel in Use.jpg"
                :alt="$t('alt_steering-wheel_in-use')"
                ratio="3-by-2"
                sizes="xs:400px sm:640px md:960px lg:1200px"
              ></simple-image>
            </div>
            <div class="pillar-col-bg-4">
              <simple-image
                class="rounded"
                src="steering-wheel/Steering Wheel Closeup.jpg"
                :alt="$t('alt_steering-wheel_close-up')"
                ratio="3-by-2"
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
          <p v-html="$t('text_steering-wheel_intro').join('')"></p>
          <p v-html="$t('text_steering-wheel_credits').join('')"></p>
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