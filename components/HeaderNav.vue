<template>
  <nav class="header-nav">
    <ul>
      <template v-for="site in sites">
        <li v-if="site.visible" :key="site.path">
          <nuxt-link :to="'/' + site.path">{{ $t(site.label) }}</nuxt-link>
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
          const { path, label, visible } = site;
          const hasPath =
            site.hasOwnProperty("path") && typeof path === "string";
          const hasLabel =
            site.hasOwnProperty("label") && typeof label === "string";
          const hasVisible =
            site.hasOwnProperty("visible") && typeof visible === "boolean";
          return hasPath && hasLabel && hasVisible;
        });
      },
      default: function () {
        return [{ path: "/any-link", label: "debug_any-link", visible: true }];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: inline-block;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;
      display: inline-block;

      &:not(:last-child) {
        margin-right: $sp;
      }
    }
  }

  a {
    display: inline-block;
    padding: $sp 0;
    border-bottom-width: 0;
    &:hover {
      background-image: linear-gradient(
        to top,
        $orange 0%,
        $orange 3%,
        transparent 3%
      );
    }
  }

  .link-active {
    color: $black;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>