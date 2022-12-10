<template>
  <div class="thumbnail-box">
    <nuxt-link :to="target" class="thumbnail-link">
      <!-- Fix error when target is empty -->
      <simple-image
        :src="src"
        :alt="alt"
        :ratio="ratio"
        :sizes="sizes"
      ></simple-image>
      <div class="thumbnail-box-content"><slot></slot></div>
    </nuxt-link>
    <span v-if="label" class="thumbnail-box-label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: "",
    },
    src: String,
    alt: String,
    ratio: String,
    sizes: String,
    label: String,
  },
};
</script>

<style lang="scss">
.thumbnail-box {
  position: relative;
}

.thumbnail-box-label {
  position: absolute;
  bottom: 0.4em;
  left: 0.5em;
  display: inline-block;
  padding: 0.25em 0.5em;
  background-color: $dusk-90;
  color: $white;
  border-radius: 0.2em;
  font-weight: 500;
  letter-spacing: 0.04em;
  pointer-events: none;
}
</style>