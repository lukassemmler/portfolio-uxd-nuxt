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
        <icon-item :iconId="tool.iconId" :label="tool.label"></icon-item>
      </li>
    </ul>
  </aside>
</template>

<script>
import IconItem from "./IconItem.vue";
export default {
  components: { IconItem },
  props: {
    tools: {
      type: Array,
      required: true,
      validator: function (tools) {
        const errors = [];
        if (!Array.isArray(tools))
          errors.push(
            `Tools should be an Array, but is type '${typeof tools}'. `
          );
        for (const tool of tools) {
          if (typeof tool !== "object")
            errors.push(
              `Tool should be type 'object', but is type '${typeof tool}'. `
            );
          const { iconId, label } = tool;
          if (!iconId) errors.push(`Tool does not have property 'iconId'. `);
          if (typeof iconId !== "string")
            errors.push(
              `'IconId should be type 'string', but is type '${typeof iconId}'. `
            );
          if (!label) errors.push(`Tool does not have property 'label'. `);
          if (typeof label !== "string")
            errors.push(
              `Label should be type 'string', but is type '${typeof label}'. `
            );
        }
        for (const error of errors) console.error("Project Tools: " + error);
        return errors.length === 0;
      },
      default: function () {
        return [{ iconId: "Godot", label: "Godot" }];
      },
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