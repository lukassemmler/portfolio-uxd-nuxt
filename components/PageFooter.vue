<template>
  <footer class="page-footer">
    <div class="container huge">
      <div class="footer-inner">
        <footer-nav :sites="navigation"></footer-nav>
        <div class="footer-social-media">
          <social-media-list></social-media-list>
        </div>
        <div class="footer-copyright">
          <p class="footer-copyright-text">
            {{ $t("label_owner") }} &copy; {{ currentYear }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialMediaList from "./SocialMediaList.vue";
import FooterNav from "./FooterNav.vue";
import navigation from "assets/data/nav.json";

export default {
  components: { SocialMediaList },
  data: function () {
    return {
      navigation: navigation.trees.footer,
    };
  },
  computed: {
    currentYear: function () {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.page-footer {
  color: $white;
  background-color: $dusk-93;

  @include breakpoint-upwards($breakpoint-2xl) {
    .footer-inner {
      flex-flow: row;
    }

    .footer-social-media {
      margin-left: auto;
    }

    & > *:not(:last-child) {
      margin-right: 1em;
    }
  }
}

.footer-inner {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1em 0;
  font-size: 0.8em;
}

.footer-copyright {
  display: inline-block;
  padding: 0.5em 0.8em;
}

.footer-copyright-text {
  margin: 0;
  padding: 0;
}
</style>