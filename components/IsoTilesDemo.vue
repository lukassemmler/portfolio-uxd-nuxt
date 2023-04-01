<template>
  <div class="iso-tiles-demo">
    <div class="iso-tiles-demo-image-container">
      <simple-image
        src="power-ui/prototype--phaser--tiles-demo.png"
        :alt="$t('alt_power-ui_prototype_phaser_tiles-demo')"
        ratio="3-by-2"
      ></simple-image>
    </div>
    <div class="iso-tiles-demo-shadow"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.iso-tiles-demo {
  position: relative;
  margin-bottom: 5em;
}

.iso-tiles-demo-image-container {
  animation: isoTilesFloat 2s ease-in-out alternate infinite;
}

.iso-tiles-demo-shadow {
  $image-ratio: 3/2;

  position: absolute;
  z-index: -1;
  top: 0;
  // Make square again
  left: percentage(1 / $image-ratio / 4);
  right: percentage(1 / $image-ratio / 4);
  bottom: 0;
  background-color: transparent;
  box-shadow: 20em 20em 4em $dark-20;
  transform: scaleY(0.5) rotate(45deg) scale(0.9) translate(-2.5em, -2.5em);
}

@keyframes isoTilesFloat {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 1em);
  }
}
</style>