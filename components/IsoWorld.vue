<template>
  <div class="iso-world">
    <div class="iso-world-background"></div>
    <div class="iso-world-inner">
      <div class="iso-world-content">
        <slot></slot>
      </div>
      <div
        v-for="building in buildings"
        v-bind:key="building.id"
        class="iso-world-object"
        :class="[
          'size-' + building.size,
          'pos-' + building.position,
          { interactive: building.interactive },
          building.shadow ? 'with-' + building.shadow : '',
        ]"
      >
        <simple-image :src="building.src" :alt="building.alt" :ratio="building.ratio"></simple-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      buildings: [
        {
          id: "civilian-building",
          src: "power-ui/asset--render-civilian-building-1.png",
          alt: this.$t("alt_power-ui_asset-render_civilian-building-1"),
          ratio: "1-by-1",
          size: "2-by-2",
          position: 101,
          interactive: true,
          shadow: "medium-shadow",
        },
        {
          id: "plant-biogas",
          src: "power-ui/asset--render-plant-biogas.png",
          alt: this.$t("alt_power-ui_asset-render_plant-biogas"),
          ratio: "1-by-1",
          size: "2-by-2",
          position: 102,
          interactive: true,
          shadow: "medium-shadow",
        },
        {
          id: "plant-coal",
          src: "power-ui/asset--render-plant-coal.png",
          alt: this.$t("alt_power-ui_asset-render_plant-coal"),
          ratio: "1-by-1",
          size: "2-by-2",
          position: 103,
          interactive: true,
          shadow: "medium-shadow",
        },
        {
          id: "plant-gas-turbine",
          src: "power-ui/asset--render-plant-gas-turbine.png",
          alt: this.$t("alt_power-ui_asset-render_plant-gas-turbine"),
          ratio: "1-by-1",
          size: "2-by-2",
          position: 104,
          interactive: true,
          shadow: "medium-shadow",
        },
        {
          id: "plant-nuclear-power",
          src: "power-ui/asset--render-plant-nuclear-power.png",
          alt: this.$t("alt_power-ui_asset-render_plant-nuclear-power"),
          ratio: "1-by-1",
          size: "2-by-2",
          position: 105,
          interactive: true,
          shadow: "medium-shadow",
        },
        {
          id: "plant-oil",
          src: "power-ui/asset--render-plant-oil.png",
          alt: this.$t("alt_power-ui_asset-render_plant-oil"),
          ratio: "1-by-1",
          size: "2-by-2",
          position: 106,
          interactive: true,
          shadow: "medium-shadow",
        },
        {
          id: "truck-station",
          src: "power-ui/asset--render-truck-station.png",
          alt: this.$t("alt_power-ui_asset-render_truck-station"),
          ratio: "1-by-1",
          size: "3-by-2",
          position: 107,
          interactive: true,
          shadow: "big-shadow",
        },
        {
          id: "powerpole",
          src: "power-ui/asset--render-powerpole.png",
          alt: this.$t("alt_power-ui_asset-render_powerpole"),
          ratio: "1-by-1",
          size: "1-by-1",
          position: 108,
          interactive: true,
          shadow: "small-shadow",
        },
        {
          id: "lastwagen",
          src: "power-ui/asset--render-lastwagen.png",
          alt: this.$t("alt_power-ui_asset-render_lastwagen"),
          ratio: "1-by-1",
          size: "1-by-1",
          position: 201,
          interactive: true,
          shadow: null,
        },
        {
          id: "strasse-no-1",
          src: "power-ui/asset--render-strasse-no.png",
          alt: this.$t("alt_power-ui_asset-render_strasse-no"),
          ratio: "1-by-1",
          size: "1-by-1",
          position: 301,
          interactive: false,
          shadow: null,
        },
        {
          id: "strasse-no-2",
          src: "power-ui/asset--render-strasse-no.png",
          alt: this.$t("alt_power-ui_asset-render_strasse-no"),
          ratio: "1-by-1",
          size: "1-by-1",
          position: 302,
          interactive: false,
          shadow: null,
        },
        {
          id: "strasse-no-3",
          src: "power-ui/asset--render-strasse-no.png",
          alt: this.$t("alt_power-ui_asset-render_strasse-no"),
          ratio: "1-by-1",
          size: "1-by-1",
          position: 303,
          interactive: false,
          shadow: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "sass:math";
@use "sass:map";

.iso-world {
  // Isometric staggered grid, which is aligned to top center.
  // The origin of a cell is at it's bottom (South) corner.
  // If you want to try out such a grid for yourself, I recommend Tiled (https://doc.mapeditor.org/en/stable/manual/introduction/)
  //
  // Grid visualization:
  //    _-^-_     _-^-_     _-^-_     _-^-_     _-^-_
  // _-^ (x) ^-_-^ -1  ^-_-^  0  ^-_-^  1  ^-_-^  2  ^-_
  // ^-_ (y) _-^-_  0  _-^-_  0  _-^-_  0  _-^-_  0  _-^
  //    ^-_-^ -2  ^-_-^ -1  ^-_-^  0  ^-_-^  1  ^-_-^
  //    _-^-_  1  _-^-_  1  _-^-_  1  _-^-_  1  _-^-_
  // _-^ -2  ^-_-^ -1  ^-_-^  0  ^-_-^  1  ^-_-^  2  ^-_
  // ^-_  2  _-^-_  2  _-^-_  2  _-^-_  2  _-^-_  2  _-^
  //    ^-_-^     ^-_-^     ^-_-^     ^-_-^     ^-_-^
  $cell-size-x: 5em;
  $cell-size-y: 2.5em;
  $padding-x: math.div($cell-size-x, 4);
  $padding-y: math.div($cell-size-y, 4);

  position: relative;
  height: 50em;
  padding: $padding-y $padding-x;
  box-sizing: border-box;
  background: radial-gradient(at 90% 60%, $broom-yellow 0%, $orange 110%);
  overflow: hidden;

  @mixin pos-in-staggered-iso-grid($y, $x) {
    $left: $x * $cell-size-x;
    $oddRow: $y % 2 != 0;
    @if $oddRow {
      $left: $left + math.div($cell-size-x, 2);
    }
    left: calc(50% + #{$left});
    top: $y * math.div($cell-size-y, 2);
    z-index: $y;
  }

  @mixin make-building-positions($positions, $x-label, $y-label) {
    @each $position in $positions {
      $label: map.get($position, "label");
      $x: map.get($position, $x-label);
      $y: map.get($position, $y-label);

      .iso-world-object.pos-#{$label} {
        @include pos-in-staggered-iso-grid($y, $x);
      }
    }
  }

  $building-positions: (
      "label": "101",
      "x1": 1,
      "y1": 10,
      "x2": 0,
      "y2": 10,
      "x3": -2,
      "y3": 11,
    ),
    (
      "label": "102",
      "x1": -1,
      "y1": 14,
      "x2": 1,
      "y2": 19,
      "x3": 1,
      "y3": 17,
    ),
    (
      "label": "103",
      "x1": 1,
      "y1": 18,
      "x2": -2,
      "y2": 13,
      "x3": -2,
      "y3": 16,
    ),
    (
      "label": "104",
      "x1": -1,
      "y1": 22,
      "x2": -2,
      "y2": 25,
      "x3": -1,
      "y3": 19,
    ),
    (
      "label": "105",
      "x1": 1,
      "y1": 26,
      "x2": 0,
      "y2": 16,
      "x3": 0,
      "y3": 14,
    ),
    (
      "label": "106",
      "x1": -1,
      "y1": 30,
      "x2": 1,
      "y2": 13,
      "x3": 2,
      "y3": 13,
    ),
    (
      "label": "107",
      "x1": 1,
      "y1": 34,
      "x2": -1,
      "y2": 20,
      "x3": 1,
      "y3": 10,
    ),
    (
      "label": "108",
      "x1": -1,
      "y1": 37,
      "x2": 0,
      "y2": 21,
      "x3": -3,
      "y3": 12,
    ),
    (
      "label": "201",
      "x1": -1,
      "y1": -1,
      "x2": -1,
      "y2": -1,
      "x3": -3,
      "y3": 21,
    ),
    (
      "label": "301",
      "x1": 0,
      "y1": 6,
      "x2": 1,
      "y2": 24,
      "x3": 2,
      "y3": 19,
    ),
    (
      "label": "302",
      "x1": -1,
      "y1": 7,
      "x2": 1,
      "y2": 23,
      "x3": 3,
      "y3": 18,
    ),
    (
      "label": "303",
      "x1": -1,
      "y1": 8,
      "x2": 2,
      "y2": 22,
      "x3": 3,
      "y3": 17,
    );
  @include make-building-positions($building-positions, "x1", "y1");

  .iso-world-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("~/static/power-ui/terrain--grid.png");
    background-size: $cell-size-x $cell-size-y;
    background-position: center $padding-y;
    opacity: 0.25;
  }

  .iso-world-inner {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .iso-world-test-dot {
    $width: math.div($cell-size-x, 4);
    $height: math.div($cell-size-y, 4);

    @include pos-in-staggered-iso-grid(0, -1);
    position: absolute;
    width: $width;
    height: $height;
    margin-left: -1 * math.div($width, 2);
    margin-top: -1 * math.div($height, 2);
    border-radius: #{$cell-size-x} / #{$cell-size-y};
    background-color: red;
  }

  .iso-world-object {
    position: absolute;
    transform-origin: bottom center;
    transition: transform 0.1s ease-in;
    @include pos-in-staggered-iso-grid(0, -1);

    &.interactive {
      &:hover {
        transform: scale(1.1);
      }
    }

    &.with-big-shadow {
      &::before {
        position: absolute;
        top: 65%;
        left: 30%;
        right: 30%;
        bottom: 15%;
        content: "";
        border-radius: 100%;
        background-color: $gray-60;
        box-shadow: -3em 0 2em 0.5em $dark-20;
      }
    }

    &.with-medium-shadow {
      &::before {
        position: absolute;
        top: 60%;
        left: 20%;
        right: 20%;
        bottom: 10%;
        content: "";
        border-radius: 100%;
        background-color: $gray-60;
        box-shadow: -2em 0 2em 0.5em $dark-20;
      }
    }

    &.with-small-shadow {
      &::before {
        position: absolute;
        top: 73%;
        left: 30%;
        right: 30%;
        bottom: 7%;
        content: "";
        border-radius: 100%;
        background-color: $gray-60;
        box-shadow: -1em 0 1em 0.5em $dark-20;
      }
    }

    @mixin make-size($name, $width, $correction-scale: null, $correction-offset-x: null) {
      &.size-#{$name} {
        $size: $cell-size-x * $width;
        @if $correction-scale {
          $size: $size * $correction-scale;
        }
        width: $size;
        height: $size;
        margin-left: -1 * math.div($size, 2);
        @if $correction-offset-x {
          margin-left: -1 * math.div($size, 2) - $correction-offset-x;
        }
        margin-top: -1 * $size;
      }
    }
    // These values are based on the dimensions of the rendered images
    // 2-by-2 has 550px * 550px, then 1-by-1 should have 275px * 275px.
    // But because the power pole then wouldn't fit into the bounding box, the image size for 1-by-1 was increased to 380px * 380px.
    // So to accommodate for that change, a $correction-scale has to be passed into the mixin.
    @include make-size("1-by-1", 1, 1.4);
    @include make-size("2-by-2", 2);
    @include make-size("3-by-2", 3, 0.825, 1.3em);
  }

  @media screen and (min-width: $breakpoint-semi-big) {
    height: 35em;
    font-size: 1.6rem; // Increase overall size of assets

    @include make-building-positions($building-positions, "x2", "y2");
  }

  @media screen and (min-width: $breakpoint-xl) {
    height: 31em;

    @include make-building-positions($building-positions, "x3", "y3");
  }
}
</style>