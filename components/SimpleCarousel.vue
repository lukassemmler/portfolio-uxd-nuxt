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
            <ol class="simple-carousel-pagination-list">
              <li v-for="index in numberOfPages" :key="index">
                <simple-button
                  class="simple-carousel-pagination-button"
                  type="invisible-shadow"
                  :aria-selected="displayedIndex === index"
                  ><span class="sr-only">{{ $t("label_step") }} </span
                  >{{ index }}</simple-button
                >
              </li>
            </ol>
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

  .simple-carousel-pagination-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: $breakpoint-semi-big) {
  }
}
</style>