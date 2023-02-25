<template>
  <div class="column-card">
    <nuxt-link :to="href" class="column-card-link">
      <div class="column-card-inner">
        <div class="column-card-header">
          <div class="column-card-image-container">
            <simple-image
              class="column-card-image"
              :src="src"
              :alt="alt"
              :ratio="ratio"
            ></simple-image>
          </div>
        </div>
        <div class="column-card-body">
          <div class="column-card-sidebar">
            <span class="column-card-number" v-if="number">{{ number }}</span>
          </div>
          <div class="column-card-content">
            <div class="column-card-icon-list">
              <div
                class="column-card-icon"
                v-for="(icon, index) in icons"
                :key="index"
              >
                <component v-bind:is="icon"></component>
              </div>
            </div>
            <div class="column-card-description">{{ description }}</div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    href: String,
    description: String,
    src: String,
    alt: String,
    ratio: String,
    icons: Array, // Array of icon components
  },
  computed: {
    target: function () {
      if (this.href && this.href.startsWith("#"))
        return { path: "", hash: href };
      return href;
    },
  },
};
</script>

<style lang="scss">
.column-card {
  position: relative;
  box-shadow: 0 0.5em 2em $dark-10;
  margin-bottom: 2em;
  border-radius: 0.5em;
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;

  &:hover,
  &:focus-within {
    box-shadow: 0 0.5em 2em $dark-30;
    transform: scale(1.1);
  }

  &.compact {
    .column-card-image-container {
      display: none;
      margin-top: 0.2em;
      margin-bottom: 0.2em;
    }
  }

  &.padded {
    .column-card-inner {
      padding: 1em;
    }
    .column-card-body {
      padding: 0;
    }
    .column-card-image-container img {
      border-radius: 0.2em;
    }
  }

  .column-card-header,
  .column-card-description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .column-card-icon-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .column-card-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .column-card-icon {
    width: 5em;
    height: 5em;
    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  .column-card-body {
    display: flex;
    flex-flow: row nowrap;
    padding: 0 1em 1em 1em;
  }

  .column-card-sidebar {
    flex: 0 0 4em;
    padding-top: 0.5em;
  }

  .column-card-content {
    flex: 1 1 0%;
    padding-top: 0.5em;
  }

  .column-card-number {
    position: relative;
    display: inline-block;
    font-size: 3.5em;
    font-weight: 700;
    line-height: 1;
    min-width: 0.7em;
    text-align: right;

    &::after {
      position: absolute;
      bottom: -0.1em;
      left: 0;
      width: 0.7em;
      height: 0.05em;
      background-color: currentColor;
      content: "";
      opacity: 0.5;
    }
  }

  .column-card-image-container {
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 0.5em 0.5em 0 0;
    }
  }

  @media screen and (min-width: $breakpoint-big) {
    &.compact {
      .column-card-image-container {
        display: block;
      }
    }
  }
}
</style>