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
      :previousTitle="navPreviousTitle"
      :previousLink="navPreviousLink"
      :previousColor="navPreviousColor"
      :nextTitle="navNextTitle"
      :nextLink="navNextLink"
      :nextColor="navNextColor"
    ></project-pagination>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { validateIconItemList } from "~/assets/lib/icon-item-list";
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
}
</style>