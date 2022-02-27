<template>
  <div>
    <page-header></page-header>
    <div class="container huge">
      <div class="pillar-container gapped-h">
        <div class="pillar-row">
          <section class="pillar-col-bg-6">
            <h2 id="work-experience">
              {{ $t("heading_about_work-experience") }}
            </h2>
            <cv-record
              iconId="business"
              :level="0"
              :title="$t('text_about_work-experience-1_organization')"
              :subtitle="$t('text_about_work-experience-1_title')"
              :timespan="$t('text_about_work-experience-1_time-span')"
              :location="$t('text_about_work-experience-1_location')"
              :description="
                $t('text_about_work-experience-1_description').join('')
              "
            ></cv-record>
            <cv-record
              iconId="business"
              :level="0"
              :title="$t('text_about_work-experience-2_organization')"
              :subtitle="$t('text_about_work-experience-2_title')"
              :timespan="$t('text_about_work-experience-2_time-span')"
              :location="$t('text_about_work-experience-2_location')"
              :description="
                $t('text_about_work-experience-2_description').join('')
              "
            ></cv-record>
          </section>
          <section class="pillar-col-bg-6">
            <h2 id="education">{{ $t("heading_about_education") }}</h2>
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
              ><template v-slot:extra>
                <a href="download/BA Lukas Semmler.pdf" class="link-button"
                  >&#8594;PDF</a
                >
              </template></cv-record
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
          </section>
        </div>
      </div>
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