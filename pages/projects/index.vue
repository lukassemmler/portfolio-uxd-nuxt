<template>
  <div class="container huge">
    <h1>{{ $t("heading_projects") }}</h1>
    <div class="list-filtering">
      <ul class="list-separated">
        <li v-for="project in projects" v-bind:key="project.id">
          <post-item
            class="horizontal"
            :link="project.path"
            :linkTitle="$t(project.linkId)"
            :src="project.thumbnailSrc"
            :alt="$t(project.thumbnailAlt)"
            :ratio="project.thumbnailRatio"
            sizes="xs:400px sm:640px md:960px lg:1200px"
            :title="$t(project.titleId)"
            :subtitle="$t(project.subtitleId)"
            :tags="project.tags.map((tag) => $t(tag.stringId))"
          ></post-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PageFooter from "~/components/PageFooter.vue";
import PageHeader from "~/components/PageHeader.vue";
import PostTeaser from "~/components/PostTeaser.vue";
import navigation from "assets/data/nav.json";
import tags from "assets/data/tags.json";
import { getTreeFromNav } from "~/assets/lib/site-tree";

export default {
  layout: "vanilla",
  components: { PageHeader, PageFooter, PostTeaser },
  data: function () {
    return {
      projects: getTreeFromNav(navigation, "projects", tags).reverse(),
    };
  },
  //mounted: function () {
  //  console.log(this.projects)
  //},
};
</script>

<style>
</style>