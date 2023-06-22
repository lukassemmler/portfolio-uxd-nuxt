<template>
  <div class="container huge">
    <h1>{{ $t("heading_projects") }}</h1>
    <button>Filter by tags</button>
    <input type="radio" id="old-to-new" name="time-sorting"><label for="old-to-new">oldest first</label>
    <input type="radio" id="new-to-old" name="time-sorting"><label for="new-to-old">newest first</label>
    <span class="">showing X of X projects total</span>
    <ul class="list-tags">
      <li v-for="tag in usedTags" v-bind:key="tag.id">
        <simple-tag :text="$t(tag.stringId)" />
      </li>
    </ul>
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
            :datetimeValue="project.created"
            :datetimeString="getLocalizedDatetimeString(new Date(project.created))"
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
      usedTags: null,
    };
  },
  created: function () {
    const tagsById = new Map();
    for (const project of this.projects) {
      const { tags } = project;
      for (const tag of tags) {
        const { id } = tag;
        if (tagsById.has(id)) continue;
        tagsById.set(id, tag);
      }
    }
    const usedTags = Array.from(tagsById, ([id, tag]) => tag);
    const sortStringsByLocale = (a, b) => {
      const localizedStringA = this.$t(a);
      const localizedStringB = this.$t(b);
      return localizedStringA.toLowerCase() > localizedStringB.toLowerCase();
    };
    this.usedTags = usedTags.sort((a, b) => sortStringsByLocale(a.stringId, b.stringId));
    console.log(this.$i18n.locale)
  },
  methods: {
    getLocalizedDatetimeString: function (date) {
      const { locale, locales } = this.$i18n;
      const fullLocale = locales.find(presetLocale => presetLocale.code === locale);
      const defaultIsoCode = 'en-US';
      if (!fullLocale) console.warn(`Could not find an iso code for locale '${locale}'. Defaulting to '${defaultIsoCode}'. `);
      const isoCode = fullLocale ? fullLocale.iso : defaultIsoCode;
      const year = date.toLocaleString(isoCode, {year: "numeric"});
      const month = date.toLocaleString(isoCode, {month: "long"});
      return year + " " + month;
    },
  },
};
</script>

<style>
</style>