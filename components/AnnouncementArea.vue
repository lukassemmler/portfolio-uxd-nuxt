<template>
  <div v-if="visible" class="container huge">
    <alert-banner
      intro="Holy Smokes!"
      message="I dropped my sandwich."
    ></alert-banner>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // This component should be included in the <page-header> component.
      // So set `this.visible` to true if you want to show some global notifications.
      visible: true,
    };
  },
};
</script>

<style>
</style>