<template>
  <div>
    <header>
      <div class="container small">
        <h1>{{ $t("heading_imprint") }}</h1>
      </div>
    </header>

    <section id="section-address" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_address')"
          id="address"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_address').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-contact" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_contact')"
          id="contact"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_contact').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-accountability-for-content" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_accountability-for-content')"
          id="accountability-for-content"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_accountability-for-content').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-accountability-for-links" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_accountability-for-links')"
          id="accountability-for-links"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_accountability-for-links').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-copyright" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_imprint_copyright')"
          id="copyright"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_imprint_copyright').join('')"
        ></markdown-block>
        <markdown-block :markup="$t('text_imprint_source')"></markdown-block>
      </div>
    </section>
  </div>
</template>

<script>
import MarkdownBlock from "~/components/MarkdownBlock.vue";
export default {
  components: { MarkdownBlock },
  layout: "vanilla",
};
</script>

<style lang="scss" scoped>
</style>