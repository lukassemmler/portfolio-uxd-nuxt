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
      { class: ["img-wrapper", this.ratioClasses], },
      [
        h(NuxtImg, {
          class: "dropdown-menu-link",
          attrs: {
            ...this.$attrs,
          },
        }),
      ]
    );

    if (this.caption) return h(
      "figure",
      { class: ["single"], },
      [
        image,
        h("figcaption", {
          class: "",
          domProps: {
            innerHTML: this.caption,
          },
        }),
      ]
    );

    return image;
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.single {
  width: 100%;
  max-width: 66em;
  height: auto;
  box-sizing: border-box;
  display: block;
  margin: $sp 0 ($sp * 2);
  line-height: 1.5;

  &.has-background {
    background-color: $gray-15;
    padding: $sp;
  }

  &.captioned {
    font-style: italic;
  }

  &>img {
    width: 100%;
    height: auto;
    display: block;
  }

  &>figcaption {
    margin-top: $sp * 0.75;
  }
}

.shadow-medium {
  box-shadow: 0 1em 2em $dark-20;
}

.shadow-medium-faint {
  box-shadow: 0 1em 2em $dark-10;
}

.shadow-big {
  box-shadow: 0 2em 3em $dark-20;
}

.shadow-big-faint {
  box-shadow: 0 2em 3em $dark-10;
}

.avatar-icon {
  display: inline-block;
  width: 5em;
  height: 5em;
  border-radius: 2.5em;
  background-color: $dark-20;
  overflow: hidden;
}

.rounded {
  border-radius: 0.5rem;
}

.img-wrapper {
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
      $dot-width: 0.8em;
      $radius: 1.5;
      $numberOfDots: 6;
      $color: $dark-10;

      position: absolute;
      top: calc(50% - #{math.div($dot-width, 2)});
      left: calc(50% - #{math.div($dot-width, 2)});
      display: inline-block;
      width: $dot-width;
      height: $dot-width;
      border-radius: $dot-width;
      background-color: transparent;

      $dots: (); // Used to initialise empty list
      $originX: 0; // Possible to offset dots, in this case not needed
      $originY: 0;

      @for $i from 1 through $numberOfDots {
        $dotX: $originX +$radius * math.cos((360deg * $i) * math.div(1, $numberOfDots));
        $dotY: $originY - $radius * math.sin((360deg * $i) * math.div(1, $numberOfDots));
        $dotString: "#{$dotX}em #{$dotY}em 0 #{$color}";
        $dots: append($dots, $dotString, "comma");
      }

      box-shadow: #{$dots};
      animation: rotateLoader 3s linear infinite;
      content: "";
    }
  }
}

@keyframes rotateLoader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>