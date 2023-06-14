<template>
  <div class="content">
    <header class="project-intro" :class="background">
      <page-header :inverted="true" :background="headerBackground"></page-header>
      <h1 class="project-title" v-if="title" v-html="title"></h1>
      <slot name="header"></slot>
      <div class="container huge spaced-y">
        <div class="pillar-container gapped-h">
          <div class="pillar-row">
            <div class="pillar-col-xl-8">
              <project-meta
                :name="metaName"
                :tasks="metaTasks"
                :format="metaFormat"
                :lecture="metaLecture"
                :date="metaDate"
                :colleagues="metaColleagues"
              ></project-meta>
            </div>
            <div class="pillar-col-xl-4">
              <project-tools
                v-if="projectTools"
                :tools="projectTools"
                size="small"
              ></project-tools>
            </div>
          </div>
        </div>
      </div>
    </header>
    <slot name="content"></slot>
    <project-pagination
      :previousTitle="navPreviousTitle ? navPreviousTitle : navSetPreviousTitle"
      :previousLink="navPreviousLink ? navPreviousLink : navSetPreviousLink"
      :previousColor="navPreviousColor ? navPreviousColor : navSetPreviousColor"
      :nextTitle="navNextTitle ? navNextTitle : navSetNextTitle"
      :nextLink="navNextLink ? navNextLink : navSetNextLink"
      :nextColor="navNextColor ? navNextColor : navSetNextColor"
    ></project-pagination>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { validateIconItemList } from "~/assets/lib/icon-item-list";
import nav from "~/assets/data/nav.json";

const projectPages = nav.pages.filter(page => {
  const { id, enabled } = page;
  return id.startsWith("projects.") && enabled;
});

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
      default: "bg-gray",
    },
    headerBackground: {
      type: String,
      required: false,
      default: "",
    },
    metaName: String,
    metaTasks: String,
    metaFormat: String,
    metaLecture: String,
    metaDate: String,
    metaColleagues: String,
    projectTools: {
      type: Array,
      required: false,
      validator: validateIconItemList,
    },
    navPreviousTitle: String,
    navPreviousLink: String,
    navPreviousColor: String,
    navNextTitle: String,
    navNextLink: String,
    navNextColor: String,
    navSet: Array, // Automatically retrieves navigation info from nav set, can be overridden.
    navId: String, // Necessary to determine own current position when reading from nav tree.
  },
  data: function () {
    return {
      projectPages: this.$props.navSet ?? projectPages,
    };
  },
  computed: {
    navSetPreviousTitle: function () {
      const titleId = this.getNavSetEntryProp("previous", "titleId");
      return titleId ? this.$t(titleId) : null;
    },
    navSetPreviousLink: function () {
      return this.getNavSetEntryProp("previous", "path");
    },
    navSetPreviousColor: function () {
      return this.getNavSetEntryProp("previous", "color");
    },
    navSetNextTitle: function () {
      const titleId = this.getNavSetEntryProp("next", "titleId");
      return titleId ? this.$t(titleId) : null;
    },
    navSetNextLink: function () {
      return this.getNavSetEntryProp("next", "path");
    },
    navSetNextColor: function () {
      return this.getNavSetEntryProp("next", "color");
    },
  },
  methods: {
    getNavSetEntry: function (id) {
      if (!id || id.length === 0) {
        console.warn("No nav id specified, so nav set cannot be searched. ");
        return null;
      }
      if (!this.projectPages) return null;
      const match = this.projectPages.find(page => page.id === id);
      return match ?? null;
    },
    getRelevantPagesFromNavSet: function(id) {
      const { projectPages } = this;
      if (!projectPages) return null;
      const currentPageIndex = projectPages.findIndex(page => page.id === id);
      const currentPage = this.getNavSetEntry(id);
      const previousPage = projectPages[currentPageIndex - 1]; // Will be 'undefined' if out of array
      const nextPage = projectPages[currentPageIndex + 1]; // Will be 'undefined' if out of array
      return { currentPage, previousPage, nextPage };
    },
    getNavSetEntryProp: function(page, prop) {
      const relevantPages = this.getRelevantPagesFromNavSet(this.$props.navId);
      if (!relevantPages) return null;
      const { currentPage, previousPage, nextPage } = relevantPages;
      switch (page) {
        case "current":
          if (!currentPage) return null;
          return currentPage[prop];
        case "previous":
          if (!previousPage) return null;
          return previousPage[prop];
        case "next":
          if (!nextPage) return null;
          return nextPage[prop];
        default:
          throw new Error(`Unknown page type '${page}'. `);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.project-title {
  font-size: calc(1em + 2vw);
  text-align: center;
}

.project-intro {
  padding-bottom: $sp;
  color: $white;
  z-index: 0; // needs to have a z-index, so background parallax boxes can be used in the header
}
</style>