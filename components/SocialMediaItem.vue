<template>
  <div class="social-media-item">
    <a :href="url" class="social-media-item-link" rel="external">
      <div class="social-media-icon-container">
        <span class="icon" :class="iconClasses">
          <component v-bind:is="iconId + '-logo'"></component>
        </span>
      </div>
      <div v-if="label" class="social-media-label-container">
        <span class="social-media-label">{{ label }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import githubLogo from "~/assets/icons/social-github.svg?inline";
import instagramLogo from "~/assets/icons/social-instagram.svg?inline";
import linkedInLogo from "~/assets/icons/social-linked-in.svg?inline";
import xingLogo from "~/assets/icons/social-xing.svg?inline";

export default {
  components: { githubLogo, instagramLogo, linkedInLogo, xingLogo },
  props: {
    url: {
      type: String,
      required: true,
    },
    iconClasses: {
      type: String,
      required: true,
    },
    iconId: {
      type: String,
      required: true,
      validator: function (value) {
        return ["github", "instagram", "linked-in", "xing"].includes(value);
      },
    },
    label: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.social-media-item {
  display: inline-block;

  .social-media-item-link {
    display: inline-flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      color: $white;

      .social-media-icon-container,
      .social-media-label-container {
        background-color: $orange;
      }

      .icon {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .social-media-icon-container,
  .social-media-label-container {
    background-color: $dark-10;
  }

  .social-media-icon-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
  }

  .social-media-label-container {
    display: inline-flex;
    align-items: center;
    margin-left: 0.1em;
    padding-left: 0.8em;
    padding-right: 0.8em;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: width 0.1s ease-in-out, height 0.1s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }
}
</style>