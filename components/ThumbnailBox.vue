<template>
  <div class="thumbnail-box">
    <simple-link
      class="thumbnail-link"
      :target="target"
      :routed="false"
      @click.prevent="onClick($event)"
    >
      <div :class="['ratio-box', ratioClasses]">
        <!-- Fix error when target is empty -->
        <simple-image
          v-show="!expanded"
          class="thumbnail-image"
          :src="src"
          :alt="alt"
          :ratio="ratio"
          :sizes="sizes"
        ></simple-image>
        <div v-show="expanded" class="thumbnail-box-content"><slot></slot></div>
      </div>
    </simple-link>
    <span v-if="label" v-show="!expanded" class="thumbnail-box-label">{{
      label
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      // The target is intended as fallback when JavaScript is disabled.
      type: String,
      default: "",
    },
    src: String,
    alt: String,
    ratio: String,
    sizes: String,
    label: String,
  },
  data: function () {
    return {
      expanded: false,
    };
  },
  computed: {
    ratioClasses: function () {
      if (!this.ratio || this.ratio.length === 0) return "";
      return "fixed-ratio ratio-" + this.ratio;
    },
  },
  methods: {
    onClick: function (event) {
      event.preventDefault();
      console.log("Click!");
      this.expanded = !this.expanded;
    },
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

.thumbnail-image {
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}
</style>