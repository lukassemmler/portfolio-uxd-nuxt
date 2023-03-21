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
    labels: {
      type: Array,
      default: function () {
        return [
          { id: "1", label: "1" },
          { id: "2", label: "2" },
          { id: "3", label: "3" },
        ];
      },
    },
    firstShownPage: {
      type: String,
      default: "1",
    },
  },
  data: function () {
    return {
      selectedPage: null,
    };
  },
  mounted() {
    const { firstShownPage, labels } = this.$props;
    // Check slots and labels
    const slotKeys = Object.keys(this.$slots).sort();
    const labelIds = labels.map((label) => label.id).sort();
    if (JSON.stringify(slotKeys) !== JSON.stringify(labelIds))
      console.warn(
        `There is a mismatch in carousel between slot ids and label ids ` +
          `(Slots: '${slotKeys}' / Labels: '${labelIds}'). `
      );
    // Determine selected page
    if (firstShownPage && labelIds.includes(firstShownPage)) {
      this.selectedPage = firstShownPage;
    } else if (firstShownPage) {
      console.warn(`There is no first shown page id '${firstShownPage}'. `);
      this.selectedPage = labels[0].id;
    } else {
      this.selectedPage = labels[0].id;
    }
  },
  render(h) {
    // Prepare slots
    const renderedSlots = [];
    for (const slotName in this.$slots) {
      const children = this.$slots[slotName];
      //const label = h("span", {}, slotName);
      const renderedSlot = h(
        "div",
        {
          class: "simple-carousel-item",
          on: {
            click: function (event) {
              //if (this.)
              console.log(`Clicked on carousel item '${slotName}'`);
            },
          },
        },
        [...children]
      );
      renderedSlots.push(renderedSlot);
    }
    // Prepare footer
    const footerContent = [];
    if (this.$props.showPagination) {
      const pagination = h("div", { class: "simple-carousel-pagination" }, [
        h(SimplePagination),
      ]);
      footerContent.push(pagination);
    }
    // Return structure
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