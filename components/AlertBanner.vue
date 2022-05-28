<template>
  <transition name="bounce">
    <div
      v-if="visible"
      class="alert-banner"
      :class="{ hidden: !visible }"
      :data-banner-id="bannerId"
    >
      <div class="alert-banner-content" role="alert">
        <p v-if="intro || message">
          <strong
            v-if="intro"
            class="alert-banner-intro"
            v-html="intro"
          ></strong>
          <span
            v-if="message"
            class="alert-banner-message"
            v-html="message"
          ></span>
        </p>
        <slot></slot>
      </div>
      <simple-button
        v-if="dismissable"
        class="alert-banner-close"
        target="#"
        type="invisible-dark round big-icon square"
        prefixedIcon="close"
        :aria-label="$t('component_banner_close')"
        role="button"
        @click="hide"
      ></simple-button>
    </div>
  </transition>
</template>

<script>
// TODO Fix banner text getting read endlessly by Windows Narrator.
// I'm not sure why this is happening, maybe there is an answer here: https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html
const SETTINGS_ID = "notifications";
import SimpleButton from "./SimpleButton.vue";
export default {
  components: { SimpleButton },
  props: {
    bannerId: {
      type: String,
      required: false,
    },
    intro: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    dismissable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data: function () {
    return {
      // The default behaviour is that dismissable messages are hidden.
      // This also means if JavaScript is deactivated, that dismissable banner will not get shown.
      // So make sure to always display super important information in non-dismissable banners.
      visible: !this.dismissable,
    };
  },
  methods: {
    show: function () {
      this.visible = true;
      this.$emit("shown");
    },
    hide: function () {
      this.visible = false;
      if (this.bannerId) this.saveAsDismissed();
      this.$emit("hidden");
    },
    saveAsDismissed: function () {
      const settingsRaw = localStorage.getItem(SETTINGS_ID);
      const timestamp = Date.now();
      if (settingsRaw === null) {
        const settings = {};
        settings[this.bannerId] = { dismissedAt: timestamp };
        localStorage.setItem(SETTINGS_ID, JSON.stringify(settings));
        return;
      }
      const notificationSettings = JSON.parse(settingsRaw);
      if (!notificationSettings[this.bannerId]) {
        notificationSettings[this.bannerId] = { dismissedAt: timestamp };
        localStorage.setItem(SETTINGS_ID, JSON.stringify(notificationSettings));
        return;
      }
      console.warn(
        `Trying to save that banner '${
          this.bannerId
        }' got dismissed, but was already dismissed at '${
          notificationSettings[this.bannerId].dismissedAt
        }'. `
      );
    },
  },
  mounted: function () {
    if (!this.bannerId) return;
    const dismissableAndShouldBeShown = this.dismissable && !this.visible;
    const settingsRaw = localStorage.getItem(SETTINGS_ID);
    if (settingsRaw === null) {
      if (dismissableAndShouldBeShown) this.show();
      return;
    }
    const notificationSettings = JSON.parse(settingsRaw);
    if (!notificationSettings[this.bannerId]) {
      if (dismissableAndShouldBeShown) this.show();
      return;
    }
    if (!notificationSettings[this.bannerId].dismissedAt) {
      console.log("Should be visible now!");
      if (dismissableAndShouldBeShown) this.show();
    }
  },
};
</script>

<style lang="scss" scoped>
.alert-banner {
  position: relative;
  //background-color: $dark-05;
  border: 0.25rem solid $black;
  box-shadow: 0 1em 2em $dark-15;
  padding: 1em 1.5em;
  border-radius: 2em;

  &.hidden {
    display: none;
  }
}

.alert-banner-content {
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
}

.alert-banner-close {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
}
</style>