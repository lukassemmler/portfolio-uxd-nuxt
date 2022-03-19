<template>
  <div>
    <header>
      <div class="container-small">
        <h1>{{ $t("heading_imprint") }}</h1>
      </div>
    </header>

    <section id="section-address" class="section">
      <div class="container-small">
        <h2 id="address">{{ $t("heading_imprint_address") }}</h2>
        <div
          class="text"
          v-markdown="$t('text_imprint_address').join('')"
        ></div>
      </div>
    </section>

    <section id="section-contact" class="section">
      <div class="container-small">
        <h2 id="contact">{{ $t("heading_imprint_contact") }}</h2>
        <div
          class="text"
          v-markdown="$t('text_imprint_contact').join('')"
        ></div>
      </div>
    </section>

    <section id="section-accountability-for-content" class="section">
      <div class="container-small">
        <h2 id="accountability-for-content">
          {{ $t("heading_imprint_accountability-for-content") }}
        </h2>
        <div
          class="text"
          v-markdown="$t('text_imprint_accountability-for-content').join('')"
        ></div>
      </div>
    </section>

    <section id="section-accountability-for-links" class="section">
      <div class="container-small">
        <h2 id="accountability-for-links">
          {{ $t("heading_imprint_accountability-for-links") }}
        </h2>
        <div
          class="text"
          v-markdown="$t('text_imprint_accountability-for-links').join('')"
        ></div>
      </div>
    </section>

    <section id="section-copyright" class="section">
      <div class="container-small">
        <h2 id="copyright">{{ $t("heading_imprint_copyright") }}</h2>
        <div
          class="text"
          v-markdown="$t('text_imprint_copyright').join('')"
        ></div>
        <p v-markdown="$t('text_imprint_source')"></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "vanilla",
};
</script>

<style lang="scss" scoped>
</style>