<template>
  <div class="container huge">
    <section>
      <h2 class="sr-only">{{ $t("meta-title_about") }}</h2>
      <simple-billboard class="spaced-bottom" src="lukas/lukas-waving.png" :alt="$t('alt_design-booklet_front')">
        <p>
          <strong class="text-semi-big">{{ $t("text_about_hello") }}</strong> <br />{{ $t("text_about_description") }}
        </p>
        <simple-button
          type="secondary"
          prefixed-icon="east"
          :target="localePath('/about')"
          :alt="$t('meta-title_about')"
          >{{ $t("meta-title_about") }}</simple-button
        >
      </simple-billboard>
    </section>

    <section>
      <div class="show-as-baseline flex-end-sbg">
        <h2>{{ $t("heading_index_projects") }}</h2>
        <simple-button
          type="secondary small"
          prefixed-icon="east"
          :target="localePath('/projects')"
          :alt="$t('label_all-projects')"
          >{{ $t("label_all-projects") }}</simple-button
        >
      </div>
      <div class="pillar-container gapped-h gapped-v">
        <div class="pillar-row">
          <div
            class="pillar-col-12 pillar-col-sbg-6 pillar-col-bg-4"
            v-for="project in projects"
            v-bind:key="project.id"
          >
            <post-teaser
              class="centered"
              :link="project.path"
              :linkTitle="$t(project.linkId)"
              :src="project.thumbnailSrc"
              :alt="$t(project.thumbnailAlt)"
              :ratio="project.thumbnailRatio"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t(project.titleRawId)"
              :subtitle="$t(project.subtitleId)"
            ></post-teaser>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageFooter from "~/components/PageFooter.vue";
import PageHeader from "~/components/PageHeader.vue";
import PostTeaser from "~/components/PostTeaser.vue";
import SimpleBillboard from "~/components/SimpleBillboard.vue";
import SimpleButton from "~/components/SimpleButton.vue";

import navigation from "assets/data/nav.json";
import tags from "assets/data/tags.json";
import { getTreeFromNav } from "~/assets/lib/site-tree";
import { getMetaData } from "~/assets/lib/meta-data";

export default {
  components: { SimpleBillboard, SimpleButton, PostTeaser },
  layout: "vanilla",
  head() {
    return getMetaData({
      url: this.$config.baseUrl + this.$route.path,
      siteName: this.$t("label_site-name"),
      title: this.$t("label_owner"),
      //titleTemplate: "%s \u2013 Lukas Semmler",
      description: this.$t("meta-description_index"),
      keywords: this.$t("meta-keywords_index"),
      author: this.$t("meta-author_index"),
      thumbnail: "/thumbnail/Thumbnail Design Booklet.jpg",
      thumbnailAlt: this.$t("alt_thumbnail_general"),
      themeColor: "#4a4a4a",
    });
  },
  data: function () {
    return {
      projects: getTreeFromNav(navigation, "projects", tags).slice(0, 3),
    };
  },
};
</script>

<style>
</style>