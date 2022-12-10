<template>
  <div class="tadaa-box">
  <div class="tadaa-box-foreground">
    <div class="tadaa-box-content">
      <slot>
        <span>No content. </span>
    </slot>
    </div>
  </div>
  <div class="tadaa-box-background">
    <god-rays></god-rays>
  </div>
</div>

</template>

<script>
import GodRays from "~/assets/icons/deco-god-rays.svg?inline";

export default {
  components: { GodRays},
}
</script>

<style lang="scss">
.tadaa-box {
  position: relative;
  width: 100%;
  padding: 10% 10%;
  background-color: $dusk-90;
  box-shadow: inset 0 0 3rem $dusk-90;
  overflow: hidden;
  box-sizing: border-box;
}

.tadaa-box-foreground {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tadaa-box-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>