<template>
  <aside class="summary bright-font">
    <table class="table-with-spacing">
      <tbody>
        <tr>
          <th>{{ $t("label_project-summary_name") }}</th>
          <td v-html="name"></td>
        </tr>
        <tr>
          <th>{{ $t("label_project-summary_tasks") }}</th>
          <td v-html="tasks"></td>
        </tr>
        <tr>
          <th>{{ $t("label_project-summary_format") }}</th>
          <td v-html="format"></td>
        </tr>
        <tr>
          <th>{{ $t("label_project-summary_lecture") }}</th>
          <td v-html="lecture"></td>
        </tr>
        <tr>
          <th>{{ $t("label_project-summary_date") }}</th>
          <td v-html="date"></td>
        </tr>
      </tbody>
    </table>
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
  },
};
</script>

<style lang="scss" scoped>
</style>