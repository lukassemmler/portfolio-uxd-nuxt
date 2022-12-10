<template>
  <div class="hover-image-container">
    <span class="hover-image-hoverer">
      <span class="hover-image-rotator">
        <span class="hover-image-scaler">
          <simple-link :target="target" :routed="routedTarget">
            <simple-image
              class="hover-image"
              :src="src"
              :alt="alt"
            ></simple-image>
          </simple-link>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import SimpleLink from "./SimpleLink.vue";
export default {
  components: { SimpleLink },
  props: {
    target: String,
    routedTarget: { type: Boolean, default: true },
    src: String,
    alt: String,
  },
};
</script>

<style lang="scss">
.hover-image-container {
}

.hover-image {
  width: 11rem;
  height: auto;
  box-shadow: 0 0 2rem $white;
}

.hover-image-rotator,
.hover-image-hoverer,
.hover-image-scaler {
  display: inline-block;
  transform-origin: center;
}

.hover-image-rotator {
  animation: leaning 1s ease-in-out alternate infinite;
  animation-delay: -0.5s;
}

.hover-image-hoverer {
  animation: hovering 1s ease-in-out alternate infinite;
}

.hover-image-scaler {
  transition: transform 0.1s ease-in;

  &:hover,
  &:focus,
  &:focus-within {
    transform: scale(1.1);
  }
}

@keyframes hovering {
  0% {
    transform: translate3d(0, -5%, 0);
  }
  100% {
    transform: translate3d(0, 5%, 0);
  }
}

@keyframes leaning {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
</style>