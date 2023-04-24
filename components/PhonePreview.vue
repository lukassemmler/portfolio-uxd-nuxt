<template>
  <div class="phone-preview" :class="{ 'with-background': background }">
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
  &.with-background {
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
    width: 100%;
    height: 0;
    padding: 0 0 56.25% 0;
    box-shadow: 0 0 6rem $bright-50;
    border: 0.3rem solid;
    border-top-color: $black;
    border-left-color: $gray-20;
    border-right-color: $gray-26;
    border-bottom-color: $gray-40;
    border-radius: 0.2rem;
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

  @media screen and (min-width: $breakpoint-3xl) {
    .phone-preview-body {
      font-size: 19.2px; // 1920px / 100vw = 19.2px / 1vw
    }
  }
}
</style>