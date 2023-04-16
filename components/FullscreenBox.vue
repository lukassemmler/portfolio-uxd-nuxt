<template>
  <div class="fullscreen-box" ref="box">
    <slot></slot>
  </div>
</template>

<script>
import { setupFullscreen } from "~/assets/lib/fullscreen.js";

export default {
  props: {
    enabled: Boolean,
  },
  watch: {
    enabled: function(newValue, oldValue) {
      if (oldValue === newValue) return;
      this.toggle();
    }
  },
  methods: {
    toggle: function () {
      const elem = this.$refs.box;
      elem.requestFullscreen =
        elem.requestFullscreen || elem.mozRequestFullscreen || elem.msRequestFullscreen || elem.webkitRequestFullscreen;
      if (!document.fullscreenElement) {
        elem
          .requestFullscreen()
          .then({})
          .catch((err) => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          });
        return;
      }
      if (document.exitFullscreen) document.exitFullscreen();
    },
  },
  mounted: function () {
    setupFullscreen(document);
  },
};
</script>

<style>
</style>