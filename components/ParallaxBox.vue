<template>
  <div class="parallax-box" ref="frame">
    <div class="parallax-box-content" ref="parallax">
      <slot><span class="parallax-box-dummy"></span></slot>
    </div>
  </div>
</template>

<script>
// Based on https://github.com/apertureless/vue-parallax/blob/master/src/components/Parallax.vue
export default {
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    speedFactor: {
      // 0 means static (no movement at all)
      // 1 means going the same speed as the scroll
      // <0 mean going the opposite direction of the scroll
      // >0 mean going in the same direction as the scroll
      type: Number,
      default: 0.5,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    breakpoint: {
      type: String,
      default: "(min-width: 968px)",
    },
    scrollStrategy: {
      // TODO: Implement and rename this prop; this is not about the scroll strategy, it's about changing the 
      //       neutral position of the parallax scrolling element.
      // "viewport-center": 
      //   * The neutral position is reached, when the parent scroll container is scrolled so far, that the parallax box 
      //     is right in the center of the viewport. 
      //   * If the speedFactor is 0.5 and you scroll down one viewport height, then the parallax box content will have
      //     scrolled down half a viewport height.
      // "scroll-progress"
      //   * The neutral position is reached, when the parent scroll container is at exactly zero.
      //   * If the speedFactor is 0.5 and you scroll down 300 pixels, then the parallax box content will have scrolled
      //     down 150 pixels.
      type: String,
      function (value) {
        return ["viewport-center", "scroll-progress"].includes(value);
      },
        default: "viewport-center",
    }
  },
  data() {
    return {
      parallax: null,
      frame: null,
      mediaQuery: null,
    };
  },
  mounted() {
    if (!this.active || this.fixed) return;
    this.parallax = this.$refs.parallax;
    this.frame = this.$refs.frame;
    console.log(this.frame.getBoundingClientRect().top + window.pageYOffset);
    console.log(document.documentElement.clientHeight);
    this.setupRequestAnimationFrame();
    this.init();
    // Run animation once on load, otherwise content will jump till it got scrolled the first time.
    if (this.active) this.handleScroll();
  },
  methods: {
    animateElement() {
      //const parentHeight = this.frame.offsetHeight;
      //const parallaxHeight = this.parallax.offsetHeight;
      //const availableOffset = parallaxHeight - parentHeight;
      //const offsetY = window.pageYOffset * this.speedFactor;

      const frameViewportOffsetY = this.frame.getBoundingClientRect().top;
      const offsetViewport =
        (document.documentElement.clientHeight +
          this.frame.getBoundingClientRect().height) /
        2;
      const offsetY =
        (frameViewportOffsetY - offsetViewport) * this.speedFactor * -1;

      //if (offsetY <= availableOffset && offsetY >= 0) {
      this.parallax.style.transform = `translate3d(0, ${offsetY}px ,0)`;
      console.log("parallaxing!");
      //}
    },
    handleScroll() {
      window.requestAnimationFrame(() => {
        if (!this.isInView(this.parallax)) return;
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
    setupListener() {
      if (this.mediaQuery.matches) {
        window.addEventListener("scroll", this.handleScroll, false);
      } else {
        window.removeEventListener("scroll", this.handleScroll, false);
      }
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
  background-color: yellow;
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