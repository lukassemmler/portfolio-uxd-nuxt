<template>
  <div class="parallax-box" ref="frame">
    <div class="parallax-box-content" ref="parallax">
      <slot><span class="parallax-box-dummy"></span></slot>
    </div>
  </div>
</template>

<script>
// Inspired by https://github.com/apertureless/vue-parallax/blob/master/src/components/Parallax.vue
/*
 * Ideas to expand this component:
 *  - change logic to use intersection observer to detect if element is viewable in viewport
 *  - add support for media query "prefers-reduced-motion" to disable parallax (maybe add prop "essential" to optionally prevent this)
 *  - add optional prop to make parallax relatve to parent scroll container instead of viewport
 *  - add optional speed factor for horizontal scrolling (useful to parallax scroll star maps)
 *  - add optional speed factor easing functions (make parallax scrolling non-linear or take elements arbitrary paths with sinus)
 *  - add optional clamping so parallaxing only happens inside of the parallax-box instead of everywhere
 *  - add optional multiple slots which each can parallax at different speed factors (useful for stacking parallaxing frames)
 */
export default {
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    speedFactor: {
      /*
       * 0 means static (no movement at all)
       * 1 means going the same speed as the scroll
       * <0 mean going the opposite direction of the scroll
       * >0 mean going in the same direction as the scroll
       */
      type: Number,
      default: 0.5,
    },
    breakpoint: {
      type: String,
      default: "(min-width: 968px)",
    },
    scrollAnchor: {
      /*
       * "viewport-center":
       *   - The neutral position is reached, when the parent scroll container is scrolled so far, that the parallax box
       *     is right in the center of the viewport.
       *   - If the speedFactor is 0.5 and you scroll down one viewport height, then the parallax box content will have
       *     scrolled down half a viewport height.
       * "scroll-top"
       *   - The neutral position is reached, when the parent scroll container is at exactly 0 scrolling.
       *   - If the speedFactor is 0.5 and you scroll down 300 pixels, then the parallax box content will have scrolled
       *     down 150 pixels.
       */
      type: String,
      function(value) {
        return ["viewport-center", "scroll-top"].includes(value);
      },
      default: "viewport-center",
    },
  },
  data() {
    return {
      parallax: null,
      frame: null,
      mediaQuery: null,
    };
  },
  mounted() {
    this.parallax = this.$refs.parallax;
    this.frame = this.$refs.frame;
    this.setupRequestAnimationFrame();
    //console.log(this.frame.getBoundingClientRect().top + window.pageYOffset);
    //console.log(document.documentElement.clientHeight);
    this.init();
    if (!this.active) return;
    // Run animation once on load, otherwise content will jump when parent gets scrolled the first time.
    this.handleScroll();
  },
  methods: {
    animateElement() {
      let offsetYRaw = 0;
      switch (this.scrollAnchor) {
        case "scroll-top":
          offsetYRaw = window.pageYOffset;
          break;
        case "viewport-center":
          const frameRect = this.frame.getBoundingClientRect();
          const viewportHeight = document.documentElement.clientHeight;
          offsetYRaw = (viewportHeight + frameRect.height) / 2 - frameRect.top;
          break;
        default:
          throw new Error(
            `Unhandled scroll anchor type '${this.scrollAnchor}'. `
          );
      }
      const offsetY = offsetYRaw * this.speedFactor;
      this.parallax.style.transform = `translate3d(0, ${offsetY}px ,0)`;
      //console.log("parallaxing!");
    },
    handleScroll() {
      if (!this.active || !this.isInView(this.parallax)) return;
      window.requestAnimationFrame(() => {
        this.animateElement();
      });
    },
    isInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.bottom >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    },
    /*
    parallaxIsInsideBox() {
      // Untested method, should be used later for clamping
      const parentHeight = this.frame.offsetHeight;
      const parallaxHeight = this.parallax.offsetHeight;
      const availableOffset = parallaxHeight - parentHeight;
      return offsetY <= availableOffset && offsetY >= 0;
    },
    */
    setupListener() {
      if (this.mediaQuery.matches)
        window.addEventListener("scroll", this.handleScroll, false);
      else window.removeEventListener("scroll", this.handleScroll, false);
    },
    init() {
      this.mediaQuery = window.matchMedia(this.breakpoint);
      if (this.mediaQuery) {
        this.mediaQuery.addListener(this.setupListener);
        this.setupListener();
      }
    },
    setupRequestAnimationFrame() {
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (f) {
          setTimeout(f, 1000 / 60);
        };
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, false);
  },
};
</script>

<style lang="scss" scoped>
.parallax-box {
  &.debug {
    background-color: yellow;
  }

  &.zero-height {
    height: 0;
  }
}
.parallax-box-content {
  position: relative;
}

.parallax-box-dummy {
  display: block;
  width: 1em;
  height: 1em;
  background-color: red;
  border-radius: 100%;
}
</style>