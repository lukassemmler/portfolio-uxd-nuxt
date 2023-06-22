<template>
  <button class="simple-tag" @click="$emit('click', $event)"
    ><span class="simple-tag-head">&ZeroWidthSpace;</span><span class="simple-tag-body">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "Any text",
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$tag-border-width: 0.2em;
$tag-border: $tag-border-width solid $dusk-30;
$tag-border-radius: 0.5em;
$tag-height: 2em;
$tag-hole-diameter: 0.8em;

.simple-tag {
  display: inline-flex;
  height: $tag-height;
  font-size: 0.9em;
  margin: 0 0 0.5em 0;
  padding: 0;
  background: none;
  border: none;
  font-family: inherit;
  border-radius: 0.25em;

  &:focus{
    outline: 0.2rem solid $orange;
    outline-offset: 0.2rem;
  }

  &:hover {
    cursor: default;

    .simple-tag-head::before,
    .simple-tag-body {
      background-color: $dusk-20;
      border-color: $dusk-20;
    }
    .simple-tag-body::before {
      background-color: $white;
      border-color: $dusk-20;
    }
  }

  &.active {
    .simple-tag-head::before,
    .simple-tag-body {
      background-color: $pastel-yellow;
      border-color: $orange;
    }
    .simple-tag-body::before {
      background-color: $white;
      border-color: $orange;
    }

    &:hover {
      .simple-tag-head::before,
      .simple-tag-body {
        background-color: $orange;
        color: $white;
      }
    }
  }
}

.simple-tag-head,
.simple-tag-body {
  display: inline-flex;
  flex-direction: row nowrap;
  align-items: center;
}

.simple-tag-head,
.simple-tag-body,
.simple-tag-head::before,
.simple-tag-body::before {
  box-sizing: border-box;
}

.simple-tag-body {
  position: relative;
  height: 100%;
  padding-left: $tag-hole-diameter;
  padding-right: 0.5em;
  border: $tag-border;
  border-left-width: 0;
  border-radius: 0 $tag-border-radius $tag-border-radius 0;
  line-height: 1;
  white-space: nowrap;

  // creates the hole in tag
  &::before {
    position: absolute;
    top: math.div($tag-height, 2) - math.div($tag-hole-diameter, 2) - $tag-border-width;
    left: $tag-hole-diameter * (-0.4);
    width: $tag-hole-diameter;
    height: $tag-hole-diameter;
    border: $tag-border;
    border-radius: $tag-hole-diameter;
    content: "";
  }
}

// creates the corner in front
.simple-tag-head {
  // Formula to get edge length for box (rounded corners, tilted by 45 deg):
  // g = (h + 2r * (sqrt(2) - 1)) / sqrt(2)
  // where
  //  g: edge length of untilted box
  //  h: resulting height of box
  //  r: radius of rounded corner
  $edge-length: (math.div($tag-height + 2 * $tag-border-radius * ($math-sqrt-2 - 1), $math-sqrt-2));

  position: relative;
  width: math.div($edge-length, 2) + $tag-border-width;
  height: $tag-height;
  overflow: hidden;

  &::before {
    position: absolute;
    top: unset;
    left: $tag-border-width;
    width: $edge-length;
    height: $edge-length;
    content: "";
    border: $tag-border;
    border-radius: $tag-border-radius;
    transform: rotate(45deg);
  }
}
</style>