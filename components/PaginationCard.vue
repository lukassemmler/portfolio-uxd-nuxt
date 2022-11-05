<template>
  <div class="pagination-card" :class="[color, direction]">
    <nuxt-link :to="link" class="pagination-card-link">
      <div class="pagination-card-inner">
        <span class="pagination-card-arrow" :class="arrowDirection">
          <component v-bind:is="arrowDirection + '-arrow'"></component>
        </span>
        <span class="pagination-card-label">{{ label }}</span>
        <span class="pagination-card-title">{{ title }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import LeftArrow from "~/assets/icons/material-west.svg?inline";
import RightArrow from "~/assets/icons/material-east.svg?inline";
export default {
  components: { LeftArrow, RightArrow },
  props: {
    title: String,
    label: String,
    link: String,
    color: String,
    direction: {
      type: String,
      required: true,
      default: "next",
      validator: function (value) {
        return ["previous", "next"].includes(value);
      },
    },
  },
  computed: {
    arrowDirection: function () {
      const { direction } = this;
      if (direction === "next") return "right";
      if (direction === "previous") return "left";
      throw new Error(`Unsupported arrow direction '${direction}'. `);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-card {
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: $white;
  background-color: $dusk-40;
  transition: background-color 0.1s ease-in;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: $dusk-50;

    .pagination-card-arrow {
      &:not(.right) {
        transform: translate3d(-20%, 0, 0);
      }
      &.right {
        transform: translate3d(20%, 0, 0);
      }
    }
  }

  &.next {
    .pagination-card-inner {
      align-items: flex-end;
      text-align: right;
      padding: 2em 3.5em 2em 1em;
    }
    .pagination-card-arrow {
      left: auto;
      right: 1em;
    }
  }

  @include breakpoint-upwards($breakpoint-big) {
    .pagination-card-inner {
      width: 90vw;
      margin-left: auto;
      margin-right: auto;
    }

    &.previous {
      .pagination-card-inner {
        padding: 2em 1em;
      }
      .pagination-card-arrow {
        left: -1.5em;
      }
    }

    &.next {
      .pagination-card-inner {
        padding: 2em 1em;
      }
      .pagination-card-arrow {
        right: -1.5em;
      }
    }

    &.twin {
      .pagination-card-inner {
        width: 45vw;
        max-width: 60rem;
        margin-left: unset;
        margin-right: unset;
      }
    }

    &.slanted {
      transform: skew(-30deg);

      .pagination-card-inner {
        transform: skew(30deg);
      }

      &.previous {
        .pagination-card-inner {
          margin-left: auto;
        }
      }
    }

    &.extended {
      &.previous {
        margin-left: -3em;
        padding-left: 3em;
      }
      &.next {
        margin-right: -3em;
        padding-right: 3em;
      }
    }
  }
}

.pagination-card-inner {
  position: relative;
  box-sizing: border-box;
  padding: 2em 1em 2em 3.5em;
}

.pagination-card-link {
  display: block;
  border: none;
  text-decoration: none;
  color: $white;
}

.pagination-card-title {
  display: block;
  font-size: 2em;
  font-weight: 700;
}

.pagination-card-label {
  display: block;
  font-size: 0.8em;
  text-transform: uppercase;
  color: $bright-80;
  margin-bottom: 0.4em;
}

.pagination-card-arrow {
  position: absolute;
  top: 3.55em;
  left: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  color: $white;
  transition: transform 0.1s ease-in;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
</style>