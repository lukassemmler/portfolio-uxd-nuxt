<script>
import SimpleButton from "./SimpleButton.vue";
import SimplePagination from "./SimplePagination.vue";
export default {
  components: { SimpleButton, SimplePagination },
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
              this.onItemClick(event, slotName);
            }.bind(this),
          },
          ref: "item",
          refInFor: true,
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
    return h(
      "div",
      { class: ["simple-carousel", `width-${this.$props.width}`] },
      [
        h("div", { class: "simple-carousel-body" }, [
          h(
            "div",
            {
              class: [
                "simple-carousel-content",
                { spaced: this.$props.spaced },
              ],
            },
            renderedSlots
          ),
          h("div", { class: "simple-carousel-footer" }, [
            h(
              "div",
              { class: "simple-carousel-footer-content" },
              footerContent
            ),
          ]),
        ]),
      ]
    );
  },
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
    width: {
      type: String,
      default: "small",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    spaced: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      selectedPage: null,
    };
  },
  computed: {
    size: function () {
      return Object.keys(this.$slots).length;
    },
    itemWidth: function () {
      switch (this.$props.width) {
        case "small":
          return 33;
        case "medium":
          return 60;
        case "large":
          return 72;
      }
      throw new Error(`Unknown width width '${this.$props.width}'`);
    },
    gapWidth: function () {
      return this.$props.spaced ? 1 : 0;
    },
  },
  methods: {
    onItemClick: function (event, slotName) {
      //if (this.)
      console.log(`Clicked on carousel item '${slotName}'`);
      this.showItem(slotName);
    },
    showItem: function (key) {
      const index = Object.keys(this.$slots).indexOf(key);
      const firstItem = this.$refs.item[0];
      const spacing = this.getOffset(index);
      firstItem.style.marginLeft = spacing;
    },
    getOffset: function (index) {
      // Each carousel item has its gap spacing attached to the right side EXCEPT the last item
      const maxGaps = Math.max(0, this.size - 1);
      const gapCount = Math.min(index, maxGaps);
      return -1 * (index * this.itemWidth + gapCount * this.gapWidth) + "rem";
    },
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

  // based on $max-size-text
  &.width-small {
    @include content-width(33rem);
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

    &.spaced > *:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .simple-carousel-item {
    transition: margin-left 0.15s;
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