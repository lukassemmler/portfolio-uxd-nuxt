<template>
  <div>
    <page-header></page-header>
    <div class="container huge">
      <cv-record
        iconId="business"
        :level="0"
        :title="$t('text_about_work-experience-1_organization')"
        :subtitle="$t('text_about_work-experience-1_title')"
        :timespan="$t('text_about_work-experience-1_time-span')"
        :location="$t('text_about_work-experience-1_location')"
        :description="$t('text_about_work-experience-1_description').join('')"
      ><template v-slot:extra>Test</template></cv-record>
    </div>
  </div>
</template>

<script>
import CvRecord from "~/components/CvRecord.vue";
import PageHeader from "~/components/PageHeader.vue";
export default {
  components: { PageHeader, CvRecord },
};
</script>

<style>
</style>