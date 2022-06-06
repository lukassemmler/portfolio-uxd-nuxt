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
      { class: ["simple-image-wrapper", this.ratioClasses] },
      [
        h(NuxtImg, {
          class: "simple-image-media",
          attrs: {
            src: this.src,
            alt: this.alt,
            sizes: this.sizes,
            // It is preferred to specify the attributes under props, otherwise in the resulting html, the root node
            // gets spammed with all the attributes and then the `<img>` tag itself again.
            ...this.$attrs,
          },
        }),
      ]
    );

    if (this.caption)
      return h("figure", { class: ["simple-image"] }, [
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
    .simple-image-wrapper {
      box-shadow: 0 1em 2em $dark-20;
    }
  }

  &.shadow-medium-faint {
    .simple-image-wrapper {
      box-shadow: 0 1em 2em $dark-10;
    }
  }

  &.shadow-big {
    .simple-image-wrapper {
      box-shadow: 0 2em 3em $dark-20;
    }
  }

  &.shadow-big-faint {
    .simple-image-wrapper {
      box-shadow: 0 2em 3em $dark-10;
    }
  }

  &.rounded {
    border-radius: 0.5rem;

    .simple-image-wrapper {
      border-radius: 0.5rem;
      overflow: hidden;
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
}

.simple-image-wrapper {
  position: relative;

  &.fixed-ratio {
    height: 0;
    overflow: hidden;

    @mixin make-ratio($width, $height, $customName: null) {
      $name: "#{$width}-by-#{$height}";

      @if $customName {
        $name: $customName;
      }

      &.ratio-#{$name} {
        padding-top: percentage(math.div(1, math.div($width, $height)));
      }
    }

    @include make-ratio(1, 1);
    @include make-ratio(1, 2);
    @include make-ratio(2, 1);
    @include make-ratio(3, 1);
    @include make-ratio(2, 3);
    @include make-ratio(3, 2);
    @include make-ratio(3, 5);
    @include make-ratio(4, 3);
    @include make-ratio(5, 3);
    @include make-ratio(7, 9);
    @include make-ratio(8, 5);
    @include make-ratio(9, 7);
    @include make-ratio(16, 9);
    @include make-ratio(64, 45);
    @include make-ratio(210, 297, "din-a4-portrait");
    @include make-ratio(297, 210, "din-a4-landscape");

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }

  &.has-placeholder {
    background-color: $dark-03;

    // Loading sign
    &::before {
      @include spinner;
      content: "";
    }
  }
}

.simple-image-caption {
  margin-top: 1em;
  font-style: italic;
  line-height: 1.5;
}
</style>