<template>
  <article class="simple-billboard">
    <div class="simple-billboard-background"></div>
    <div class="simple-billboard-content" :class="imagePosition">
      <div class="simple-billboard-image-container">
        <simple-image
          v-bind="$attrs"
          class="simple-billboard-image"
        ></simple-image>
      </div>
      <div class="simple-billboard-description">
        <div class="simple-billboard-description-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    imagePosition: {
      type: String,
      required: false,
      validator: function (value) {
        return ["left", "right"].includes(value);
      },
      default: "left",
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-billboard {
  position: relative;

  @include breakpoint-upwards($breakpoint-semi-big) {
    .simple-billboard-background {
      bottom: 5em;
    }

    .simple-billboard-content {
      display: flex;

      & > * {
        flex: 1 1 0;
      }

      &.right {
        flex-direction: row-reverse;

        .simple-billboard-image-container {
          margin-left: 2em;
          justify-content: flex-start;
        }
        .simple-billboard-description {
          text-align: right;
        }
      }

      &.left {
        .simple-billboard-image-container {
          margin-right: 2em;
          justify-content: flex-end;
        }
        .simple-billboard-description {
          text-align: left;
          padding-top: 6em;
          padding-bottom: 6em;
        }
      }
    }
  }
}

.simple-billboard-background {
  position: absolute;
  z-index: -1;
  top: 5em;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5em;
  background-color: $dark-05;
}

.simple-billboard-image {
  width: 15em;
}

.simple-billboard-image-container {
  display: flex;
  justify-content: center;
}

.simple-billboard-description {
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;

  & > * {
    flex: 1 1 0;
  }
}

.simple-billboard-description-inner {
  & > *:first-child {
    margin-top: 0;
  }
}
</style>