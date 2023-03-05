<template>
  <div class="simple-carousel">
    <div class="simple-carousel-body">
      <div class="simple-carousel-content">
        <slot>
          <!-- Intended to include 'column-card' components -->
          Completely empty.
        </slot>
      </div>
      <div class="simple-carousel-footer">
        <div class="simple-carousel-footer-content">
          <div v-if="showPagination" class="simple-carousel-pagination">
            <simple-pagination></simple-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleButton from "./SimpleButton.vue";
export default {
  components: { SimpleButton },
  props: {
    showPagination: {
      type: Boolean,
      default: true,
    },
    numberOfPages: {
      type: Number,
      default: 1,
    },
    displayedIndex: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-carousel {
  width: 100%;
  margin-bottom: 2em;

  // Default content width is effectively ".width-medium"
  @mixin content-width($width) {
    .simple-carousel-body {
      max-width: $width;
    }
    .simple-carousel-content > * {
      flex-basis: $width;
    }
  }

  &.width-small {
    @include content-width($max-size-text);
  }
  
  &.width-medium {
    @include content-width($max-size-wrapper);
  }

  &.width-big {
    @include content-width($max-size-bulge);
  }

  .simple-carousel-body {
    position: relative;
    max-width: $max-size-wrapper;
    margin-left: auto;
    margin-right: auto;
  }

  .simple-carousel-content {
    display: flex;
    flex-flow: row nowrap;

    & > * {
      flex: 0 0 $max-size-wrapper;
    }

    & > *:not(:last-child) {
      margin-right: 1em;
    }
  }

  .simple-carousel-footer {
  }

  .simple-carousel-footer-content {
    box-sizing: border-box;
    padding: 0.3em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & > *:not(:last-child) {
      margin-right: 0.3em;
    }
  }

  &.interactive {
    .simple-carousel-content > * {
      margin-bottom: 0;
    }
    .simple-carousel-footer {
      display: block;
    }
  }

  @media screen and (min-width: $breakpoint-semi-big) {
  }
}
</style>