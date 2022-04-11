<template>
  <aside class="project-meta bright-font">
    <!-- TODO: Rename project meta string label from 'project-summary' to 'project-meta' -->
    <h2 class="sr-only">{{ $t("label_project-summary_headline") }}</h2>
    <dl class="project-meta-list">
      <div
        class="project-meta-group"
        v-for="metaItem in metaItems"
        v-bind:key="metaItem.key"
      >
        <dt class="project-meta-term">{{ metaItem.key }}</dt>
        <dd class="project-meta-description" v-html="metaItem.value"></dd>
      </div>
    </dl>
  </aside>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: "&ndash;",
    },
    tasks: {
      type: String,
      required: false,
      default: "&ndash;",
    },
    format: {
      type: String,
      required: false,
      default: "&ndash;",
    },
    lecture: {
      type: String,
      required: false,
      default: "&ndash;",
    },
    date: {
      type: String,
      required: false,
      default: "&ndash;",
    },
    colleagues: {
      type: String,
      required: false,
      default: "&ndash;",
    },
  },
  computed: {
    metaItems: function () {
      return [
        { key: this.$t("label_project-summary_name"), value: this.name },
        { key: this.$t("label_project-summary_client"), value: this.lecture },
        { key: this.$t("label_project-summary_tasks"), value: this.tasks },
        { key: this.$t("label_project-summary_format"), value: this.format },
        { key: this.$t("label_project-summary_date"), value: this.date },
        { key: this.$t("label_project-summary_colleagues"), value: this.colleagues },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.project-meta {
  line-height: 1.4;
}

.project-meta-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  column-gap: 2.5em;
  row-gap: 1.5em;
  margin: 0;
}

.project-meta-term {
  font-weight: bold;
  margin-bottom: 0.2em;
  letter-spacing: 0.02em;
}

.project-meta-description {
  margin-left: 0;
  font-size: 0.9em;
}
</style>