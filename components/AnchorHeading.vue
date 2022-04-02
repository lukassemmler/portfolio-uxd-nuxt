<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
      validator: function (value) {
        return [1, 2, 3, 4, 5, 6].includes(value);
      },
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
    },
  },
  render(h) {
    // If ever necessary, we could go beyond <h6> with the correct ARIA labels and custom markup:
    // `<div role="heading" aria-level="7">Heading for this sub section</div>`
    // Based on https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level, 2022-04-02
    const { level, label, id } = this;
    return h(
      `h${level}`,
      {
        class: "anchor-heading",
        attrs: {
          id: id,
        },
      },
      [
        h("span", {
          class: "anchor-heading-label",
          domProps: {
            innerHTML: label,
          },
        }),
        h(
          "a",
          {
            class: "anchor-heading-anchor",
            attrs: {
              href: "#" + id,
            },
          },
          "#"
        ),
      ]
    );
  },
};
</script>

<style lang="scss" scoped>
.anchor-heading {
  position: relative;

  @keyframes pulse-target {
    0% {
      background-color: $orange;
    }
    100% {
      background-color: rgba($orange, 0.25);
    }
  }

  &:target {
    .anchor-heading-label {
      background-color: rgba($orange, 0.25);
      animation: 1s ease-in pulse-target;
    }
  }
}

.anchor-heading-label {
  $padding: 0.2em;
  margin-left: -$padding;
  margin-right: -$padding;
  padding-left: $padding;
  padding-right: $padding;
  display: inline-block;
  border-radius: $padding * 2;
}

.anchor-heading-anchor {
  position: absolute;
  display: inline-block;
  width: 0.8em;
  text-align: center;
  left: 0;
  margin-left: -1.1em;
  font-weight: normal;
  text-decoration: none;
  color: rgba($orange, 0.4);

  &:hover {
    color: $orange;
  }
}
</style>