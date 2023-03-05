<!-- <template>
  <div class="simple-carousel">
    <div class="simple-carousel-body">
      <div class="simple-carousel-content">
        <slot>
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
</template> -->

<script>
import SimpleButton from "./SimpleButton.vue";
import SimplePagination from "./SimplePagination.vue";
export default {
  components: { SimpleButton, SimplePagination },
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
  render(h) {
    const renderedSlots = [];
    for (const slotName in this.$slots) {
      const children = this.$slots[slotName];
      const label = h("span", {}, slotName);
      const renderedSlot = h("div", { class: "simple-carousel-item" }, [
        label,
        ...children,
      ]);
      renderedSlots.push(renderedSlot);
    }
    const footerContent = [];
    if (this.$props.showPagination) {
      const pagination = h(
        "div",
        { class: "simple-carousel-pagination" },
        [h(SimplePagination)]
      );
      footerContent.push(pagination);
    }
    return h("div", { class: "simple-carousel" }, [
      h("div", { class: "simple-carousel-body" }, [
        h("div", { class: "simple-carousel-content" }, renderedSlots),
        h("div", { class: "simple-carousel-footer" }, [
          h("div", { class: "simple-carousel-footer-content" }, footerContent),
        ]),
      ]),
    ]);
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