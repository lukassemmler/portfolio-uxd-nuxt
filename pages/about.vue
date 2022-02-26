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
      ></cv-record>

      <cv-record
        iconId="business"
        :level="0"
        :title="$t('text_about_work-experience-2_organization')"
        :subtitle="$t('text_about_work-experience-2_title')"
        :timespan="$t('text_about_work-experience-2_time-span')"
        :location="$t('text_about_work-experience-2_location')"
        :description="$t('text_about_work-experience-2_description').join('')"
      ></cv-record>

      <cv-record
        iconId="school"
        :level="0"
        :title="$t('text_about_education-1_organization')"
        :subtitle="$t('text_about_education-1_title')"
        :timespan="$t('text_about_education-1_time-span')"
        :location="$t('text_about_education-1_location')"
        :description="$t('text_about_education-1_description').join('')"
      ></cv-record>

      <cv-record
        iconId="school"
        :level="1"
        :title="$t('text_about_education-2_organization')"
        :subtitle="$t('text_about_education-2_title')"
        :timespan="$t('text_about_education-2_time-span')"
        :location="$t('text_about_education-2_location')"
        :description="$t('text_about_education-2_description').join('')"
        ><template v-slot:extra
          ><!-- TODO add button --><button>PDF</button></template
        ></cv-record
      >

      <cv-record
        iconId="trophy"
        :level="1"
        :title="$t('text_about_education-3_organization')"
        :subtitle="$t('text_about_education-3_title')"
        :timespan="$t('text_about_education-3_time-span')"
        :location="$t('text_about_education-3_location')"
        :description="$t('text_about_education-3_description').join('')"
      ></cv-record>

      <cv-record
        iconId="trophy"
        :level="1"
        :title="$t('text_about_education-4_organization')"
        :subtitle="$t('text_about_education-4_title')"
        :timespan="$t('text_about_education-4_time-span')"
        :location="$t('text_about_education-4_location')"
      ></cv-record>
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