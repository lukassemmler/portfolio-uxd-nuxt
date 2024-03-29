<template>
  <div class="container huge">
    <div class="show-as-baseline">
      <h1>{{ $t("heading_projects") }}</h1>
      <span class="results-count h3">{{
        $t("label_projects_count", { current: displayedProjects.length, total: projects.length })
      }}</span>
    </div>
    <!--
    <button>Filter by tags</button>
    <input type="radio" id="old-to-new" name="time-sorting" /><label for="old-to-new">oldest first</label>
    <input type="radio" id="new-to-old" name="time-sorting" /><label for="new-to-old">newest first</label>
    -->
    <ul class="list-tags">
      <li v-for="tag in usedTags" v-bind:key="tag.id">
        <simple-tag :class="{ active: tag.active }" :text="$t(tag.stringId)" @click="onTagClick(tag.id)" />
      </li>
    </ul>
    <div class="list-filtering">
      <p class="list-filtering-info" v-show="displayedProjects.length === 0">
        {{ $t("label_info_tag-list_no-results") }}
      </p>
      <ul class="list-separated">
        <transition-group name="list">
          <li class="list-separated-item" v-for="project in displayedProjects" v-bind:key="project.id">
            <post-item
              @tag-clicked="onTagClick"
              class="horizontal"
              :link="localePath(project.path)"
              :linkTitle="$t(project.linkId)"
              :src="project.thumbnailSrc"
              :alt="$t(project.thumbnailAlt)"
              :ratio="project.thumbnailRatio"
              sizes="xs:400px sm:640px md:960px lg:1200px"
              :title="$t(project.titleId)"
              :subtitle="$t(project.subtitleId)"
              :tags="getPostItemTags(project.tags)"
              :datetimeValue="project.created"
              :datetimeString="getLocalizedDatetimeString(new Date(project.created))"
            ></post-item>
          </li>
        </transition-group>
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
      projects: getTreeFromNav(navigation, "projects", tags),
      usedTags: null,
    };
  },
  computed: {
    activeTags: function () {
      return this.usedTags.filter((tag) => tag.active).map((tag) => tag.id);
    },
    displayedProjects: function () {
      if (this.activeTags.length === 0) return this.projects;
      const activeProjects = this.projects.filter((project) => {
        console.log(project);
        const projectTagIds = project.tags.map((tag) => tag.id);
        return this.activeTags.every((activeTag) => projectTagIds.includes(activeTag));
      });
      return activeProjects;
    },
  },
  created: function () {
    const tagsById = new Map();
    for (const project of this.projects) {
      const { tags } = project;
      for (const tag of tags) {
        const { id } = tag;
        if (tagsById.has(id)) continue;
        const newTag = { ...tag, active: false };
        tagsById.set(id, newTag);
      }
    }
    const usedTags = Array.from(tagsById, ([id, tag]) => tag);
    const sortStringsByLocale = (a, b) => {
      const localizedStringA = this.$t(a);
      const localizedStringB = this.$t(b);
      return localizedStringA.toLowerCase() > localizedStringB.toLowerCase();
    };
    this.usedTags = usedTags.sort((a, b) => sortStringsByLocale(a.stringId, b.stringId));
    console.log(this.$i18n.locale);
  },
  methods: {
    onTagClick: function (tagId) {
      const tag = this.usedTags.find((tag) => tag.id === tagId);
      if (!tag) {
        console.warn(`There is no actively used tag with id '${tagId}'. `);
        return;
      }
      tag.active = !tag.active;
      console.log(tag.active);
    },
    getLocalizedDatetimeString: function (date) {
      const { locale, locales } = this.$i18n;
      const fullLocale = locales.find((presetLocale) => presetLocale.code === locale);
      const defaultIsoCode = "en-US";
      if (!fullLocale)
        console.warn(`Could not find an iso code for locale '${locale}'. Defaulting to '${defaultIsoCode}'. `);
      const isoCode = fullLocale ? fullLocale.iso : defaultIsoCode;
      const year = date.toLocaleString(isoCode, { year: "numeric" });
      const month = date.toLocaleString(isoCode, { month: "long" });
      return year + " " + month;
    },
    getPostItemTags: function (rawTags) {
      return rawTags.map((tag) => {
        const { id, stringId } = tag;
        const usedTag = this.usedTags.find((usedTag) => usedTag.id === id);
        if (!usedTag) console.warn(`Could not find post item tag with id '${id}'. `);
        return {
          id: id,
          value: this.$t(stringId),
          active: usedTag.active,
        };
      });
    },
  },
};
</script>

<style lang="scss">
.list-filtering {
  position: relative;
}

.list-filtering-info {
  position: absolute;
}

.results-count {
  font-variant-numeric: tabular-nums;
  opacity: 0.6;
}
</style>