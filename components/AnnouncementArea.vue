<template>
  <div v-if="visible" class="announcement-area container huge">
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
      visible: false,
    };
  },
};
</script>

<style lang="scss">
.announcement-area {
  & > *:last-child {
    margin-bottom: 1em;
  }
}
</style>