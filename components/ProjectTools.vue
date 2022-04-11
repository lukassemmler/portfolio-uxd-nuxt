<template>
  <aside class="project-tools">
    <!-- Rename heading locale key to 'project-meta' -->
    <h2 class="sr-only">{{ $t("label_project-summary_tools") }}</h2>
    <ul class="project-tools-list">
      <li
        class="project-tools-item"
        v-for="tool in tools"
        v-bind:key="tool.iconId"
      >
        <icon-item
          :iconId="tool.iconId"
          :label="tool.label"
          :class="size"
        ></icon-item>
      </li>
    </ul>
  </aside>
</template>

<script>
import IconItem from "./IconItem.vue";
import { validateIconItemList } from "~/assets/lib/icon-item-list";
export default {
  components: { IconItem },
  props: {
    tools: {
      type: Array,
      required: true,
      validator: validateIconItemList,
      default: function () {
        return [{ iconId: "Godot", label: "Godot" }];
      },
    },
    size: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-tools-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
}
</style>