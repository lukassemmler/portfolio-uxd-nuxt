<template>
  <nav class="project-pagination">
    <ul class="project-pagination-list">
      <li class="project-pagination-item" v-if="previousTitle">
        <pagination-card
          :class="itemCount > 1 ? 'slanted extended twin' : ''"
          :title="previousTitle"
          :color="previousColor"
          :link="localePath(previousLink)"
          :label="$t('label_project-pagination_previous')"
          direction="previous"
        ></pagination-card>
      </li>
      <li class="project-pagination-item" v-if="nextTitle">
        <pagination-card
          :class="itemCount > 1 ? 'slanted extended twin' : ''"
          :title="nextTitle"
          :color="nextColor"
          :link="localePath(nextLink)"
          :label="$t('label_project-pagination_next')"
          direction="next"
        ></pagination-card>
      </li>
    </ul>
  </nav>
</template>

<script>
import PaginationCard from "./PaginationCard.vue";

export default {
  components: { PaginationCard },
  props: {
    previousTitle: String,
    previousColor: String,
    previousLink: String,
    nextTitle: String,
    nextColor: String,
    nextLink: String,
  },
  computed: {
    itemCount: function () {
      let count = 0;
      if (this.previousTitle) count++;
      if (this.nextTitle) count++;
      return count;
    },
  },
};
</script>

<style lang="scss" scoped>
.project-pagination-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: block;
  flex-flow: row nowrap;
  align-items: stretch;

  @media screen and (min-width: $breakpoint-big) {
    display: flex;
  }
}

.project-pagination-item {
  flex: 1 1 0%;

  & > * {
    height: 100%;
  }
}
</style>