<template>
  <nav class="footer-nav">
    <ul class="footer-nav-list">
      <template v-for="site in sites">
        <li :key="site.path">
          <nuxt-link :to="localePath(site.path)" class="footer-nav-link">{{
            $t(site.labelId)
          }}</nuxt-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    sites: {
      type: Array,
      required: false,
      validator: function (sites) {
        return sites.every((site) => {
          const { path, labelId } = site;
          const hasPath =
            site.hasOwnProperty("path") && typeof path === "string";
          const hasLabelId =
            site.hasOwnProperty("labelId") && typeof labelId === "string";
          return hasPath && hasLabelId;
        });
      },
      default: function () {
        return [{ path: "/any-link", labelId: "debug_any-link" }];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-nav-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.5em;

  li {
    display: inline-block;
    border-bottom: 0;
    padding: 0;

    &:not(:last-child) {
      margin-right: 0.8em;
    }
  }

  @include breakpoint-upwards($breakpoint-big){
    justify-content: flex-start;
    overflow-x: auto;
  }
}

.footer-nav-link {
  display: inline-block;
  padding: 0.5em 0.8em;
  margin: 0 0 0.5em;
  border-bottom-style: solid;

  &:hover {
    background-color: $dusk-95;
  }
}
</style>