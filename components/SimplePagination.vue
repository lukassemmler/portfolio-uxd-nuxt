<template>
  <div class="simple-pagination">
    <ol class="simple-carousel-pagination-list">
      <li v-for="label in labels" :key="label">
        <simple-button
          class="simple-carousel-pagination-button"
          type="invisible-shadow"
          :aria-selected="selectedLabel === label"
          @click="$emit('click', $event, label)"
          ><span class="sr-only">{{ $t("label_step") }} </span
          >{{ label }}</simple-button
        >
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array,
      default: function () {
        return [ "1", "2", "3"];
      },
    },
    selectedLabel: {
      type: String,
      default: "1",
    }
  },
};
</script>

<style lang="scss" scoped>
.simple-carousel-pagination-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}
</style>