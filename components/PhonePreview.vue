<template>
  <div class="phone-preview">
    <div class="phone-preview-body">
      <div class="phone-shape">
        <div class="phone-content">
          <div class="iframe-container">
            <fullscreen-box :enabled="fullscreen">
              <iframe :src="src" width="800" height="450"></iframe>
            </fullscreen-box>
          </div>
        </div>
      </div>
      <div class="phone-glass-border">
        <div class="phone-header-bar">
          <div class="phone-logo">Lukas</div>
          <div class="phone-speaker"></div>
          <div class="phone-camera"></div>
        </div>
        <div class="phone-action-bar">
          <div class="phone-button-window">
            <svg width="32" height="32" version="1.1" viewBox="0 0 8.4667 8.4667" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="1.0583"
                y="1.0583"
                width="6.35"
                height="6.35"
                rx="1.0583"
                ry="1.0583"
                fill="none"
                stop-color="#000000"
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width=".79375"
              />
            </svg>
          </div>
          <div class="phone-button-home"></div>
          <div class="phone-button-back">
            <svg width="32" height="32" version="1.1" viewBox="0 0 8.4667 8.4667" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m4.2367 7.7577c-0.54114 0-2.0925-2.2879-2.363-2.7576s-1.5151-3.0352-1.2445-3.5049c0.27057-0.46969 3.1064-0.5605 3.6475-0.5605 0.54114-1e-7 3.2971 0.09081 3.5677 0.5605 0.27057 0.46969-0.97398 3.0085-1.2445 3.4782-0.27057 0.46969-1.8219 2.7843-2.363 2.7843z"
                fill="none"
                stop-color="#000000"
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width=".79375"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="phone-preview-footer">
      <button class="phone-preview-fullscreen-button" @click="onButtonClick">Vollbild öffnen</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    fullscreen: false,
  },
  methods: {
    onButtonClick: function (event) {
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>

<style lang="scss">
.phone-preview {
  &.inverted {
    // TODO: This is an optional class to invert the phone (make it white). Currently not fully implemented.
    padding-top: 5rem;
    padding-bottom: 3rem;
    background-color: $gray-93;

    .phone-shape {
      background-color: $white;
      box-shadow: 0 1rem 3rem $dark-20;

      &::before,
      &::after {
        background-color: $white;
      }
    }
  }

  .phone-preview-body {
    position: relative;
    font-size: 1vw;
  }

  .phone-shape {
    $phone-color: $gray-13;
    $button-width: 0.4em;
    position: relative;
    width: 80em;
    padding: 2em 10em 2em 7.5em;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4.5em;
    background-color: $phone-color;
    box-sizing: border-box;
    box-shadow: 0 2em 4em $dark-30, 0 0.5em $black;

    &::before,
    &::after {
      position: absolute;
      display: block;
      height: 2 * $button-width;
      top: 0;
      margin-top: -1 * $button-width;
      border-radius: $button-width;
      background-color: $phone-color;
      content: "";
    }

    &::before {
      left: 11.5em;
      width: 12em;
    }

    &::after {
      left: 28em;
      width: 6em;
    }
  }

  .phone-content {
    background-color: $gray-26;
  }

  .iframe-container {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 0;
    padding: 0 0 56.25% 0;
    box-shadow: 0 0 6em $bright-50;
    border: 0.3em solid;
    border-top-color: $black;
    border-left-color: $gray-20;
    border-right-color: $gray-26;
    border-bottom-color: $gray-40;
    border-top-width: 0.5em;
    border-radius: 0.5em;

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  .phone-preview-footer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0.8em auto 0;
    box-sizing: border-box;
  }

  .phone-preview-fullscreen-button {
    font-family: "Fira Sans", sans-serif;
    display: inline-flex;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 1rem;
    font-size: 0.8em;
  }

  .phone-glass-border {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    right: 0.5em;
    bottom: 0.5em;
    border: 0.1em solid $bright-50;
    border-radius: 4em;
  }

  .phone-header-bar,
  .phone-action-bar {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 1em;
    bottom: 1em;
  }

  .phone-header-bar {
    left: 2.5em;
    width: 2.5em;
  }

  .phone-action-bar {
    right: 2em;
    width: 5em;
  }

  .phone-speaker,
  .phone-button-home {
    border: 0.1em solid $bright-50;
    border-radius: 0.75em;
    box-shadow: 0 -0.2em $black, inset 0 -0.2em $black;
  }

  .phone-speaker {
    width: 1em;
    height: 6em;
    background-color: $dark-50;
  }

  .phone-camera {
    $radius: 1em;

    position: relative;
    width: $radius * 2;
    height: $radius * 2;
    border-radius: $radius;
    margin-top: 2em;
    margin-bottom: 5em;
    background-color: $gray-20;
    box-shadow: 0 0.2em $bright-30, inset 0 0.2em $black;

    @mixin circle($radius, $top, $left, $color) {
      position: absolute;
      display: block;
      content: "";
      top: $top;
      left: $left;
      background-color: $color;
      width: $radius * 2;
      height: $radius * 2;
      border-radius: $radius;
    }

    &:before {
      @include circle(0.6em, 0.5em, 0.4em, $dark-80);
    }

    &:after {
      @include circle(0.3em, 0.5em, 0.4em, $gray-40);
    }
  }

  .phone-button-home {
    width: 3em;
    height: 8em;
  }

  .phone-logo {
    transform: rotate(-90deg);
    font-size: 1.2em;
    color: $gray-40;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2em;
    margin-bottom: 6em;
  }

  .phone-button-back,
  .phone-button-window {
    width: 2em;
    opacity: 0.3;

    & > svg {
      width: 100%;
      height: auto;
    }
  }

  .phone-button-back {
    margin-top: 5em;
  }

  .phone-button-window {
    margin-bottom: 5em;
  }

  @media screen and (min-width: $breakpoint-3xl) {
    .phone-preview-body {
      font-size: 19.2px; // 1920px / 100vw = 19.2px / 1vw
    }
  }
}
</style>