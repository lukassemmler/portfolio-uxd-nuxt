<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: "li",
    },
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    focusable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  render(h) {
    const { tag, label, link, focusable } = this;
    if (label === "---")
      return h(tag, {
        class: "dropdown-menu-separator",
        attrs: {
          role: "separator",
        },
      });
    return h(
      tag,
      {
        class: "dropdown-menu-item",
        attrs: {
          role: "presentation",
        },
      },
      [
        h("a", {
          class: "dropdown-menu-link",
          attrs: {
            href: link ? link : "#",
            title: label, //TODO Add prop "tooltip"
            role: "menuitem",
            tabindex: focusable ? "" : -1,
          },
          domProps: {
            innerHTML: label,
          },
        }),
      ]
    );
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu-link {
  display: block;
  padding: 0.5em 1em;
  border-bottom: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: $gray-13;

  &:hover {
    background-color: $dark-10;
    color: $gray-13;
  }

  &:focus-visible {
    outline-offset: -0.2rem;
  }
}

.dropdown-menu-separator {
  height: 0.1em;
  margin: 0.45em 0;
  background-color: $dusk-30;
}
</style>