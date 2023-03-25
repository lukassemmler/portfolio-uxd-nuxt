<script>
/* Known Issue:
 * - When focusing control inside .simple-carousel-item, then it can look to the side of the viewport.
 *   We could fix this by making 'overflow-x: hidden', but then 'overflow-y' also gets implicity set to 'hidden'.
 *   Then we have a problem if some controls are bigger than the carousel item container.
 *   So for now, make sure to not include clickable items in a carousel card.
 * - Focus does not change on pagination when pressing left and right arrow.
 */
import { debounce } from "~/assets/lib/time-util";
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
          class: [
            "simple-carousel-item",
            { active: slotName === this.selectedPage },
          ],
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
        h(SimplePagination, {
          props: {
            labels: Object.keys(this.$slots),
            selectedLabel: this.selectedPage,
          },
          on: {
            click: function (event, label) {
              this.onItemClick(event, label);
            }.bind(this),
          },
        }),
      ]);
      footerContent.push(pagination);
    }
    // Return structure
    return h(
      "div",
      {
        class: ["simple-carousel", `width-${this.$props.width}`],
        on: {
          keydown: function (event) {
            this.onKeydown(event);
          }.bind(this),
        },
      },
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
            [
              h(
                "div",
                {
                  class: "simple-carousel-scroll",
                  ref: "scroll",
                },
                renderedSlots
              ),
            ]
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
      //console.log(`Clicked on carousel item '${slotName}'`);
      if (this.selectedPage === slotName) return;
      this.select(slotName);
    },
    onKeydown: function (event) {
      const { key } = event;
      console.log(event);
      if (key === "ArrowLeft") {
        this.moveSelectionBy(-1);
        return;
      }
      if (key === "ArrowRight") {
        this.moveSelectionBy(1);
        return;
      }
    },
    showItem: function (key) {
      const index = this.getSlotIndex(key);
      const spacing = this.getOffset(index);
      const scrollContainer = this.$refs.scroll;
      scrollContainer.style.left = spacing;
    },
    getOffset: function (index) {
      /*
      // Each carousel item has its gap spacing attached to the right side EXCEPT the last item
      const maxGaps = Math.max(0, this.size - 1);
      const gapCount = Math.min(index, maxGaps);
      return -1 * (index * this.itemWidth + gapCount * this.gapWidth) + "rem";
      */
      const scroll = this.$refs.scroll;
      const { left: scrollLeft } = scroll.getBoundingClientRect();
      const item = this.$refs.item[index];
      const { left: itemLeft } = item.getBoundingClientRect();
      return scrollLeft - itemLeft + "px";
    },
    getSlotIndex: function (slotName) {
      return Object.keys(this.$slots).indexOf(slotName);
    },
    select: function (key) {
      this.selectedPage = key;
      this.showItem(key);
    },
    moveSelectionBy: function (distance) {
      const slotNames = Object.keys(this.$slots);
      const maxIndex = slotNames.length - 1;
      const currentIndex = this.getSlotIndex(this.selectedPage);
      const newIndex = Math.min(Math.max(currentIndex + distance, 0), maxIndex);
      const newSelectedItem = slotNames[newIndex];
      this.select(newSelectedItem);
    },
  },
  mounted() {
    // Setup resizing updates
    const update = debounce(
      function (event) {
        // Updates the scroll on resize, but only if there have been at least 300ms since the last resize event.
        // This is process is called 'bouncing', and it's important so we don't overload the browser.
        this.showItem(this.selectedPage);
        //console.log("updated scroll");
      }.bind(this),
      300
    );
    window.addEventListener("resize", update);

    // Check slots and labels
    const { firstShownPage, labels } = this.$props;
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
  unmounted() {
    // To be maximum clean, we would also need to remove the resize event listener.
    // But this is not so easy, because our event handler 'update' has to be created via function call.
    // So we can't use it as 'method', since methods get defined and don't keep state.
    // And using the debounced function as 'data' is also weird, because it's not really data.
    //window.removeEventListener("resize", this.onResize);
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
    .simple-carousel-item {
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
    position: relative;

    &.spaced .simple-carousel-item:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .simple-carousel-scroll {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    transition: left 0.15s;

    & > * {
      flex: 0 0 $max-size-wrapper;
    }
  }

  .simple-carousel-item {
    max-width: 100%;
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