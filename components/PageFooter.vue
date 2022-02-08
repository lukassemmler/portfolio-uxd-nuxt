<template>
  <footer id="page-footer">
    <div class="container-medium">
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
      <div class="container-medium">
        <div class="footer-bedrock-inner">
          <nav class="footer-nav">
            <ul class="footer-nav-list">
              <li>
                <nuxt-link to="/" class="footer-nav-link">{{
                  $t("meta-title_index")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects" class="footer-nav-link">{{
                  $t("meta-title_projects")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about" class="footer-nav-link">{{
                  $t("meta-title_about")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact" class="footer-nav-link">{{
                  $t("meta-title_contact")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/imprint" class="footer-nav-link">{{
                  $t("meta-title_imprint")
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/privacy-policy" class="footer-nav-link">{{
                  $t("meta-title_privacy-policy")
                }}</nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- TODO automatically replace year or add Vue directive to format text strings -->
          <p class="footer-copyright">&copy; {{currentYear}}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialMediaList from "./SocialMediaList.vue";
export default {
  components: { SocialMediaList },
  
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
}

.footer-nav-link,
.footer-copyright {
  display: inline-block;
  padding: 0.5em 0.8em;
  margin: 0 0 0.5em;
}

.footer-nav {
}

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
}

.footer-nav-link {
  border-bottom-style: solid;

  &:hover {
    background-color: $gray-95;
  }
}

@media screen and (min-width: $breakpoint-big) {
  .footer-bedrock-inner {
    flex-flow: row;

    & > *:not(:last-child) {
      margin-right: 1em;
    }
  }

  .footer-nav-list {
    justify-content: flex-start;
    overflow-x: auto;
  }
}
</style>