<script>
export default {
  props: {
    target: { type: String },
    routed: { type: Boolean, default: true },
  },
  render(h) {
    if (this.routed)
      return h(
        "nuxt-link",
        { props: { to: this.target } },
        this.$slots.default
      );
    return h("a", { attrs: { href: this.target } }, this.$slots.default);
  },
};
</script>

<style>
</style>