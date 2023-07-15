<template>
  <div>
    <header>
      <div class="container small">
        <h1 v-html="$t('heading_privacy-policy')"></h1>
      </div>
    </header>

    <section id="section-data-protection" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_privacy-policy_data-protection')"
          id="data-protection"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_privacy-policy_data-protection').join('')"
        ></markdown-block>
      </div>
    </section>

    <section id="section-log-files" class="section">
      <div class="container small">
        <anchor-heading
          :level="2"
          :label="$t('heading_privacy-policy_log-files')"
          id="log-files"
        ></anchor-heading>
        <markdown-block
          :markup="$t('text_privacy-policy_log-files').join('')"
        ></markdown-block>
        <markdown-block
          :markup="$t('text_privacy-policy_source')"
        ></markdown-block>
      </div>
    </section>
  </div>
</template>

<script>
import AnchorHeading from "~/components/AnchorHeading.vue";
import MarkdownBlock from "~/components/MarkdownBlock.vue";
export default {
  components: { MarkdownBlock, AnchorHeading },
  layout: "vanilla",
};
</script>

<style lang="scss" scoped>
</style>