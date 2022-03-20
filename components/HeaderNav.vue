<template>
  <nav class="header-nav" :class="{ inverted }">
    <ul class="header-nav-list">
      <template v-for="site in sites">
        <li :key="site.path">
          <nuxt-link :to="localePath(site.path)" class="header-nav-link"
            ><span class="header-nav-label">{{ $t(site.labelId) }}</span
            ><span class="header-nav-label-dummy" aria-hidden="true">{{
              $t(site.labelId)
            }}</span></nuxt-link
          >
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
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
.header-nav {
  display: inline-block;

  &.inverted {
    color: $bright-60;

    .header-nav-link {
      color: $bright-60;
      
      &:hover {
        color: $white;
      }
    }

    .link-active {
      color: $white;
    }
  }
}

.header-nav-link {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: $sp 0;
  border-bottom-width: 0;
  &:hover {
    color: $orange;
    background-image: linear-gradient(
      to top,
      $orange 0%,
      $orange 3%,
      transparent 3%
    );
  }
}

// 'link-active' gets added to NuxtLink when active
.link-active {
  color: $black;
  font-weight: bold;
  text-decoration: none;
}

.header-nav-list {
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

.header-nav-label {
  display: inline-block;
  white-space: nowrap;
}

// With 'font-weight: bold', the size of the link increases slightly.
// To prevent the labels from shiftin weirdly, a non-visible, non-readable dummy label is inserted to guarantee the max width.
.header-nav-label-dummy {
  display: inline-block;
  font-weight: bold;
  height: 0;
  visibility: hidden;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>