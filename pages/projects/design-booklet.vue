<template>
  <div>
    <h1>Design-booklet</h1>
    <!-- TODO Fix links in project pagination -->
    <project-pagination
      :previousTitle="$t('project-nav_data-visualization')"
      previousLink="projects/data-visualization"
      previousColor="bg-hover-blue"
      :nextTitle="$t('project-nav_3d-modelling')"
      nextLink="projects/3d-modelling"
      nextColor="bg-hover-pink"
    ></project-pagination>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>