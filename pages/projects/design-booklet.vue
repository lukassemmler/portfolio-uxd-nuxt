<template>
  <project-template>
    <template v-slot:header>
      <h1>Design-booklet</h1>
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
import ProjectTemplate from "~/templates/project.vue";
export default {
  components: { ProjectTemplate },
};
</script>

<style lang="scss" scoped>
</style>