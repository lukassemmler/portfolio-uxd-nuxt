<template>
<div>
  <page-header></page-header>
  <main>
    <div class="bg-light">
      <div class="container-medium error-message">
        <p class="error-oopsie">
          <span>{{ $t("error_oopsie") }}</span>
        </p>
        <p class="error-description" v-html="$t('error_page-not-found')"></p>
        <p
          class="error-recovery"
          v-markdown="$t('error_go-back-to-start-page')"
        ></p>
        <nuxt-img
          class="error-image"
          src="drawing/Alpaca Bene.png"
          :alt="$t('error_something-went-wrong')"
        />
      </div>
    </div>
  </main>
</div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
export default {
  components: { PageHeader },};
</script>

<style lang="scss" scoped>
.error-message {
  position: relative;
  max-width: 40em;
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;

  p {
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
  }

  @media screen and (min-width: $breakpoint-semi-big) {
    text-align: left;

    p {
      margin-left: 0;
      margin-right: 0;
    }
  }
}

@media screen and (min-width: $breakpoint-semi-big) {
  div > .error-message {
    margin-top: 8rem;
  }
}

.error-oopsie {
  margin: 0 0 0.2em;
  font-size: 2.5em;
  font-weight: bold;
}

.error-description {
  font-size: 1.5em;
  margin: 0 0 0.5em;
}

.error-image {
  display: block;
  margin: 0 auto;
  pointer-events: none;

  @media screen and (min-width: $breakpoint-semi-big) {
    position: absolute;
    top: 0;
    right: -30px;
    margin: -200px 0 -150px auto;
  }
}
</style>