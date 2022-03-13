<template>
  <div>
    <page-header></page-header>
    <header>
      <div class="container-small">
        <h1 class="sr-only">{{ $t("heading_contact") }}</h1>
      </div>
    </header>
    <section id="section-contact" class="section">
      <!-- TODO Add dark-mode -->
      <div class="container-small center-all-children-col spaced-bottom">
        <simple-image
          class="avatar-icon"
          src="lukas/Lukas-Avatar.png"
          alt=""
        ></simple-image>
        <address
          v-markdown="{
            markup: $t('text_contact').join(''),
            format: { year: currentYear },
          }"
        ></address>
        <social-media-list></social-media-list>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import SocialMediaList from "~/components/SocialMediaList.vue";
export default {
  components: { PageHeader, SocialMediaList },
  computed: {
    currentYear: function () {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>