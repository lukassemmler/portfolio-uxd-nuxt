<template>
  <footer id="page-footer">
    <div class="container huge">
      <div class="footer-body">
        <p>
          <em>{{ $t("label_owner") }} </em><br />
          {{ $t("label_owner-description") }} <br />
          <a href="mailto:kontakt@lukassemmler.de">kontakt@lukassemmler.de</a>
          <br />
        </p>
        <social-media-list></social-media-list>
      </div>
    </div>
    <div class="footer-bedrock">
      <div class="container huge">
        <div class="footer-bedrock-inner">
          <footer-nav :sites="navigation"></footer-nav>
          <!-- TODO automatically replace year or add Vue directive to format text strings -->
          <p class="footer-copyright">&copy; {{currentYear}}</p>
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
#page-footer {
  padding: ($sp * 2) 0 0;
  color: $white;
  background-color: $gray-80;
}

.footer-body {
  padding: 1em 0;

  & > *:first-child {
    margin-top: 0;
  }
}

.footer-bedrock {
  background-color: $gray-93;
}

.footer-bedrock-inner {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1em 0;
  font-size: 0.8em;

  @include breakpoint-upwards($breakpoint-big) {
    flex-flow: row;

    & > *:not(:last-child) {
      margin-right: 1em;
    }
  }
}

.footer-copyright {
  display: inline-block;
  padding: 0.5em 0.8em;
  margin: 0 0 0.5em;
}
</style>