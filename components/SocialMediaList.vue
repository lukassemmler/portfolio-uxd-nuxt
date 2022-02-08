<template>
  <div class="social-media-list">
    <ul>
      <social-media-item
        url="https://www.instagram.com/lukas_arts_bavaria/"
        iconClasses="icon icon-social-instagram"
        iconId="instagram"
      ></social-media-item>
      <social-media-item
        url="https://github.com/Krankomat/"
        iconClasses="icon icon-social-github"
        iconId="github"
      ></social-media-item>
      <social-media-item
        url="https://www.linkedin.com/in/lukas-semmler-8b52a5161/"
        iconClasses="icon icon-social-linked-in"
        iconId="linked-in"
      ></social-media-item>
      <social-media-item
        url="https://www.xing.com/profile/Lukas_Semmler4/"
        iconClasses="icon icon-social-xing"
        iconId="xing"
      ></social-media-item>
    </ul>
  </div>
</template>

<script>
import SocialMediaItem from "./SocialMediaItem.vue";
export default {
  components: { SocialMediaItem },
};
</script>

<style lang="scss" scoped>
.social-media-list {
  ul {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    margin: 0;
    list-style-type: none;

    & > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
</style>