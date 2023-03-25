<script>
export default {
  props: {
    target: { type: String },
    routed: { type: Boolean, default: true },
    inactive: { type: Boolean },
  },
  render(h) {
    if (this.inactive)
      return h(
        "span",
        {
          on: { click: this.onClick },
        },
        this.$slots.default
      );
    if (this.routed)
      return h(
        "nuxt-link",
        {
          props: { to: this.target },
          on: { click: this.onClick },
        },
        this.$slots.default
      );
    return h(
      "a",
      {
        attrs: { href: this.target },
        on: { click: this.onClick },
      },
      this.$slots.default
    );
  },
  methods: {
    onClick: function (event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style>
</style>