<script>
import NuxtImg from "@nuxt/image/dist/runtime/components/nuxt-img.vue";

export default {
  components: { NuxtImg },
  props: {
    ratio: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    caption: {
      type: String,
      required: false,
    },
    // For the `<nuxt-img>` tag, see https://image.nuxtjs.org/components/nuxt-img for all props.
    src: String,
    alt: String,
    sizes: String,
  },
  computed: {
    ratioClasses: function () {
      if (this.ratio.length === 0) return "";
      return "fixed-ratio ratio-" + this.ratio;
    },
  },
  render(h) {
    const image = h(
      "div",
      { class: ["ratio-box", this.ratioClasses] },
      [
        h(NuxtImg, {
          class: "simple-image-media",
          attrs: {
            src: this.src,
            alt: this.alt,
            width: this.width,
            height: this.height,
            sizes: this.sizes,
            // It is preferred to specify the attributes under props, otherwise in the resulting html, the root node
            // gets spammed with all the attributes and then the `<img>` tag itself again.
            ...this.$attrs,
          },
        }),
      ]
    );

    if (this.$slots.default) {
      if (this.caption)
        console.warn(
          `Image caption prop '${this.caption}' omitted, because content ` +
            `for the default slot is provided as figcaption. `
        );
      return h("figure", { class: ["simple-image"] }, [
        image,
        h(
          "figcaption",
          {
            class: "simple-image-caption",
          },
          this.$slots.default
        ),
      ]);
    }

    if (this.caption)
      return h("figure", { class: ["simple-image simple-caption"] }, [
        image,
        h("figcaption", {
          class: "simple-image-caption",
          domProps: {
            innerHTML: this.caption,
          },
        }),
      ]);

    return h("div", { class: ["simple-image"] }, [image]);
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@import "~/assets/style/_loading-spinner.scss";

figure {
  margin: 0;
}

.simple-image {
  &.has-background {
    background-color: $dusk-15;
    padding: $sp;
  }

  &.shadow-medium {
    box-shadow: 0 1em 2em $dark-20;
  }

  &.shadow-medium-faint {
    box-shadow: 0 1em 2em $dark-10;
  }

  &.shadow-big {
    box-shadow: 0 2em 3em $dark-20;
  }

  &.shadow-big-faint {
    box-shadow: 0 2em 3em $dark-10;
  }

  &.rounded {
    &,
    .simple-image-wrapper,
    .simple-image-media {
      // Because we use a trick to display an image in a certain ratio (to prevent loading on jumping),
      // we have to apply the border radius to all three elements.
      border-radius: 0.5rem;
    }
  }

  &.standalone {
    margin-top: $sp;
    margin-bottom: 2 * $sp;
  }

  &.fit-image {
    .simple-image-media {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  &.avatar {
    display: inline-block;
    width: 5em;
    height: 5em;
    border-radius: 2.5em;
    background-color: $dark-20;
    overflow: hidden;
  }

  &.simple-caption {
    .simple-image-caption {
      font-style: italic;
      line-height: 1.5;
    }
  }

  &.height-80 {
    .simple-image-media {
      max-height: 80vh;
      width: auto;
    }
  }

  &.height-40 {
    .simple-image-media {
      max-height: 40vh;
      width: auto;
    }
  }
}

.simple-image-media {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.simple-image-caption {
  margin-top: 1em;
}
</style>